import 'react-native-gesture-handler'
import * as React from 'react';
import {NavigationContainer, useNavigation } from '@react-navigation/native';
import{
  StyleSheet,
  StatusBar,
} from 'react-native';
import styled from 'styled-components/native';
import DrawerNavigator from './Components/DrawerNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './Components/StackNavigator';
import Home from './Screen/DrawScreen/HomeScreen';
import hhs from './Components/LoginNavigator';


const Container = styled.SafeAreaView`
  flex : 1;
`;

const Stack = createStackNavigator();
export default function App () {
  return (
      <Container>
        <StatusBar
          animated={true}
          backgroundColor="#000000"
        />
        <NavigationContainer>

                 
          <Home/>
          
          
          
        </NavigationContainer>
        
      </Container>
  )
}
{/* <DrawerNavigator/> */}
// const styles = StyleSheet.create({
//   blue : {
//      backgroundColor : '#313A96',
//   },
//   row : {
//     flexDirection : 'row',
//   },
//   searchImage : {
//     width : 50,
//     height : 50,
//   },
//   myTalkImage : {
//     width : 50,
//     height : 50,
//   },
// });