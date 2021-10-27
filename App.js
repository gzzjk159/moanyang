
import 'react-native-gesture-handler'
import * as React from 'react';
import {NavigationContainer, useNavigation } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import{
  Button,
  Dimensions,
  StyleSheet,
  SafeAreaView, 
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  Touchable,
  StatusBar,
} from 'react-native';
// import _ from 'lodash';
import styled from 'styled-components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { assertTSExpressionWithTypeArguments } from '@babel/types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from 'react-redux';
import { createStore } from 'redux';
//const Stack = createStackNavigator();
//component를 꾸밀때 쓰는 방법
/* 
const name = stled.(component)`
  자바스크립트 문법
`;
*/
// const Row = styled.View`
//   flex-direction : row;
// `;
// const HomeContainer = styled.SafeAreaView`
//   flex : 1;
// `;
// const Search = styled.TextInput`
//   margin-left : 20;
//   margin-right : 20;
// `;
// const Contents = styled.ScrollView`
//   flex : 13;
// `;
// const Menu = styled.Button`
//   align-items : end;
// `;
// const Topvar = styled.View`
//   height : 50;
//   flex-direction : row;
//   align-items : center;
// `;
// const TabT = styled.View`
//   height : 50;
// `;
//변수 선언
//let numbers = [];

//_.times( 45, n => numbers.push( n + 1 ) );
//numbers = _.shuffle( numbers );

const Tab = createMaterialTopTabNavigator();
const Store = createStore();

export const TopTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name = "non-discipline" 
        component = {HomeScreen}
      />
      <Tab.Screen 
        name = "competition" 
        component = {non-disciplineScreen}
      />
      <Tab.Screen 
        name = "outdoor-activities" 
        component = {outdoor-activitiesScreen}/>
      <Tab.Screen 
        name = "mytalktalk" 
        component = {mytalktalkScreen}/>
    </Tab.Navigator>
  );
};

export default function App () {

  return (
      <Provider store = { store }>
        <StatusBar backgroundColor = '#FFFFFF' barStyle = "dark-content"/>
        <NavigationContainer>
          <TopTabNavigator/>
        </NavigationContainer>
      </Provider>
  )
};
const styles = StyleSheet.create({
//   moaynang : {
//     fontWeight :'Bold',
//     padding : 10,
//     fontSize : 20,
//   },
//   Home : {
//     backgroundColor : '#ffff00',
//   },
//   blue : {
//      backgroundColor : 'blue',
//   },
//  black : {
//     backgroundColor : 'black'
//   },
});