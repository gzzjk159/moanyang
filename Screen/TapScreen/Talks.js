import 'react-native-gesture-handler'
import * as React from 'react';
import RoomData from '../../Roomdummy.json';
import Picker from '../../picker';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    onchange,
    Button,
    Image,
} from 'react-native';

import styled from 'styled-components';

import ImageModal from 'react-native-image-modal';
import { FlatList } from 'react-native';
import itemCompent from "./itemRoom";

export default function Talks() {

    const Container = styled.SafeAreaView`
flex : 1;
`;
    const Scroll = styled.ScrollView`
`;
    const Row = styled.View`
flex-direction : row;
`;
    const Talk = styled.View`
height : 50px;
background-color : '#ffffff';
`;

    const [tempData, aData] = React.useState(RoomData.slice(0, 10));

    return (
        <Container style={styles.gray}>
            <View style={{backgroundColor: '#D9D9D9', opacity: 0.5,height: 60, marginLeft: 100,marginRight: 100, margin: 10,}}>
            <Picker/>
            </View>
            <TouchableOpacity style={styles.makeRoom}>
                <Text style={styles.makeRoomText}>방만들기</Text>
            </TouchableOpacity>

           

            <View style={{ backgroundColor: '#313A96', height: 3, }} />



            <Scroll>
                    <SafeAreaView>
                        <FlatList
                        data={tempData}
                        renderItem={(itemCompent)}
                        keyExtractor={item => item.id}
                        numColumns={1}
                        />
                    </SafeAreaView>
                
            </Scroll>

        </Container>
    )
}
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    button: {
        flex: 1,
        height: 30,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: '#313A96',
        marginTop: 5,
        marginLeft: 3,
        marginRight: 3,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gray: {
        backgroundColor: '#fff'
    },
    makeRoom: {
        backgroundColor: 'yellow',
        borderColor: '#313A96',
        borderWidth: 2,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        padding: 10,
        textAlign: 'center',
        alignItems: 'center',
    },
    makeRoomText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    ImageContent: {
        height: 70,
        width: 80,
        marginTop: 5,
        marginLeft: 8,
        marginRight: 5,
        resizeMode: "stretch",
    },
    Title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
        alignItems: 'center',
    },
    personal: {
        fontSize: 15,
        marginTop: 8,
        marginLeft: 5,
    },
    dday: {
        marginLeft: 1,
        padding: 1,
        fontSize: 15,
        
        fontWeight: 'bold',
        color: '#313A96',
    },
    hash: {
        fontSize: 12,
        color: '#d9d9d9',
        marginLeft: 7,
        marginTop: 3,
       
    }

});