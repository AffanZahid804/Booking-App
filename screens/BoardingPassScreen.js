/*import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import BoardingPass from '../components/BoardingPass';

const availableFlights = [
  // Your flight data...
];

const BoardingPassScreen = ({ route }) => {
  const { selectedCity } = route.params; // Accessing selected city
  const [selectedFlight, setSelectedFlight] = useState(null);

  const getFlightsForCity = (cityCode) => {
    return availableFlights.filter((flight) => flight.to.code === cityCode).slice(0, 3);
  };

  const filteredFlights = selectedCity ? getFlightsForCity(selectedCity) : [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Flight</Text>
      {selectedCity && (
        <FlatList
          data={filteredFlights}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Button
              title={`Flight ${item.flightNumber} - ${item.to.name}`}
              onPress={() => setSelectedFlight(item)}
            />
          )}
        />
      )}
      {selectedFlight ? (
        <BoardingPass flightData={selectedFlight} />
      ) : (
        <Text style={styles.placeholderText}>No flight selected yet.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  // Your styles...
});

export default BoardingPassScreen;   */


import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const availableFlights = {
  Islamabad: [
    { id: '1', time: '09:00 AM' },
    { id: '2', time: '02:00 PM' },
    { id: '3', time: '07:00 PM' },
  ],
  Karachi: [
    { id: '1', time: '10:30 AM' },
    { id: '2', time: '03:30 PM' },
    { id: '3', time: '08:30 PM' },
  ],
  Gilgit: [
    { id: '1', time: '08:00 AM' },
    { id: '2', time: '01:00 PM' },
    { id: '3', time: '06:00 PM' },
  ],
};

const BoardingPassScreen = ({ route, navigation }) => {
  const { to } = route.params; // Accessing selected city from BookingForm
  const [selectedFlight, setSelectedFlight] = useState(null);

  const flights = availableFlights[to] || [];

  const renderFlightItem = ({ item }) => (
    <TouchableOpacity
      style={styles.flightItem}
      onPress={() => setSelectedFlight(item)}
    >
      <Text style={styles.flightTime}>{item.time}</Text>
      <Text style={styles.flightDestination}>To: {to}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#4b0082" />
      </TouchableOpacity>
      <Text style={styles.title}>Select a Flight to {to}</Text>
      <FlatList
        data={flights}
        renderItem={renderFlightItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flightList}
      />
      {selectedFlight && (
        <View style={styles.selectedFlightContainer}>
          <Text style={styles.selectedFlightTitle}>Selected Flight:</Text>
          <Text style={styles.selectedFlightInfo}>
            {selectedFlight.time} to {to}
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4b0082',
  },
  flightList: {
    flexGrow: 1,
  },
  flightItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  flightTime: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4b0082',
  },
  flightDestination: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  selectedFlightContainer: {
    backgroundColor: '#e6f3ff',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
  selectedFlightTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4b0082',
    marginBottom: 10,
  },
  selectedFlightInfo: {
    fontSize: 16,
    color: '#333',
  },
});

export default BoardingPassScreen;

