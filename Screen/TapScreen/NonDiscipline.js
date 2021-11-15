import 'react-native-gesture-handler'
import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import NonData from '../../Nondummy.json';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FlatList } from 'react-native';
import { LogBox } from 'react-native';
import { useEffect } from 'react';

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
import ItemSolo from './itemsolo';
import { template } from '@babel/core';



export default function NonDiscipline() {
    const Container = styled.SafeAreaView``;
    const Scroll = styled.ScrollView``;

    const [tempData, SetTempData] = React.useState(NonData.slice(0, 6));
    const [magamData, setTemp] = React.useState(NonData.slice(6, 12));
    const [moreData, setData] = React.useState(NonData.slice(12, 20));

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])
    return (
        <Container>
            <Scroll>
                <Text style={styles.HotNonDiscipline}>
                    인기 비교과
                </Text>
                <View style={{ backgroundColor: '#313A96', height: 3, }} />

                <SafeAreaView>
                    <FlatList

                        data={tempData}
                        renderItem={(itemCompent)}
                        keyExtractor={item => item.id}
                        numColumns={2}
                    />
                </SafeAreaView>

                <View style={{ marginTop: 5, borderColor: '#313A96', borderTopWidth: 3, borderBottomWidth: 3, }}>
                    <Text style={styles.HotNonDiscipline}>
                        마감 임박
                    </Text>
                </View>
                <SafeAreaView>
                    <FlatList

                        data={magamData}
                        renderItem={(itemCompent)}
                        keyExtractor={item => item.id}
                        numColumns={2}
                    />
                </SafeAreaView>
                <View style={{ backgroundColor: '#313A96', height: 15, }} />
                <SafeAreaView>
                    <FlatList
                        data={moreData}
                        renderItem={(ItemSolo)}
                        keyExtractor={item => item.id}
                        numColumns={1}
                    />
                </SafeAreaView>

                <View style={{ backgroundColor: '#313A96', height: 50, }} />

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
