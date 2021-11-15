import 'react-native-gesture-handler'
import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
    Linking,
    TouchableWithoutFeedback

} from 'react-native';
import styled from 'styled-components';
import FastImage from 'react-native-fast-image';
import ImageModal from 'react-native-image-modal';
import Tabs from '../../Components/TopTapNavigator';
const Scroll = styled.ScrollView``;

function Item_Room({ item, navigation }) {
    
    return (

    <Scroll>
        <TouchableOpacity>
        <View style={{ height: 90,  flexDirection: 'row', }}>
            <View style={{ flex: 1, }}>
                <ImageModal resizeMode="stretch"
                    style={styles.Imgmodal}
                    source={{ uri: `${item.image}` }} />
            </View>
            <View style={{  flex: 4, }}>
                <View style={{ flex: 1.2, flexDirection: 'row', }}>

                    <Text style={styles.itemroom} numberOfLines={1} >{item.room}</Text>
                    <Text style={styles.person}> {item.inperson} / {item.totalperson}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={styles.day}> D - {item.day} </Text>
                    <Text style={styles.see}> 조회수: {item.see} </Text>
                    <Text style={styles.hash}> {item.hash} {item.hash1} </Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>

        <View style={{ backgroundColor: 'black', opacity: 0.2, height: 7, flex: 1, }} />

    </Scroll>
       );
}
    
export default Item_Room;
const styles = StyleSheet.create({
    Imgmodal: { // 인기 비교과 - 글자
        width: 70, 
        height: 80, 
        marginTop: 5, 
        marginLeft: 4,
    },
    itemroom:{
        paddingLeft: 8, 
        paddingTop: 5, 
        fontSize: 22, 
        fontWeight: 'bold', 
        color: '#313A96', 
        flex: 5,
    },
    person:{
        paddingLeft: 10, 
        paddingTop: 5, 
        fontSize: 18, 
        flex: 1,
    },
    day:{
        fontSize: 18, 
        paddingTop: 3, 
        paddingLeft: 5, 
    },
    see:{
        fontSize: 18, 
        paddingTop: 3, 
        paddingLeft: 5,
    },
    hash:{
        fontSize: 14, 
        paddingTop: 6, 
        paddingLeft: 5,
        color:"#D9D9D9"
    }
    
});