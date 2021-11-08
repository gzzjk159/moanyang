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
// 정보 동의 설정
export default function PrivacyPolicy(){
    return(
        <Container>
            <MarginLR>
                <Scroll>
                    <Text style = {styles.textstyle}>추가 될 예정입니다.</Text>
                </Scroll>
            </MarginLR>
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