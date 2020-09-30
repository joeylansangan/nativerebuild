import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

Ionicons.loadFont();

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} 
    options={{
      title: 'Overview',
      headerLeft: () => (
        <Ionicons.Button name="ios-menu" 
          size={25} 
          backgroundColor="#000"
          onPress={() => navigation.openDrawer()}
          ></Ionicons.Button>
      )
      }}/>
  </HomeStack.Navigator>
)

const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator>
    <DetailsStack.Screen name="Details" component={DetailsScreen} options={{title: 'Details'}}/>
  </DetailsStack.Navigator>
)

const App = () => {
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailsStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
} 

export default App;

