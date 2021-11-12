import 'react-native-gesture-handler'
import * as React from 'react';


//import { createStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
// import _ from 'lodash';
import styled from 'styled-components';
import { SliderBox } from 'react-native-image-slider-box';
import ImageModal from 'react-native-image-modal';
import NonData from '../../Nondummy.json';
const Container = styled.SafeAreaView`
    flex : 1;
`;
const Scroll = styled.ScrollView`
`;


export default function MyTalk() {
  const [tempData, setTempData] = React.useState(NonData.slice(0, 1));
  return (

    <Container>
      <Scroll>

        <View style={{ flex: 1, backgroundColor: 'yellow', height: 270, }}>
          <SliderBox style={{ width: 200, height: 250, alignItems:'center', alignSelf:'center', resizeMode: 'stretch', marginTop: 10,}}
            
            images={[
              require('../../assets/image/non/non01.jpg'),
              require('../../assets/image/non/non02.png'),
              require('../../assets/image/non/non03.jpg'),
              require('../../assets/image/non/non04.jpg'),
              require('../../assets/image/non/non05.jpg')
            ]}
            
            autoplay
            circleLoop
          />
        </View>

        
        <View style={{ }}>
        {
          tempData.map(data=> {



            return (

              <View style={{ flex: 1, flexDirection: 'row', height: 390,  }}>

                <View style={{ flex: 1, backgroundColor: 'black', opacity: 0.2 ,}}>

                </View>

                
                <View style={{  flex: 6, borderWidth: 2,borderColor:'#313A96',  }} >  

                  <View style={{ flex: 2, alignSelf: 'center',  }}>
                    <ImageModal
                      style={styles.ImgModal}
                      source={require('../../assets/image/non/non01.jpg')} />
                  </View>

                  <View style={{ flex: 1, }}>
                    <Text numberOfLines={2} style={styles.mapname}>
                      {data.name}
                    </Text>


                    <View style={{ flex: 0.4,  }}>
                      <View style={{ flexDirection: 'row', }}>
                        <Text style={styles.dday}> D - {data.day} </Text>
                        <Text style={styles.see}> 조회수: {data.see}  </Text>
                      </View>
                    </View>
                    <View style={{ flex: 1,  }}>
                      <View style={{ flex: 1, flexDirection:'row', borderTopWidth: 1,borderTopColor:'#313A96', }}>
                        
                        <TouchableOpacity style= {styles.infocover}>
                            <Text style={styles.information}>정보 보기</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Teamcover}>
                            <Text style={styles.Team}>팀원 구하기</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>

                </View>

                <View style={{ flex: 1, backgroundColor: 'black', opacity: 0.2 , }}>
                </View>
              </View>
            );
          })

        }
        </View>


        <View style={{ flex: 1, backgroundColor: 'yellow', height: 500, }}>
          <Text>s</Text>
        </View>
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