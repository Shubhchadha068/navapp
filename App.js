import 'react-native-gesture-handler';

import React,{ Component } from 'react';
//import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import login from './src/login';
import register from './src/register'
import menu from './src/menu';
import {restuarant} from './src/restuarants'

const Stack1=createStackNavigator();


class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Stack1.Navigator initialRouteName="login" headerMode='none'>
          <Stack1.Screen name='register' component={register}/>
          <Stack1.Screen name='login' component={login}/>
          <Stack1.Screen name='restaurant' component={restuarant}/>
          <Stack1.Screen name='menu' component={menu}/>
          </Stack1.Navigator>
      </NavigationContainer>
    )
  }
}
export default App;