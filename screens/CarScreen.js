import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Use require to load local images
const carData = [
  { id: '1', name: 'Prado', rating: 4.6, price: 25000, image: require('../assets/car.png') },
  { id: '2', name: 'V8', rating: 4.9, price: 26000, image: require('../assets/car.png') },
  { id: '3', name: 'Land Cruiser', rating: 3.8, price: 20000, image: require('../assets/car.png') },
];

const CarItem = ({ item, onPress }) => (
  <TouchableOpacity style={styles.carItem} onPress={onPress}>
    <Image source={item.image} style={styles.carImage} />
    <View style={styles.carInfo}>
      <Text style={styles.carName}>{item.name}</Text>
      <View style={styles.ratingContainer}>
        <Ionicons name="star" size={16} color="orange" />
        <Text style={styles.rating}>{item.rating}</Text>
      </View>
    </View>
    <Text style={styles.price}>Rs{item.price} <Text style={styles.perDay}>/day</Text></Text>
  </TouchableOpacity>
);

export default function CarRental({ navigation }) {
  const [filteredData, setFilteredData] = useState(carData);
  const [modalVisible, setModalVisible] = useState(false);

  const sortCars = (order) => {
    const sortedData = [...filteredData].sort((a, b) => {
      return order === 'low' ? a.price - b.price : b.price - a.price;
    });
    setFilteredData(sortedData);
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <CarItem item={item} onPress={() => navigation.navigate('CarDetail', { car: item })} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.filterButton} onPress={() => setModalVisible(true)}>
        <Ionicons name="options" size={24} color="white" />
        <Text style={styles.filterButtonText}>Search Filters</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Choose a Car</Text>
      
      <View style={styles.carListContainer}>
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      {/* Filter Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Sort Cars</Text>
            <TouchableOpacity onPress={() => sortCars('low')} style={styles.sortButton}>
              <Text style={styles.sortButtonText}>Price: Low to High</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => sortCars('high')} style={styles.sortButton}>
              <Text style={styles.sortButtonText}>Price: High to Low</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#4b0082",
    padding: 10,
    borderRadius: 25,
    margin: 10,
  },
  filterButtonText: {
    color: 'white',
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  carListContainer: {
    paddingTop: 60, // Space above the car items
  },
  carItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    marginBottom: 45, // Space between each car card
    backgroundColor: '#F7F7F7', // Shaded background color
    borderRadius: 10, // Rounded corners for the card
    elevation: 2, // Adds a shadow effect on Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.1, // Shadow opacity for iOS
    shadowRadius: 4, // Shadow blur for iOS
  },
  carImage: {
    width: 100,
    height: 60,
    borderRadius: 10,
  },
  carInfo: {
    flex: 1,
    marginLeft: 10,
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 5,
    color: 'orange',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  perDay: {
    fontSize: 12,
    color: '#999999',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sortButton: {
    padding: 10,
    backgroundColor: '#4b0082',
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  sortButtonText: {
    color: 'white',
  },
  closeButton: {
    padding: 10,
    marginTop: 20,
  },
  closeButtonText: {
    color: '#4b0082',
  },
});
