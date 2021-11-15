import 'react-native-gesture-handler'
import * as React from 'react';


//import { createStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,

} from 'react-native';
// import _ from 'lodash';
import styled from 'styled-components';
import { SliderBox } from 'react-native-image-slider-box';
import ImageModal from 'react-native-image-modal';
import RoomData from '../../Roomdummy.json';
import { FlatList } from 'react-native';
import itemCompent from "../TapScreen/itemRoom";

const Container = styled.SafeAreaView`
    flex : 1;
`;
const Scroll = styled.ScrollView`
`;


export default function MyTalk() {

  const [tempData, setTempData] = React.useState(RoomData.slice(0, 5));
  return (

    <Container>
      <View style={{height:50, backgroundColor: '#313A96',}}>
        <Text style={{alignContent:'center',justifyContent:'center',alignSelf:'center',alignItems:'center', fontSize: 22, color:'#FFFFFF',fontWeight:'bold', paddingTop:7,}}>MY Talk</Text>
      </View>
      <Scroll>
      
      <SafeAreaView>
                        <FlatList
                        data={tempData}
                        renderItem={(itemCompent)}
                        keyExtractor={item => item.id}
                        numColumns={1}
                        />
      </SafeAreaView>
            
      </Scroll>
    </Container>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  button: {
    width: 60,
    height: 60,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: '#859a9b',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  ImgModal: {
    swipeToDismiss: false,
    width: 200,
    height: 240,
    resizeMode: "stretch",
    marginTop: 10,
    imageBackgroundColor: "#000000",


  },

  mapname: {

    fontSize: 15,
    fontWeight: 'bold',
    textAlign: "center",
    paddingTop: 5,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 5,
    borderTopWidth: 1,
    borderTopColor:'#313A96',



  },
  dday: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 35.
  },
  see: {
    fontSize: 15,
    paddingLeft: 10,
    fontWeight: 'bold',
  },
  information:{
    alignSelf:'center', 
    paddingTop: 5, 
    fontSize: 15,
  },
  Team:{
    alignSelf:'center', 
    paddingTop: 5, 
    fontSize: 15,
  },
  infocover:{
    flex: 1, 
    margin: 10, 
    borderColor: '#313A96', 
    borderWidth: 2, 
    fontWeight:'bold'
  },
  Teamcover:{
    flex: 1, 
    margin: 10, 
    borderColor: '#313A96', 
    borderWidth: 2, 
    fontWeight:'bold'

  }

});