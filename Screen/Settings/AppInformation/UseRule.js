import 'react-native-gesture-handler'
import * as React from 'react';
import {
    Text,
    StyleSheet,
    View,
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
export default function UseRule(){
    return(
        <Container>
            <MarginLR>
                <Scroll>
                    <Text style = {styles.textstyle}>
                        익명이란 가면 쓰고 망나니처럼 활동하지 않기
                    </Text>
                </Scroll>
            </MarginLR>
        </Container>
    );
}
// 커뮤니티 이용규칙
const styles = StyleSheet.create({
    textstyle : {
        fontSize : 20 ,
        fontWeight : 'bold',
    },
    center : {
        flex : 1,
    },
});