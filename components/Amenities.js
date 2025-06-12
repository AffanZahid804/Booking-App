/*import { StyleSheet, Text, View , Dimensions } from 'react-native'
import React from 'react'



const { width } = Dimensions.get('window');

    const Amenities = () => {
    

        const services = [
          {
            id: "0",
            name: "room service",
          },
          {
            id: "2",
            name: "free wifi",
          },
          {
            id: "3",
            name: "Family rooms",
          },
          {
            id: "4",
            name: "Free Parking",
          },
          {
            id: "5",
            name: "swimming pool",
          },
          {
            id: "6",
            name: "Restaurant",
          },
          {
            id: "7",
            name: "Fitness center",
          },
        ];
  return (
    <View style ={{padding:10}}>
      <Text style ={{fontSize:17,fontWeight:"600"}}>Most Popular Falities</Text>
       <View style ={{flexDirection:"row",alignItems:"center",flexing:"wrap"}}>
          {services.map((item,index) =>(
                   < View style={{
                    margin: 7, // Adjust the margin to space items nicely
                    backgroundColor: 'orange',
                    paddingHorizontal: 3,
                    paddingVertical: 5,
                    borderRadius: 15,
                    width: (width - 40 ) /3, // Adjust width to fit 3 items per row
                    alignItems: 'center',
                  }} 
                     key ={index}>
                      
                         <Text>{item.name}</Text>
                   </View>
        ) )}
       </View>
    </View>
  )
}

export default Amenities

const styles = StyleSheet.create({})  */

import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';

const { width } = Dimensions.get('window');

const Amenities = () => {
  const services = [
    { id: "0", name: "room service" },
    { id: "2", name: "free wifi" },
    { id: "3", name: "Family rooms" },
    { id: "4", name: "Free Parking" },
    { id: "5", name: "swimming pool" },
    { id: "6", name: "Restaurant" },
    { id: "7", name: "Fitness center" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Most Popular Facilities</Text>
      <View style={styles.row}>
        {services.map((item, index) => (
          <View
            style={styles.item}
            key={index}
          >
            <Text style ={{textAlign:"center",color:"white"}}>{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Ensure items are spaced evenly
  },
  item: {
    margin: 3, // Adjust the margin to space items nicely
    backgroundColor: 'orange',
    padding:4,
    paddingHorizontal: 11, // Increased padding for better spacing
    paddingVertical: 7,
    borderRadius: 25,
    width: (width - 40) / 3, // Adjust width to fit 3 items per row
    alignItems: 'center',
  },
});

export default Amenities;
