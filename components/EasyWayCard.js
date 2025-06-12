import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import AeroImage from '../assets/Aero.png'; // Adjust the path based on your project structure

const EasyWayCard = () => {
  return (
    <ImageBackground
      source={AeroImage} // Use the imported image from assets
      style={styles.container}
      imageStyle={styles.image} // Style for the background image
    >
     {/* <View style={styles.textContainer}>
        <Text style={styles.title}>Easy Way</Text>
        <Text style={styles.title}>To Your</Text>
        <Text style={styles.title}>Next</Text>
        <Text style={styles.title}>Destination</Text>
      </View>   */}
    </ImageBackground>   
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 330,
    marginVertical: 10,
  },
  image: {
    borderRadius: 23, // Ensures the background image matches the container's border radius
  },
  textContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: adds a translucent background for text readability
    padding: 10,
    borderRadius: 10, // Optional: gives a rounded border to the text container
  },
  title: {
    color: 'white',
    fontSize: 15, // Adjusted font size for better appearance
    fontWeight: 'bold',
    lineHeight: 28,
  },
});

export default EasyWayCard;


