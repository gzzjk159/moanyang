import 'react-native-gesture-handler'
import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import NonData from '../../Nondummy.json';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FlatList } from 'react-native';

import {
    Button,
    Dimensions,
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    ScrollView,
    Image,
    TextInput,
    Touchable,
    StatusBar,
    Scroll,


} from 'react-native';
// import _ from 'lodash';
import styled from 'styled-components';
import FastImage from 'react-native-fast-image';
import ImageModal from 'react-native-image-modal';


// components
import itemCompent from "./Item_Component";
import { template } from '@babel/core';



export default function NonDiscipline() {
    const Container = styled.SafeAreaView``;
    const Scroll = styled.ScrollView``;

    const [tempData, SetTempData] = React.useState(NonData.slice(0, 6));
    const [magamData, setTemp] = React.useState(NonData.slice(6, 12));
    const [moreData, setData] = React.useState(NonData.slice(12, 20));

    return (
        <Container>
            <Scroll>
                <Text style={styles.HotNonDiscipline}>
                    인기 비교과
                </Text>

                <SafeAreaView style={{ flex: 1 }}>
                    <FlatList
                        data={tempData}
                        renderItem={(itemCompent)}
                        keyExtractor={item => item.id}
                        numColumns={2}
                    />
                </SafeAreaView>

                <Text style={styles.HotNonDiscipline}>
                    마감 임박
                </Text>

                <SafeAreaView style={{ flex: 1 }}>
                    <FlatList
                        data={magamData}
                        renderItem={(itemCompent)}
                        keyExtractor={item => item.id}
                        numColumns={2}
                    />
                </SafeAreaView>

                
            </Scroll>
        </Container >
    );
}

const styles = StyleSheet.create({
    HotNonDiscipline: { // 인기 비교과 - 글자
        fontWeight: 'bold',
        fontSize: 23,
        padding: 10,
        marginTop: 5,
    },
});
