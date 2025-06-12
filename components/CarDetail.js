import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const CarDetail = ({ route, navigation }) => {
  const { car } = route.params;
  const [pickupDate, setPickupDate] = useState(new Date(2024, 8, 22)); // February is month 1
  const [dropoffDate, setDropoffDate] = useState(new Date(2024, 8, 24)); // March is month 2
  const [showPickupPicker, setShowPickupPicker] = useState(false);
  const [showDropoffPicker, setShowDropoffPicker] = useState(false);

  const onPickupDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || pickupDate;
    setShowPickupPicker(false);
    setPickupDate(currentDate);
  };

  const onDropoffDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dropoffDate;
    setShowDropoffPicker(false);
    setDropoffDate(currentDate);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.yourCar}>Your Car</Text>
        <Text style={styles.carName}>{car.name}</Text>
        <Text style={styles.carModel}>{car.model}</Text>
        <Text style={styles.price}>${car.price.toFixed()}</Text>
        <View style={styles.imageContainer}>
          <Image source={car.image} style={styles.carImage} resizeMode="contain" />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>{car.brand}</Text>
          <Text style={styles.detailsText}>
            {car.description || 'Best Family Car'}
          </Text>
          <View style={styles.dateContainer}>
            <View style={styles.dateSection}>
              <Text style={styles.dateLabel}>PICK-UP</Text>
              <TouchableOpacity style={styles.dateBox} onPress={() => setShowPickupPicker(true)}>
                <Text style={styles.dateNumber}>{pickupDate.getDate()}</Text>
                <View>
                  <Text style={styles.dateMonth}>{pickupDate.toLocaleString('default', { month: 'short' })}</Text>
                  <Text style={styles.dateYear}>{pickupDate.getFullYear()}</Text>
                </View>
              </TouchableOpacity>
              {showPickupPicker && (
                <DateTimePicker
                  value={pickupDate}
                  mode="date"
                  display="default"
                  onChange={onPickupDateChange}
                />
              )}
            </View>
            <View style={styles.dateSection}>
              <Text style={styles.dateLabel}>DROP-OFF</Text>
              <TouchableOpacity style={styles.dateBox} onPress={() => setShowDropoffPicker(true)}>
                <Text style={styles.dateNumber}>{dropoffDate.getDate()}</Text>
                <View>
                  <Text style={styles.dateMonth}>{dropoffDate.toLocaleString('default', { month: 'short' })}</Text>
                  <Text style={styles.dateYear}>{dropoffDate.getFullYear()}</Text>
                </View>
              </TouchableOpacity>
              {showDropoffPicker && (
                <DateTimePicker
                  value={dropoffDate}
                  mode="date"
                  display="default"
                  onChange={onDropoffDateChange}
                />
              )}
            </View>
          </View>
          <TouchableOpacity style={styles.goButton}>
            <Text style={styles.goButtonText}>GO</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4b0082" ,
  },
  scrollContent: {
    flexGrow: 1,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
  },
  yourCar: {
    color: 'white',
    fontSize: 16,
    marginTop: 60,
    marginLeft: 20,
  },
  carName: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  carModel: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  price: {
    color: 'white',
    fontSize: 24,
    marginLeft: 20,
    marginTop: 10,
  },
  imageContainer: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  carImage: {
    width: '100%',
    height: '100%',
  },
  detailsContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    flex: 1,
  },
  detailsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailsText: {
    color: '#666',
    marginBottom: 20,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dateSection: {
    alignItems: 'center',
  },
  dateLabel: {
    color: 'orange',
    marginBottom: 5,
  },
  dateBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EEE',
    borderRadius: 10,
    padding: 10,
  },
  dateNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  dateMonth: {
    fontSize: 12,
  },
  dateYear: {
    fontSize: 12,
    color: '#999',
  },
  goButton: {
    backgroundColor: "#4b0082" ,
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  goButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CarDetail;