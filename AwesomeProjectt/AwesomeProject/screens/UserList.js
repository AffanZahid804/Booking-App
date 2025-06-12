import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const users = [
  { id: '1', name: 'Cooper Curtis', image: 'https://img.freepik.com/free-photo/young-beautiful-blonde-woman-with-fresh-sensuality-generative-ai_188544-7656.jpg' },
  { id: '2', name: 'Carter Mango', image: 'https://global.discourse-cdn.com/openai1/optimized/3X/9/e/9e938a05462b0c09ce6048589fcbe08cc111eec7_2_500x500.jpeg' },
  { id: '3', name: 'Carter Calzoni', image: 'https://global.discourse-cdn.com/openai1/optimized/3X/9/e/9e938a05462b0c09ce6048589fcbe08cc111eec7_2_500x500.jpeg' },
  { id: '4', name: 'James Calzoni', image: 'https://global.discourse-cdn.com/openai1/optimized/3X/9/e/9e938a05462b0c09ce6048589fcbe08cc111eec7_2_500x500.jpeg' },
  { id: '5', name: 'Marley Rhiel', image: 'https://global.discourse-cdn.com/openai1/optimized/3X/9/e/9e938a05462b0c09ce6048589fcbe08cc111eec7_2_500x500.jpeg' },
];

const UserList = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://img.freepik.com/free-photo/hands-through-old-library_397170-1172.jpg' }} style={styles.backgroundImage} />
      <View style={styles.header}>
        <Image source={{ uri: 'https://img.freepik.com/free-photo/young-adult-beauty-girl-portrait-one-person-generative-ai_188544-7650.jpg' }} style={styles.profileImage} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.userName}>Lydia Press</Text>
          <View style={styles.followerContainer}>
            <View style={styles.followerOverlay}>
              <Text style={styles.followerCount}>3.6K</Text>
            </View>
          </View>
        </View>
        <View style={styles.headerIcons}>
          <Icon name="check-circle" size={24} color="#1E90FF" style={styles.icon} />
          <Icon name="add" size={24} color="#333" style={styles.icon} />
          <Icon name="search" size={24} color="#333" style={styles.icon} />
          <Text style={styles.imageDimensions}>335 x 71</Text>
          <Icon name="arrow-drop-down" size={24} color="#333" style={styles.icon} />
        </View>
      </View>

      {/* Gray Bar to Open Modal */}
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.openModalBar}>
        <View style={styles.openBar} />
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                <View style={styles.closeBar} />
              </TouchableOpacity>
              <View style={styles.modalSearchContainer}>
                <Icon name="search" size={20} color="#999" style={styles.searchIcon} />
                <TextInput
                  style={styles.modalSearch}
                  placeholder="Search"
                  placeholderTextColor="#999"
                  value={searchTerm}
                  onChangeText={setSearchTerm}
                />
              </View>
              <FlatList
                data={filteredUsers}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.modalItem}
                    onPress={() => {
                      navigation.navigate('UserProfileModal', { userId: item.id });
                      setModalVisible(false);  // Close the modal on item select
                    }}
                  >
                    <Image source={{ uri: item.image }} style={styles.circleIcon} />
                    <Text style={styles.modalItemText}>{item.name}</Text>
                    <TouchableOpacity style={styles.followButton}>
                      <Text style={styles.followButtonText}>Follow</Text>
                    </TouchableOpacity>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(240, 240, 240, 0.8)', // make header transparent
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop: 20, // Move entire header down
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E0E0E0',
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: 16,
    position: 'relative', // Add relative positioning for proper overlay
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  followerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5, // Move container slightly lower
    position: 'absolute', // Absolute positioning to overlap name
    top: 0,
    right: 0,
  },
  followerOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // More transparent
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  followerCount: {
    fontSize: 14,
    color: '#fff',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 10,
  },
  imageDimensions: {
    fontSize: 12,
    color: '#999',
    marginLeft: 10,
  },
  openModalBar: {
    position: 'absolute',
    bottom: 30,
    left: '50%',
    marginLeft: -25,
  },
  openBar: {
    width: 50,
    height: 5,
    backgroundColor: '#d3d3d3',
    borderRadius: 2.5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.455)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: 20,
    height: '50%',
  },
  closeButton: {
    alignSelf: 'center',
    marginBottom: 15,
  },
  closeBar: {
    width: 50,
    height: 5,
    backgroundColor: '#d3d3d3',
    borderRadius: 2.5,
  },
  modalSearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  modalSearch: {
    flex: 1,
    fontSize: 16,
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  circleIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    marginRight: 15,
  },
  modalItemText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  followButton: {
    backgroundColor: '#ff1493',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  followButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default UserList;
