import { View, Text, SafeAreaView, Pressable, ScrollView, Image } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import { useLayoutEffect } from 'react';
import { pixelNormalize } from '../components/Normalise';
import Foundation from '@expo/vector-icons/Foundation';
import Amenties from '../components/Amenities';

const PropertInfoScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        //console.log('Route params:', route.params);
        navigation.setOptions({
            headerShown: true,
            title: `${route.params.name}`,
            headerTitleAlign: "center",
            headerTitleStyle: {
                fontSize: 25,
                fontWeight: "bold",
                color: "white",
            },
            headerStyle: {
                backgroundColor: "#4b0082",
                height: 100,
                borderBottomColor: "transparent",
                shadowColor: "transparent",
            },
        });
    }, []);

    const difference = route.params.oldPrice - route.params.newPrice;
    const offerPrice = (Math.abs(difference) / route.params.oldPrice) * 100;

    // Safeguard: Check if photos exist and provide a fallback
    const photos = route.params?.photos || [];

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <Pressable style={{ flexDirection: "row", flexWrap: "wrap", margin: 10 }}>
                    {photos.length > 0 ? (
                        photos.slice(0, 5).map((photo, index) => (
                            <View key={photo.id || index} style={{ margin: 6 }}>
                                <Image
                                    style={{
                                        width: 120,
                                        height: pixelNormalize(80),
                                        borderRadius: pixelNormalize(4),
                                    }}
                                    source={{ uri: photo.image.trim() }}
                                />
                            </View>
                        ))
                    ) : (
                        <Text>No photos available</Text>
                    )}

                    <Pressable style={{ alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ textAlign: "center", marginLeft: 20 }}>Show More</Text>
                    </Pressable>
                </Pressable>

                <View style={{ marginHorizontal: 14, marginTop: 10, flexDirection: "row", justifyContent: "space-between" }}>
                    <View>
                        <Text style={{ fontSize: 25, fontWeight: "bold" }}>{route.params.name}</Text>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 5, marginTop: 7 }}>
                            <Foundation name="star" size={24} color="purple" />
                            <Text>{route.params.rating}</Text>

                            <View
                                style={{
                                    backgroundColor: 'orange',
                                    padding: 3,
                                    borderRadius: 4,
                                    width: 100,
                                }}
                            >
                                <Text style={{ textAlign: "center", color: "white", fontSize: 15 }}>Genius Level</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ backgroundColor: 'orange', paddingHorizontal: 3, paddingVertical: 1, borderRadius: 6, width: 100, height: 23 }}>
                        <Text style={{ textAlign: "center", color: "white", fontSize: 14 }}>Travel Suitable</Text>
                    </View>
                </View>

                <Text style={{ borderColor: "#E0E0E0", borderWidth: 3, height: 1, marginTop: 10 }} />

                <Text style={{ marginTop: 10, fontSize: 17, fontWeight: "500", marginHorizontal: 12 }}>
                    Price for 1 Night and {route.params.adults} adults
                </Text>

                <View style={{ marginTop: 5, flexDirection: "row", alignItems: "center", marginHorizontal: 12, marginTop: 24, gap: 8 }}>
                    <Text style={{ color: "purple", fontSize: 20, textDecorationLine: "line-through" }}>
                        {route.params.oldPrice * route.params.adults}
                    </Text>
                    <Text style={{ fontSize: 20 }}>
                        Rs {route.params.newPrice * route.params.adults}
                    </Text>
                </View>
                
                <View style={{ marginHorizontal: 12, marginTop: 4, backgroundColor: "orange", paddingHorizontal: 4, paddingVertical: 5, width: 70, borderRadius: 4 }}>
                    <Text style={{ color: "white" }}>{offerPrice.toFixed(0)} % OFF</Text>
                </View>

                <Text style={{ borderColor: "#E0E0E0", borderWidth: 3, height: 1, marginTop: 15 }} />

                <View style={{ margin: 12, flexDirection: "row", alignItems: "center", gap: 60 }}>
                    <View>
                        <Text style={{ fontSize: 15, fontWeight: "600", marginBottom: 3 }}>Check In</Text>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#007FF" }}>{route.params.selectedDates.startDate}</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 15, fontWeight: "600", marginBottom: 3 }}>Check Out</Text>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#007FF" }}>{route.params.selectedDates.endDate}</Text>
                    </View>
                </View>

                <View style={{ margin: 12 }}>
                    <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>Rooms and Guests</Text>
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#007FF" }}>
                        {route.params.rooms} rooms {route.params.adults} adults {route.params.children} children
                    </Text>
                </View>

                <Text style={{ borderColor: "#E0E0E0", borderWidth: 3, height: 1, marginTop: 10 }} />

                <Amenties />

                <Text style={{ borderColor: "#E0E0E0", borderWidth: 3, height: 1, marginTop: 10 }} />
            </ScrollView>

            {/* Footer Button */}
            <Pressable 
              onPress ={()=> navigation.navigate("Rooms",{
        rooms:route.params.availableRooms,
        oldPrice:route.params.oldPrice,
        newPrice:route.params.newPrice,
        name:route.params.name,
        children:route.params.children,
        adults:route.params.adults,
        rating:route.params.rating,
        startDate:route.params.selectedDates.startDate,
        endDate:route.params.selectedDates.endDate
              })}
                style={{ 
                    backgroundColor: '#4B0082',
                    //paddingVertical: 20,
                   // paddingHorizontal: 24,
                    position: 'absolute',
                    padding: 20,
                    width: '100%',
                    bottom: 21,  // Position at the bottom
                    borderRadius: 18,
                    alignItems: 'center',
                }}
            >
                <Text style={{ textAlign: "center", color: "white", fontWeight: "bold" }}>
                    Select Availability
                </Text>
            </Pressable>
        </SafeAreaView>
    );
};

export default PropertInfoScreen;
