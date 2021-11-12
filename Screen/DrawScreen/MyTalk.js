import 'react-native-gesture-handler'
import * as React from 'react';
//import { createStackNavigator } from '@react-navigation/stack';
import{
  StyleSheet,
  View,
  Text,
} from 'react-native';
// import _ from 'lodash';
import styled from 'styled-components';
const Container = styled.SafeAreaView`
    flex : 1;
`;
const Scroll = styled.ScrollView`
`;
export default function MyTalk(){
  return(
      <Container>
          <View>
            <Text>
              OutdoorActivities
            </Text>
          </View>
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