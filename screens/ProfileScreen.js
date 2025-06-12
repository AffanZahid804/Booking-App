import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase'; // If you're using Firebase
import AsyncStorage from '@react-native-async-storage/async-storage'; // If you're using AsyncStorage
import { signOut } from 'firebase/auth';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      // Sign out the user using Firebase
      await signOut(auth);

      // Optionally clear any stored tokens in AsyncStorage
      await AsyncStorage.removeItem('tokenUser');

      // Navigate back to the Login screen and replace the navigation stack
      navigation.replace('Login');
    } catch (error) {
      console.log('Error logging out: ', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>

      {/* Logout Button */}
      <Pressable
        onPress={handleLogout}
        style={styles.logoutButton}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: "#4b0082"   , // Red color for the logout button
    padding: 15,
    borderRadius: 10,
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

