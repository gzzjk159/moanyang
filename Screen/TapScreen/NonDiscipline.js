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
const Container = styled.SafeAreaView`
`;
const Scroll = styled.ScrollView`
`;
export default function NonDiscipline(){
    return(
        <Container>
            <Scroll>
                <Text>
                    NonDiscipline
                </Text>
            </Scroll>
        </Container>
    )
}