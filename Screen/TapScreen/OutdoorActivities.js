import 'react-native-gesture-handler'
import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import {
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
import imageData from '../../Nondum.json';

const Container = styled.SafeAreaView`
    flex : 1;
`;
const OA = styled.Text`
`;
export default function OutdoorActivities() {

 
  return (
    <Container>
      <OA>
        OutdoorActivities
      </OA>
      <Image style={{ width: 50, height: 50 }}
        source={require('../../assets/image/non/non01.jpg')}
      />
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: 'https://ifh.cc/g/WJnjPt.jpg' }}
      />
      <View>
        
      </View>


    </Container>
  )

}