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
// 채팅 설정
export default function ChatSetting(){
    return(
        <Container>
            <MarginLR>
                <Text>
                    기능 구현 중입니다.
                </Text>
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