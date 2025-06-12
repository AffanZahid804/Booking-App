import { 
  View, 
  Text, 
  StyleSheet, 
  Pressable, 
  ScrollView, 
  TextInput, 
  Button, 
  Dimensions ,
  Image,
  Alert
} from 'react-native';
import React, { useLayoutEffect, useState  } from 'react';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';
import Ionicons from '@expo/vector-icons/Ionicons';
import Header from '../components/Header';
import { Feather } from '@expo/vector-icons';
import DatePicker from 'react-native-date-ranges';
import { 
  BottomModal, 
  ModalButton, 
  ModalContent, 
  ModalFooter, 
  ModalTitle, 
  SlideAnimation 
  
} from 'react-native-modals';

//const { height: screenHeight } = Dimensions.get('window');
 const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const HomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute() 
  const [selectedDates, setSelectedDates] = useState();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdult] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booking App",
      headerTitleAlign: "center", 
      headerTitleStyle: {
        fontSize: 25,    
        fontWeight: "bold",
        color: "white"
      },
      headerStyle: {
        backgroundColor: "#4b0082",
        height: 100,
        borderBottomColor: "transparent",
        shadowColor: "transparent"
      },
      headerRight: () => (
        <Ionicons 
          name="notifications-outline" 
          size={25} 
          color="white" 
          style={{
            marginRight: 21,
            marginBottom: -7,
            color: 'white'
          }} 
        />
      )
    });
  }, []);

  // Custom button 
  const customButton = (onConfirm) => {
    return (
      <Button  
        onPress={onConfirm}
        style={{
          container: {
            width: "80%", 
            marginHorizontal: "3%"
          },
          text: {
            fontSize: 20
          }
        }}
        primary
        title="Submit"
        color="#4b0082"   
      />
    );
  }
  console.log(route.params)

    const searchPlaces = (place) =>{
           if(!route.params || !selectedDates){
            Alert.alert(
              "Invalid Details",
              "Please enterr all the details",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
              ],
              {cancelable :false}
            );
        
           }
             if(route.params && selectedDates ){
                 navigation.navigate("Places",{
                      rooms:rooms,
                      adults:adults,
                      children:children,
                      selectedDates:selectedDates,
                      place:place

                 })
             }
    }

  return (
    <>
      <View>
        <Header/>

        {/* Importing header */}
        <ScrollView>
          <View 
            style={{
              margin: 20,
              borderColor: "#8a2be2",
              borderWidth: 3,
              borderRadius: 6
            }}
          >

            {/* Destination */}
            <Pressable 
               // navigate to Search Screen 
                 onPress = {() => navigation.navigate("Search")}
              
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#8a2be2",
                borderWidth: 2,
                paddingVertical: 15
              }}
            >
              <Feather name="search" size={24} color="black" />
              <TextInput 
                placeholderTextColor="black" 

               // placeholder="Enter your Destination" 
               placeholder = {route?.params ? route.params.input : "Enter Your Destination "}
              />
            </Pressable>

            {/* Select Dates */}
            <Pressable 
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#8a2be2",
                borderWidth: 2,
                paddingVertical: 15
              }}
            >
              <Feather name="calendar" size={24} color="black" />
              <DatePicker 
                style={{
                  width: 350,
                  height: 35,
                  borderRadius: 0,
                  borderWidth: 0,
                  borderColor: "transparent"
                }}
                customStyles={{
                  placeholderText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto"
                  },
                  headerStyle: {
                    backgroundColor: "#4b0082"
                  },
                  contentText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto"
                  }
                }}
                selectedBgColor="#4b0082"
                customButton={(onConfirm) => customButton(onConfirm)}
                onConfirm={(startDate, endDate) => setSelectedDates(startDate, endDate)}
                allowFontScaling={false}

                placeholder={"Select Your Date"}
                mode={"range"}
              />
            </Pressable>

            {/* Rooms and Guests */}
            <Pressable 
              onPress={() => setModalVisible(!modalVisible)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#8a2be2",
                borderWidth: 2,
                paddingVertical: 15
              }}
            >
              <Ionicons name="person-outline" size={24} color="black" />
              <TextInput 
                placeholderTextColor="black" 
                // values for Selected Rooms and Guests
                placeholder={` ${rooms} room • ${adults} adults • ${children} children`}
              />
            </Pressable>

            {/* Search Button */}
            <Pressable 
               onPress = {()=> searchPlaces(route?.params.input)}
              style={{
                paddingHorizontal: 10,
                borderColor: "#8a2be2",
                borderWidth: 2,
                paddingVertical: 15,
                backgroundColor: "#4b0082"
              }}
            >
              <Text 
                style={{
                  textAlign: "center",
                  color: 'white',
                  fontWeight: "500",
                  fontSize: 15
                }}
              >
                Search
              </Text>
            </Pressable>

          </View>
              {/*  Bottom of Screen below search Button     */}
              <Text style = {{marginHorizontal:20,fontSize:17,fontWeight:"500"}}>Travel More Spend Less</Text>
               <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Pressable  style = {{
                      width:200,
                      height:150,
                      marginTop:10,
                      backgroundColor:"#4b0082",
                      borderRadius:10,
                      padding:20,
                      marginHorizontal:10,

                      }}
                      >
                     
                 <Text style ={{color:"white",fontSize:15,fontWeight:"bold",marginVertical:7}}>Genius</Text>
                     <Text style ={{color:"white",fontSize:15,fontWeight:"500"}}> Yo are at genius level one our Loyalty Program </Text>
            
                    </Pressable>


                    <Pressable  style = {{
                      width:200,
                      height:150,
                      marginTop:10,
                     borderColor:"E0E0E0",
                     borderWidth:2,
                      borderRadius:10,
                      padding:20,
                      marginHorizontal:10,

                      }}
                      >
                     
                 <Text style ={{fontSize:15,fontWeight:"bold",marginVertical:7}}>10% Discount</Text>
                     <Text style ={{fontSize:15,fontWeight:"500"}}> Enjoy Discount at Property </Text>
            
                    </Pressable>


                    <Pressable  style = {{
                      width:200,
                      height:150,
                      marginTop:10,
                      borderColor:"E0E0E0",
                      borderWidth:2,
                      borderRadius:10,
                      padding:20,
                      marginHorizontal:10,

                      }}
                      >
                     
                 <Text style ={{fontSize:15,fontWeight:"bold",marginVertical:7}}>15% Discount</Text>
                     <Text style ={{fontSize:15,fontWeight:"500"}}>
                       Spend 3 Nights to avail discount 
                       </Text>
            
                    </Pressable>
               </ScrollView>

               <Pressable 
                 style = {{
                    marginTop: 40,
                    justifyContent:"center",
                    alignItems:"center",
                 }}>
    
             <Image 
              style={styles.bookingImage}
              source={require('../assets/Booking.com.png')}
            />

               </Pressable>
        </ScrollView>

      </View>

      <BottomModal style
        swipeThreshold={200} 
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={['up', 'down']}
        footer={
          <ModalFooter>
            <ModalButton 
              text ="Apply" 
              style={{
                marginBottom: 20,
                color: "white",
                backgroundColor: "#4b0082",
              }}
              textStyle={{color: "white", fontWeight: "500", fontSize: 15}}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Select Rooms and Guests" />}
        modalAnimation={new SlideAnimation({ slideFrom: "bottom" })}
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        <ModalContent style={{ width: "100%", height: screenHeight * 0.3 }}>

          {/* Room   */}
          <View 
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15
            }}
          >
            <Text style={{fontSize: 16, fontWeight: "600"}}>Rooms</Text>
            <Pressable 
              style={{flexDirection: "row", alignItems: "center", gap: 10}}
            >
              <Pressable 
                  onPress= {()=>setRooms(Math.max(1,rooms-1))}
                style={{
                  width: 26, // Adjust size if needed
                  height: 26, // Adjust size if needed
                  borderRadius: 13, // Half of width/height to make it a circle
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text 
                  style={{
                    textAlign: "center", 
                    fontSize: 20, 
                    fontWeight: "600", 
                    color: "black"
                  }}
                >
                  -
                </Text>
              </Pressable>
              <Pressable>     
                <Text 
                  style={{
                    textAlign: "center", 
                    fontSize: 18, 
                    fontWeight: "500", 
                    paddingHorizontal: 6
                  }}
                >
                  {rooms} 
                </Text>
              </Pressable>
              <Pressable 
                  onPress={() =>setRooms((c)=> c+1)}
                style={{
                  width: 26, // Adjust size if needed
                  height: 26, // Adjust size if needed
                  borderRadius: 13, // Half of width/height to make it a circle
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text 
                  style={{
                    textAlign: "center", 
                    fontSize: 18, 
                    fontWeight: "600", 
                    color: "black"
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>

     
        {/* Adults  */}
          <View 
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15
            }}
          >
            <Text style={{fontSize: 16, fontWeight: "600"}}>Adults</Text>
            <Pressable 
              style={{flexDirection: "row", alignItems: "center", gap: 10}}
            >
              <Pressable 
                onPress= {()=>setAdult(Math.max(1,adults-1))}
                style={{
                  width: 26, // Adjust size if needed
                  height: 26, // Adjust size if needed
                  borderRadius: 13, // Half of width/height to make it a circle
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text 
                  style={{
                    textAlign: "center", 
                    fontSize: 20, 
                    fontWeight: "600", 
                    color: "black"
                  }}
                >
                  -
                </Text>
              </Pressable>
              <Pressable>     
                <Text 
                  style={{
                    textAlign: "center", 
                    fontSize: 18, 
                    fontWeight: "500", 
                    paddingHorizontal: 6
                  }}
                >
                  {adults} 
                </Text>
              </Pressable>
              <Pressable 
                onPress = {()=>setAdult((c)=> c+1)}
                style={{
                  width: 26, // Adjust size if needed
                  height: 26, // Adjust size if needed
                  borderRadius: 13, // Half of width/height to make it a circle
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text 
                  style={{
                    textAlign: "center", 
                    fontSize: 18, 
                    fontWeight: "600", 
                    color: "black"
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>

          <View 
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15
            }}
          >
            <Text style={{fontSize: 16, fontWeight: "600"}}>Children</Text>
            <Pressable 
              style={{flexDirection: "row", alignItems: "center", gap: 10}}
            >
              <Pressable 

               onPress= {()=>setChildren(Math.max(0,children-1))}

                style={{
                  width: 26, // Adjust size if needed
                  height: 26, // Adjust size if needed
                  borderRadius: 13, // Half of width/height to make it a circle
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text 
                  style={{
                    textAlign: "center", 
                    fontSize: 20, 
                    fontWeight: "600", 
                    color: "black"
                  }}
                >
                  -
                </Text>
              </Pressable>
              <Pressable>     
                <Text 
                  style={{
                    textAlign: "center", 
                    fontSize: 18, 
                    fontWeight: "500", 
                    paddingHorizontal: 6
                  }}
                >
                  {children} 
                </Text>
              </Pressable>
              <Pressable
                 onPress = {()=>setChildren((c)=> c+1)} 
                style={{
                  width: 26, // Adjust size if needed
                  height: 26, // Adjust size if needed
                  borderRadius: 13, // Half of width/height to make it a circle
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text 
                  style={{
                    textAlign: "center", 
                    fontSize: 18, 
                    fontWeight: "600", 
                    color: "black"
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>

            
        </ModalContent>
      </BottomModal>
    </>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
    
  bookingImage: {
    width: screenWidth * 0.9, // 90% of the screen width
    height: (screenWidth * 0.9) * 0.8, // Maintain aspect ratio (adjust height as needed)
    resizeMode: 'contain', // Ensure the image is scaled to fit within the container
    backgroundColor: 'transparent',

  },
  Modal:{
    width: screenWidth * 0.9,
      
      
  }


});
