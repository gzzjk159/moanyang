
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
} from 'react-native';
// import _ from 'lodash';
import styled from 'styled-components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { assertTSExpressionWithTypeArguments } from '@babel/types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TouchableHighlight } from 'react-native-gesture-handler';



//const Stack = createStackNavigator();
//component를 꾸밀때 쓰는 방법
/* 
const name = stled.(component)`
  자바스크립트 문법
`;
*/
const Row = styled.View`
  flex-direction : row;
`;
const HomeContainer = styled.SafeAreaView`
  flex : 1;
`;
const Search = styled.TextInput`
  backgroundColor: '#FFFFFF';
`;
const Contents = styled.ScrollView`
  flex : 13;
`;
const Menu = styled.Button`
  align-items : end;
`;


  
 


//변수 선언
//let numbers = [];

//_.times( 45, n => numbers.push( n + 1 ) );
//numbers = _.shuffle( numbers );

export default function App () {

  return (
      <HomeContainer>
          <View style = {styles.Top}>
            <Text style = {styles.moaynang }>모아냥</Text>
            <Image source = { require('./image/moanyang.png') } style = {styles.moanyangimage} />
              <Search style = { styles.Search}/>
            <Image source = { require('./image/message.png') } style = {styles.Topmessage} />
          </View>


          <View style= { styles.Tap}>
            <Text>비교과</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>공모전</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>대외활동</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>톡톡</Text>
          </View>
        <Contents style = { {backgroundColor: 'yellow'}}>
            <Text>sdfsfsdfdsf</Text>
        </Contents>
      </HomeContainer>
  )
};
const styles = StyleSheet.create({

  Top: {
    height: 60,
  backgroundColor: '#313A96',
  flexDirection: 'row',
  alignitems : 'center',
  },
  

  moaynang : {
    fontFamily: "BMDOHYEON",
    fontSize: 22, 
    fontWeight: 'bold',
    color: 'white',
    padding: 2,
    marginTop: 10,
    marginLeft: 8,
    marginRight: 3,
  },
  moanyangimage : {
    width : 50,
    height:50,
    marginRight: 10,
    marginTop: 4,
  },
  Topmessage: {
    width : 43,
    height: 33,
    marginLeft: 20,
    marginTop: 13,
  },

 Search : { // 검색창
  width: 180, 
  height: 35, 
  borderColor : 'gray', 
  borderWidth  :0.5, 
  borderRadius: 5,
   backgroundColor: "#FFFFFF",
   marginTop: 12,
 },

 Tap: {
   flexDirection: 'row',
   height: 60,
 }

 


});