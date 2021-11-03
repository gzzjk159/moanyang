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
import styled from 'styled-components';

const Container = styled.SafeAreaView`
    flex : 1;
`;
const Scroll = styled.ScrollView`
`;

export default function Competition(){
    return(
        <Container>
            <Scroll>
                <Text>
                    Competition
                </Text>
            </Scroll>
        </Container>
    );
}
// const styles = StyleSheet.create({
    // blue : {
    //    backgroundColor : '#313A96',
    // },
//     backgray : {
//         backgroundColor : '#000000',
//     },
//   });