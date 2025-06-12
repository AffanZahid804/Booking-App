
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoardingPass = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Boarding Pass</Text>
      <View style={styles.passContainer}>
        <Text style={styles.flightNumber}>PC979</Text>
        <View style={styles.airportContainer}>
          <Text style={styles.airportCode}>PIA</Text>
          <Text style={styles.airportName}>Lahore, Pakistan</Text>
        </View>
        <View style={styles.airportContainer}>
          <Text style={styles.airportCode}>PIA</Text>
          <Text style={styles.airportName}>Karachi, Pakistan</Text>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>10:15 AM</Text>
            <Text style={styles.detailValue}>Fri, 29 Sep</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>B4</Text>
            <Text style={styles.detailValue}>Gate</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>21A</Text>
            <Text style={styles.detailValue}>Seat</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4b0082" ,
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  passContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
  },
  flightNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  airportContainer: {
    marginBottom: 10,
  },
  airportCode: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  airportName: {
    fontSize: 14,
    color: '#666',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 10,
  },
  detailItem: {
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailValue: {
    fontSize: 12,
    color: '#666',
  },
});

export default BoardingPass;



