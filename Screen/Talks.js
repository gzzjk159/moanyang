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
  TouchableOpacity,
} from 'react-native';
// import _ from 'lodash';
import styled from 'styled-components';

const Container = styled.SafeAreaView`
    flex : 1;
`;
const Scroll = styled.ScrollView`
`;
const Row = styled.View`
    flex-direction : row;
`;
const Talk = styled.View`
    height : 50px;
    background-color : '#ffffff';
`;

export default function Talks(){
    return(
        <Container style={styles.gray}>
            <Row>
                <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={()=>{}}>
                    <Text>
                        비교과
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={()=>{}}>
                    <Text>
                        공모전
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={()=>{}}>
                    <Text>
                        대외활동
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={()=>{}}>
                    <Text>
                        스터디
                    </Text>
                </TouchableOpacity>
            </Row>
            <Row>
                <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={()=>{}}>
                    <Text>
                        버튼
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={()=>{}}>
                    <Text>
                        버튼
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={()=>{}}>
                    <Text>
                        버튼
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={()=>{}}>
                    <Text>
                        기타
                    </Text>
                </TouchableOpacity>
            </Row>
            <Scroll>
                <Talk>
                    <Text>sdasdasdas</Text>
                </Talk>
            </Scroll>
        </Container>
    )
}
const styles = StyleSheet.create({
    row : {
      flexDirection : 'row',
    },
    button : {
      flex : 1,
      height : 30,
      borderWidth : 0.5,
      borderRadius : 10,
      marginTop : 5,
      marginLeft : 3,
      marginRight : 3,
      backgroundColor : '#aaaaaa',
      justifyContent : 'center',
      alignItems : 'center',
    },
    gray : {
        backgroundColor : '#dfdfdf'
    }
  });