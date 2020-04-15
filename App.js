import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { navigationRef } from './ref';


const Stack = createStackNavigator();

const App = () => {
  return ( 
    <NavigationContainer ref = {navigationRef}>
      <Stack.Navigator>
      <Stack.Screen 
        name = "IG" 
        component = {HomeScreen} 
        options = {{
          headerLeft: () => {
            return(
          <TouchableOpacity onPress = {() => alert('This is a button!')}>
            <Image style = {styles.camera} source = {{uri:"https://github.com/jennyhuoh/IG_practice/blob/master/assets/icon%26btn/btn_home_camera.png"}}/>          
          </TouchableOpacity>)},
          headerTitle: () => <Image source = {{uri:"https://github.com/jennyhuoh/IG_practice/blob/master/assets/icon%26btn/btn_IG.png"}} />,
          headerRight: () => {
            return(
            <TouchableOpacity onPress = {() =>navigationRef.current?.navigate("Detail")}> 
            <Image style = {styles.message} source = {{uri:"https://github.com/jennyhuoh/IG_practice/blob/master/assets/icon%26btn/btn_home_message.png"}}/>       
          </TouchableOpacity>)}
          }} 
      />
      <Stack.Screen 
        name = "Detail" 
        component = {DetailScreen}
        options = {{
          headerLeft: () =>{
            return(
          <TouchableOpacity onPress = {() => navigationRef.current?.navigate("IG")}>
            <Image source = {{uri:"https://github.com/jennyhuoh/IG_practice/blob/master/assets/icon%26btn/btn_drawer_left.png"}} />
          </TouchableOpacity>)},
          headerTitle: () => <Image source = {{uri:"https://github.com/jennyhuoh/IG_practice/blob/master/assets/icon%26btn/img_drawer_name.png"}} />,
          headerRight: () => {
            return(
              <View style = {styles.drawerright}>
                <Image source = {{uri:"https://github.com/jennyhuoh/IG_practice/blob/master/assets/icon%26btn/btn_drawer_video.png"}}/>
                <Image source = {{uri: "https://github.com/jennyhuoh/IG_practice/blob/master/assets/icon%26btn/btn_drawer_write.png"}}/>
              </View>
            )},  
        }}
      />
      </Stack.Navigator> 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;