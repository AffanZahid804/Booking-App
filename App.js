import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './StackNavigator';
import { ModalPortal } from 'react-native-modals';
import {Provider} from "react-redux";
//import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import store from './store';
import FlightScreen from './screens/FlightScreen';


export default function App() {
  return (
     <>
        <Provider store = {store}>

      
        <StackNavigator/>
      

        <ModalPortal/>

        </Provider>
     
     </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
