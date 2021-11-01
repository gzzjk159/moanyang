import 'react-native-gesture-handler'
import * as React from 'react';
import {NavigationContainer, useNavigation } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import{
  Button,
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
            <Scroll>
            </Scroll>
        </Container>
    )
}