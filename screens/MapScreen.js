import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/core';
import MapView, { Marker } from 'react-native-maps';
import { useRef ,useEffect} from 'react';

const MapScreen = () => {
  const route = useRoute();
  const mapView = useRef(null);
  console.log(route.params);
  const coordinates = [];
  const details = route.params.searchResults.map((item) =>item.properties?.map((prop)=>{

         coordinates.push({
            latitude:Number(prop.latitude),
            longitude:Number(prop.longitude)
         })
    
  }))
   useEffect(()=>{
    map.current.fitToCoordinates(coordinates,{
       edgePadding:{
            top:190,
            left:190,
            bottom:190,
            right:190,
       }

    })
      edgePadding
   },[])

  // Optional: Log to check if route.params exists
  //console.log(route.params);

  return (
    <View >
      <MapView
        ref={mapView}
        style={{ width: '100%', height: '100%' }}
        // You can define your initial region if required
        // initialRegion={{
        // latitude: 37.78825,
        // longitude: -122.4324,
        // latitudeDelta: 0.0922,
        // longitudeDelta: 0.0421,
        // }}
      >
          
        {route.params?.searchResults?.map((item) =>
          item.properties?.map((property) => (
            <Marker
              
              title={property.name}
              coordinate={{
                latitude: Number(property.latitude),
                longitude: Number(property.longitude),
              }}
            >
              <Presable style = {{ backgroundColor: "#4b0082",paddingHorizontal:7,paddingVertical:4,borderRadius:4}}>
                   <Text style ={{fontSize:15,color:"white",textAlign:"center",fontWeight:"bold"}}>{property.newPrice}</Text>
              </Presable>
             </Marker>

          ))
        )}
      </MapView>
    </View>
  );
};

export default MapScreen;
