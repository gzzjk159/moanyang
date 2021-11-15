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
// 서비스 이용약관
export default function TermsService(){
    return(
        <Container>
            <MarginLR>
                <Scroll>
                    <Text>
                        서비스 이용 약관
                    </Text>
                </Scroll>
            </MarginLR>
        </Container>
    );
}
const styles = StyleSheet.create({
    textstyle : {
        fontSize : 15 ,
        fontWeight : 'bold',
    },
    center : {
        flex : 1,
    },
});