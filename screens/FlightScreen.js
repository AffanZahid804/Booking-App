
/*import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import EasyWayCard from '../components/EasyWayCard';
import BookingForm from '../components/BookingForm';
import BoardingPass from '../components/BoardingPass';

const FlightScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <EasyWayCard />
      <BookingForm />
      <BoardingPass />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default FlightScreen;   */



import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import EasyWayCard from '../components/EasyWayCard';
import BookingForm from '../components/BookingForm';
import { useNavigation } from '@react-navigation/native';

const FlightScreen = () => {
  const navigation = useNavigation();

  const handleSearchFlights = () => {
    // Navigate to the BoardingPassScreen when the search button is pressed
    navigation.navigate('BoardingPassScreen');
  };

  return (
    <ScrollView style={styles.container}>
      <EasyWayCard />
      <BookingForm onSearchFlights={handleSearchFlights} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default FlightScreen;

