import 'react-native-gesture-handler'
import * as React from 'react';
import {
    Text,
    StyleSheet,
    View,
    TextInput,
} from 'react-native';
import styled from 'styled-components';
const Container = styled.SafeAreaView`
    flex : 1;
`;
const Scroll = styled.ScrollView`
`;
const MarginLR = styled.View`
    margin-left : 5px;
    margin-right : 5px;
`;
// 문의하기
export default function Question(){
    return(
        <Container>
            <TextInput
            />
        </Container>
    );
}
const styles = StyleSheet.create({
    textstyle : {
        fontSize : 20 ,
        fontWeight : 'bold',
    },
    center : {
        flex : 1,
    },
});