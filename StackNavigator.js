import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import SavedScreen from './screens/SavedScreen';
import AntDesign from '@expo/vector-icons/AntDesign';
import BookingScreen from './screens/BookingScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from './screens/ProfileScreen';
import {Entypo} from '@expo/vector-icons';
import SearchScreen from './screens/SearchScreen';
import PlacesScreen from './screens/PlacesScreen';
import MapScreen from './screens/MapScreen';
import PropertInfoScreen from './screens/PropertInfoScreen';
import RoomsScreen from './screens/RoomsScreen';
import UserScreen from './screens/UserScreen';
import Confirmation from './screens/Confirmation';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import FlightScreen from './screens/FlightScreen';
import CarScreen from './screens/CarScreen';
import TaxiScreen from './screens/TaxiScreen';
import BoardingPassScreen from './screens/BoardingPassScreen';
import CarDetail from './components/CarDetail';

const StackNavigator = () => {
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();
  
    function BottomTabs() {
      return (
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: "Home",
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Entypo name="home" size={24} color="#4b0082" />
                ) : (
                  <AntDesign name="home" size={24} color="black" />
                ),
                tabBarLabelStyle: {
                    color: 'black', // Always set label color to black
                  },
            }}
          />
  
          <Tab.Screen
            name="Saved"
            component={SavedScreen}
            options={{
              tabBarLabel: "Saved",
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <AntDesign name="heart" size={24} color="#4b0082" />
                ) : (
                  <AntDesign name="hearto" size={24} color="black" />
                ),
                tabBarLabelStyle: {
                    color: 'black', // Always set label color to black
                  },
            }}
          />
  
          <Tab.Screen
            name="Bookings"
            component={BookingScreen}
            options={{
              tabBarLabel: "Bookings",
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Ionicons name="notifications" size={24} color="#4b0082" />
                ) : (
                  <Ionicons name="notifications-outline" size={24} color="black" />
                ),
                tabBarLabelStyle: {
                    color: 'black', // Always set label color to black
                  },
            }}
          />
  
  <Tab.Screen
  name="Profile"
  component={ProfileScreen}
  options={{
    tabBarLabel: "Profile",
    headerShown: false,
    tabBarIcon: ({ focused }) =>
      focused ? (
        <Ionicons name="person" size={24} color="#4b0082" /> // Icon when focused
      ) : (
        <Ionicons name="person-outline" size={24} color="black" /> // Icon when not focused
      ),
    tabBarLabelStyle: {
      color: 'black', // Always set label color to black
    },
  }}
/>

        </Tab.Navigator>
      );
    }
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name ="Login" component={LoginScreen} options={{headerShown:false}}   />
        <Stack.Screen name ="Register" component={RegisterScreen} options={{headerShown:false}}   />
          <Stack.Screen name="Main" component={BottomTabs} options={{headerShown:false}} />
          <Stack.Screen name ="Search" component={SearchScreen} options = {{headerShown:false}} />
          <Stack.Screen name ="Places" component={PlacesScreen}  />
          <Stack.Screen name ="Map" component={MapScreen} options={{headerShown:false}} />
          <Stack.Screen name ="Info" component={PropertInfoScreen}  />
          <Stack.Screen name ="Rooms" component={RoomsScreen} />
          <Stack.Screen name = "User" component={UserScreen}  />
          <Stack.Screen name = "Confirmation" component={Confirmation}  />

       
      <Stack.Screen name="Flights" component={FlightScreen}   />
      <Stack.Screen name="BoardingPassScreen" component={BoardingPassScreen}  />
      <Stack.Screen name="CarScreen" component={CarScreen}    />
      <Stack.Screen name="Taxi" component={TaxiScreen}  />
     
      <Stack.Screen name="CarDetail" component={CarDetail} options={{headerShown:false}}  />

        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default StackNavigator;
