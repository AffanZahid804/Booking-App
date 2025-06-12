import { View, Text, Image, Pressable, Dimensions } from 'react-native'
import React from 'react'
import Fontisto from '@expo/vector-icons/Fontisto';
import Foundation from '@expo/vector-icons/Foundation';
import { useNavigation } from '@react-navigation/core';

const PropertyCard = ({rooms,children,property,adults,selectedDates,availableRooms}) => {
    const {width,height} = Dimensions.get("window")
    const navigation = useNavigation();
  return (
    <View>
       
  <Pressable onPress ={()=> navigation.navigate("Info",{
        name : property.name,
        rating:property.rating,
        oldPrice :property.oldPrice,
        newPrice:property.newPrice,
        availableRooms:property.rooms,
        adults:adults,
        children:children,
        rooms:rooms,
        selectedDates:selectedDates,
  })}
   style={{ margin: 15, flexDirection: "row", backgroundColor: "white" }}>
    {/* Image */}
    <View>
      <Image
        style={{ height: height / 4, width: width - 280 }}
        source={{ uri: property.image }}
      />
    </View>

    {/* Hotel Name, Heart Icon and Rating */}
    <View style={{ padding: 10 }}>
      {/* Hotel Name and Heart Icon */}
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>

        <Text style={{ width: 200 }}>{property.name}</Text>
        <Fontisto name="heart-alt" size={24} color="purple" />
      </View>

      {/* Rating and Genius Level */}
      <View style={{ flexDirection: "row", alignItems: "center", gap:5  ,marginTop:7}}>
        <Foundation name="star" size={24} color="purple" />
        <Text>{property.rating}</Text>
     
      <View 
        style={{
          backgroundColor: 'orange',
          padding: 3,
          borderRadius: 4,
          width: 100,
          //marginTop: 7
        }}
      >
        <Text style = {{textAlign:"center",color:"white",fontSize:15}}>Genius Level</Text>
      </View>
    </View>
     <Text style ={{width:210, marginTop:6,color:"grey",fontWeight:"bold"}}>{property.address.length>50 ?property.address.substr(0,50):property.address}</Text>
       
        <Text style = {{marginTop:4,fontSize:15,fontWeight:"500"}}>Price for 1 Night and {adults} adults</Text>
        <View style  ={{marginTop:5,flexDirection:"row",alignItems:"center",gap:8}}>
              <Text style ={{color:"purple",fontSize:18,textDecorationLine:"line-through"}}>{property.oldPrice * adults}</Text>
              <Text style = {{fontSize:22}}>{property.newPrice* adults}</Text>
        </View>

         <View style = {{marginTop:6}}>
             <Text style = {{fontSize:16,color:"grey"}}>Dulex Room</Text>
             <Text style = {{fontSize:16,color:"grey"}}>Hotel Room :1 bed</Text>
         </View>
          <View style={{
          backgroundColor: "#663399",
          paddingVertical: 2,
          marginTop:2,
          borderRadius: 5,
          width: 135,
          //marginTop: 7
          paddingHorizontal:3,
        }}>
               <Text style ={{textAlign:"center",color:"white"}}>Limited Time Deal</Text>
          </View>
    </View>
      
  </Pressable>
</View>

  )
}

export default PropertyCard