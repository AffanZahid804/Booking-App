import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable, FlatList, Modal, SafeAreaView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const cities = ['Karachi', 'Islamabad', 'Gilgit']; // Array of city options

const BookingForm = () => {
  const navigation = useNavigation();
  const [tripType, setTripType] = useState('roundTrip');
  const [from, setFrom] = useState('Lahore'); // Default value for "From"
  const [to, setTo] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [adults, setAdult] = useState(1);
  const [children, setChildren] = useState(0);
  const [error, setError] = useState('');
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date()); // Default date
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility
  const [filteredCities, setFilteredCities] = useState(cities); // State for filtered cities based on user input

  const handleSearchFlights = () => {
    if (!from || !to || !departDate) {
      setError('Please fill out all fields');
    } else {
      setError('');
      navigation.navigate('BoardingPassScreen', { to });
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || departDate;
    setCalendarVisible(false);
    setDepartDate(currentDate.toLocaleDateString()); // Format date to string
    setSelectedDate(currentDate); // Store the selected date
  };

  const handleCitySelect = (city) => {
    setTo(city);
    setModalVisible(false); // Close the modal after selecting a city
  };

  const filterCities = (text) => {
    setTo(text); // Update the "To" input value
    const filtered = cities.filter((city) => city.toLowerCase().includes(text.toLowerCase()));
    setFilteredCities(filtered);
    setModalVisible(filtered.length > 0); // Show the modal if there are matching cities
  };

  const closeModal = () => {
    setModalVisible(false);
    setTo(''); // Optionally reset "To" input
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Book Your Next Flight</Text>
      <View style={styles.tripTypeContainer}>
        <TouchableOpacity
          style={[styles.tripTypeButton, tripType === 'roundTrip' && styles.activeButton]}
          onPress={() => setTripType('roundTrip')}
        >
          <Text style={[styles.tripTypeText, tripType === 'roundTrip' && styles.activeText]}>Round trip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tripTypeButton, tripType === 'oneWay' && styles.activeButton]}
          onPress={() => setTripType('oneWay')}
        >
          <Text style={[styles.tripTypeText, tripType === 'oneWay' && styles.activeText]}>One way</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tripTypeButton, tripType === 'multiCity' && styles.activeButton]}
          onPress={() => setTripType('multiCity')}
        >
          <Text style={[styles.tripTypeText, tripType === 'multiCity' && styles.activeText]}>Multi-city</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>From</Text>
        <TextInput
          style={styles.input}
          placeholder="Lahore"
          value={from}
          editable={false} // Make input read-only
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>To</Text>
        <TextInput
          style={styles.input}
          placeholder="Select City"
          value={to}
          onChangeText={filterCities} // Update city suggestions based on input
          onFocus={() => filterCities(to)} // Show modal on focus with current input
        />
      </View>

      {/* Modal for city selection */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <FlatList
              data={filteredCities}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleCitySelect(item)} style={styles.cityItem}>
                  <Text style={styles.cityText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.dateContainer}>
        <Pressable onPress={() => setCalendarVisible(true)} style={styles.dateInput}>
          <Text style={styles.label}>Depart</Text>
          <TextInput
            style={styles.input}
            placeholder="Select Date"
            value={departDate}
            editable={false} // Make input read-only
          />
          <Feather name="calendar" size={24} color="black" style={styles.calendarIcon} />
        </Pressable>
        {calendarVisible && (
          <DateTimePicker
            testID="dateTimePicker"
            value={selectedDate}
            mode="date"
            display="default"
            onChange={onChange}
          />
        )}
      </View>

      {/* Adults Count Section */}
      <View style={styles.countContainer}>
        <Text style={styles.label}>Adults</Text>
        <Pressable style={styles.counter}>
          <Pressable onPress={() => setAdult(Math.max(1, adults - 1))} style={styles.counterButton}>
            <Text style={styles.counterText}>-</Text>
          </Pressable>
          <Text style={styles.countDisplay}>{adults}</Text>
          <Pressable onPress={() => setAdult((c) => c + 1)} style={styles.counterButton}>
            <Text style={styles.counterText}>+</Text>
          </Pressable>
        </Pressable>
      </View>

      {/* Children Count Section */}
      <View style={styles.countContainer}>
        <Text style={styles.label}>Children</Text>
        <Pressable style={styles.counter}>
          <Pressable onPress={() => setChildren(Math.max(0, children - 1))} style={styles.counterButton}>
            <Text style={styles.counterText}>-</Text>
          </Pressable>
          <Text style={styles.countDisplay}>{children}</Text>
          <Pressable onPress={() => setChildren((c) => c + 1)} style={styles.counterButton}>
            <Text style={styles.counterText}>+</Text>
          </Pressable>
        </Pressable>
      </View>

      {/* Display error message if fields are empty */}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity style={styles.searchButton} onPress={handleSearchFlights}>
        <Text style={styles.searchButtonText}>Search Flights</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4b0082',
  },
  tripTypeContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tripTypeButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginRight: 10,
  },
  activeButton: {
    backgroundColor: '#e6f3ff',
  },
  tripTypeText: {
    color: '#666',
  },
  activeText: {
    color: '#4b0082',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  dateContainer: {
    marginBottom: 15,
  },
  dateInput: {
    position: 'relative',
  },
  calendarIcon: {
    position: 'absolute',
    right: 10,
    top: 20,
  },
  countContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterButton: {
    backgroundColor: '#e6f3ff',
    padding: 10,
    borderRadius: 5,
  },
  counterText: {
    fontSize: 16,
  },
  countDisplay: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  searchButton: {
    backgroundColor: '#4b0082',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  searchButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContainer: {
    backgroundColor: 'white',
    width: '80%',
    padding: 20,
    borderRadius: 10,
  },
  cityItem: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    marginVertical: 5,
    borderRadius: 5,
  },
  cityText: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#4b0082',
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default BookingForm;


