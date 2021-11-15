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
// 앱 버젼
export default function AppVersion(){
    return(
        <Container>
            <View style = {styles.center}>
                    <Text style = {styles.textstyle}>버젼 0.0.1</Text>
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    textstyle : {
        fontSize : 30 ,
        fontWeight : 'bold',
    },
    center : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center', 
    },
});