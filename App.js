
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
import _ from 'lodash';
import styled from 'styled-components';
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
  margin-left : 20;
  margin-right : 20;
`;
const Contents = styled.ScrollView`
  flex : 13;
`;
const Menu = styled.Button`
  align-items : end;
`;
const Topvar = styled.View`
  flex : 1;
  flex-direction : row;
  align-items : center;
`;
const Tab = styled.View`
  flex : 1;
`;
//변수 선언
//let numbers = [];

//_.times( 45, n => numbers.push( n + 1 ) );
//numbers = _.shuffle( numbers );

export default function App () {

  // const navigator = useNavigation();
  return (
      <HomeContainer>
          <Topvar>
            <Text style = {styles.moaynang}>모아냥</Text>
            <Image source = { require('./image/moanyang.png') } style={ { width : 50,height:50 }}/>
            <Search style = { { width: 100, height: 10, borderColor : 'gray', borderWidth  :0.5}} />
            <Menu title="" onPress = { () => {} }/>
          </Topvar>
          <Tab style = { styles.blue }>
            <Text>ㅁㄴㅇ린어리</Text>
          </Tab>
        <Contents style = { styles.black}>
            <Text>sdfsfsdfdsf</Text>
        </Contents>
      </HomeContainer>
  )
};
const styles = StyleSheet.create({
  moaynang : {
    fontWeight :'Bold',
    padding : 10,
    fontSize : 20,
  },
 Home : {
    backgroundColor : '#ffff00',
 },
 blue : {
   backgroundColor : 'blue',
 },
 black : {
  backgroundColor : 'black'
 },

});
/*
function HomeScreen({navigation}){
  return (
    <Button title="Go to Second Pages"
      onPress={() => navigation.navigate('Second', {name: 'Parameter_1'})}
      />
  );
}

function SecondScreen({navigation}, param){

  return(

    <SafeAreaView style={{marginTop:50, flex:1}}>
    <View style={{flex:2}}/>
    <View style={{flex:2}}/>
    <View style={{flex:1, justifyContent: 'flex-end'}}>
      <Button title="Back" onPress={()=> navigation.goBack()}/>
    </View>
    </SafeAreaView>

  );
}
*/