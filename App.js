import 'react-native-gesture-handler'
import * as React from 'react';
import {NavigationContainer, useNavigation } from '@react-navigation/native';
import{
  StyleSheet,
  StatusBar,
} from 'react-native';
import styled from 'styled-components/native';
import DrawerNavigator from './Components/DrawerNavigator';

const Container = styled.SafeAreaView`
  flex : 1;
`;

export default function App () {
  return (
      <Container>
        <StatusBar
          animated={true}
          backgroundColor="#000000"
        />
        <NavigationContainer>
          <DrawerNavigator/>
        </NavigationContainer>
      </Container>
  )
}

// const styles = StyleSheet.create({
//   blue : {
//      backgroundColor : '#313A96',
//   },
//   row : {
//     flexDirection : 'row',
//   },
//   searchImage : {
//     width : 50,
//     height : 50,
//   },
//   myTalkImage : {
//     width : 50,
//     height : 50,
//   },
// });