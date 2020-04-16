import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import HomeScreen from './src/screen/HomeScreen';
import DetailScreen from './src/screen/DetailScreen';
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
          headerLeft: () => 
          <TouchableOpacity onPress = {() => alert('This is a button!')}>
            <Image style = {styles.camera} source = {require('./assets/icon&btn/btn_home_camera.png')}/>          
          </TouchableOpacity>,
          headerTitle: ( <Image  style = {styles.igtitle} source = {require('./assets/icon&btn/btn_IG.png')} />),
          headerRight: () => 
            <TouchableOpacity onPress = {() =>navigationRef.current?.navigate("Detail")}> 
            <Image style = {styles.message} source = {require('./assets/icon&btn/btn_home_message.png')}/>       
          </TouchableOpacity>,

          headerStyle: {height: 90}
          }} 
      />
      <Stack.Screen 
        name = "Detail" 
        component = {DetailScreen}
        options = {{
          headerLeft: () =>
          <TouchableOpacity onPress = {() => navigationRef.current?.navigate("IG")}>
            <Image style = {styles.left} source = {require('./assets/icon&btn/btn_drawer_left.png')} />
          </TouchableOpacity>,
          headerTitle: (<Image style = {styles.drawername} source = {require('./assets/icon&btn/img_drawer_name.png')} />),
          headerRight: () => 
              <View style = {styles.drawerright}>
                <Image style = {styles.video} source = {require('./assets/icon&btn/btn_drawer_video.png')}/>
                <Image style = {styles.write} source = {require('./assets/icon&btn/btn_drawer_write.png')}/>
              </View>,

          headerStyle: {backgroundColor: '#fafafa'}
        }}
      />
      </Stack.Navigator> 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerright: {
    flexDirection: 'row'
  },
  camera: {
    marginLeft: -2,
    resizeMode: 'contain',
    height: 25,
    marginTop: -2
  },
  igtitle: {
    marginLeft: 10,
    resizeMode: 'contain',
    width: 100,
    height: 35
  },
  message: {
    marginRight: -43,
    resizeMode: 'contain',
    height: 25
  },
  left: {
    marginLeft: 0,
    resizeMode: 'contain',
    height: 20
  },
  drawername: {
    marginLeft: 10,
    resizeMode: 'contain',
    height: 18
  },
  video: {
    marginLeft: 10,
    resizeMode: 'contain',
    height: 23,
  },
  write: {
    marginLeft: -36,
    resizeMode: 'contain',
    height: 27,
    marginRight: -13,
    marginTop: -2
  }
});

export default App;