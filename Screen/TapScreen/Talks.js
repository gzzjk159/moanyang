import 'react-native-gesture-handler'
import * as React from 'react';
import NonData from '../../Nondummy.json'
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

import { OnData } from '../../Nondum';




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

    const [tempData, aData] = React.useState(NonData.slice(0, 3));

    return (
        <Container style={styles.gray}>
            <Row>
                <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={() => { }}>
                    <Text>
                        비교과
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={() => { }}>
                    <Text>
                        공모전
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={() => { }}>
                    <Text>
                        대외활동
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={() => { }}>
                    <Text>
                        스터디
                    </Text>
                </TouchableOpacity>
            </Row>
            <Row>
                <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={() => { }}>
                    <Text>
                        동아리
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={() => { }}>
                    <Text>
                        버튼
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={() => { }}>
                    <Text>
                        버튼
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={() => { }}>
                    <Text>
                        기타
                    </Text>
                </TouchableOpacity>
            </Row>


            <TouchableOpacity style={styles.makeRoom}>
                <Text style={styles.makeRoomText}>방만들기</Text>
            </TouchableOpacity>

            <View style={{ backgroundColor: '#313A96', height: 3, }} />



            <Scroll>
                {/* {
                    tempData.map(data => {
                        return (
                            <View >
                            <TouchableOpacity key={data.id}>
                                <View style={{ flex: 1, height: 80, }}>
                                    <View style={{ flexDirection: 'row', flex: 1, }}>
                                        <View style={{ flex: 1, }} >
                                            <TouchableOpacity>
                                                <Image style={styles.ImageContent}
                                                    source={require('../../assets/image/non/non01.jpg')} />
                                            </TouchableOpacity>

                                        </View>
                                        <View style={{ flex: 3, flexDirection: 'column', }}>
                                            <View style={{ flex: 1, flexDirection: 'row', }}>
                                                <View style={{ flex: 5, }}>
                                                    <Text numberOfLines={1} style={styles.Title}> {data.name}</Text>
                                                </View>
                                                <View style={{ flex: 1, }}>
                                                    <Text style={styles.personal}> 1 / 4</Text>
                                                </View>
                                            </View>
                                            <View style={{ flex: 1, flexDirection: 'row', }}>
                                                <View style={{ flex: 1, }}>
                                                    <Text style={styles.dday}> D - {data.day} </Text>
                                                </View>
                                                <View style={{ flex: 4, }}>
                                                    <Text style={styles.see}> 조회수: {data.see} </Text>

                                                </View>

                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <View style={{ backgroundColor: '#313A96', height: 3, }} />
                            </View>
                        );
                    })
                } */}
                
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
        margin: 10,
        marginTop: 20,
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