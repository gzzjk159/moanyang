import 'react-native-gesture-handler'
import * as React from 'react';
import {NavigationContainer, useNavigation } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import{
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
} from 'react-native';
// import _ from 'lodash';
import styled from 'styled-components';
import HomeScreen from './HomeScreen';
import Setting from './Setting';

const Container = styled.SafeAreaView`
    flex : 1;
`;
const Scroll = styled.ScrollView`
`;

export default function MyTalk(){
    return(
        <Container>
            <Scroll>
              <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={()=>{}}>
                <Text>
                  버튼
                </Text>
              </TouchableOpacity>
            </Scroll>
        </Container>
    )
}
const styles = StyleSheet.create({
  row : {
    flexDirection : 'row',
  },
  button : {
    width : 60,
    height : 60,
    backgroundColor : '#333333',
    justifyContent : 'center',
    alignItems : 'center',
  },
});