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
// 오픈소스 라이센스
export default function OpenSourceLicense(){
    return(
        <Container>
            <MarginLR>
                <Scroll>
                    <Text>{`
                        "name": "moayu",
                        "version": "0.0.1",
                        "private": true,
                        "scripts": 
                            "android": "react-native run-android",
                            "ios": "react-native run-ios",
                            "start": "react-native start",
                            "test": "jest",
                            "lint": "eslint ."
                        ,
                        "dependencies": 
                            "@react-native-community/masked-view": "^0.1.11",
                            "@react-navigation/drawer": "^6.1.8",
                            "@react-navigation/material-top-tabs": "^6.0.6",
                            "@react-navigation/native": "^6.0.6",
                            "@react-navigation/stack": "^6.0.11",
                            "react": "17.0.2",
                            "react-native": "0.66.0",
                            "react-native-elements": "^3.4.2",
                            "react-native-gesture-handler": "^1.10.3",
                            "react-native-keyboard-aware-scroll-view": "^0.9.4",
                            "react-native-pager-view": "^5.4.7",
                            "react-native-paper": "^4.9.2",
                            "react-native-reanimated": "^2.2.3",
                            "react-native-safe-area-context": "^3.3.2",
                            "react-native-screens": "^3.8.0",
                            "react-native-tab-view": "^3.1.1",
                            "react-native-vector-icons": "^8.1.0",
                            "react-redux": "^7.2.6",
                            "redux": "^4.1.1",
                            "styled-components": "^5.3.3"
                        ,
                        "devDependencies": 
                            "@babel/core": "7.15.5",
                            "@babel/runtime": "7.15.4",
                            "@react-native-community/eslint-config": "2.0.0",
                            "babel-jest": "26.6.3",
                            "eslint": "7.14.0",
                            "jest": "26.6.3",
                            "metro-react-native-babel-preset": "0.66.2",
                            "react-test-renderer": "17.0.2"
                        ,
                        "jest": 
                            "preset": "react-native"
                        ,
                        "rnpm" 
                            "assets" [
                            "./src/assets/fonts"
                        `}
                </Text>
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