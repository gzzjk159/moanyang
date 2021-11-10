import 'react-native-gesture-handler'
import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import NonData from '../../Nondummy.json'
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
} from 'react-native';
// import _ from 'lodash';
import styled from 'styled-components';



export default function NonDiscipline() {
    const Container = styled.SafeAreaView``;
    const Scroll = styled.ScrollView``;


    const [tempData, setTempData] = React.useState(NonData.slice(0, 2));


    return (
        <Container>
            <Scroll>
                <View style={{  }}>




                    <Text style={styles.HotNonDiscipline}>
                        인기 비교과
                    </Text>
                    <View style={{ backgroundColor: '#313A96', height: 5, }} />

                    <View style={{ flexDirection: 'row', }}>
                        {

                            tempData.map(data => {
                                return (
                                    <View style={{ height: 300, flex: 1, backgroundColor: '#FFFFFF', }}>

                                        <View style={{ flex: 1,  }} key={data.id}>

                                            <View style={{ flex: 1.7, }}>
                                                <Image style={styles.ImageContent}
                                                    source={require('../../assets/image/Sample1.png')} />
                                            </View>
                                            <View style={{ flex: 1, }}>
                                                <View style={{ flex: 1, flexDirection: 'row', }}>
                                                    <Text numberOfLines={2} style={{ flex: 1, fontSize: 15, fontWeight: 'bold', textAlign: "center", textAlignVertical: "center", marginLeft: 10, marginRight: 10, }}>
                                                        {data.name}
                                                    </Text>

                                                </View>

                                                <View style={{ flex: 1, flexDirection: 'row', }}>
                                                    <View style={{ flex: 1.6, flexDirection: 'row', marginLeft: 10, }}>
                                                        <Text style={{ textAlign: "center", }}> D - {data.DAY} </Text>
                                                        <Text style={{ textAlign: "center", }}> 조회수: {data.see}  </Text>
                                                    </View>
                                                    <View style={{ flex: 1, flexDirection: 'row', borderColor: '#313A96', borderWidth: 2, borderRadius: 5, marginLeft: 50, padding: 1, marginBottom: 5, marginTop: 5, marginRight: 5, }}>
                                                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 5, textAlign: "center", textAlignVertical: "center", }}>
                                                            톡톡
                                                        </Text>
                                                    </View>
                                                </View>

                                            </View>
                                        </View>
                                    </View>
                                );
                            })

                        }
                    </View>


                    <View style={{ backgroundColor: '#313A96', height: 5, }} />

                    <Text style={styles.magam}>
                        마감 임박
                    </Text>

                    <View style={{ backgroundColor: '#313A96', height: 5, }} />

                    <View style={{ flexDirection: 'row' }}>
                        {

                            tempData.map(data => {
                                return (
                                    <View style={{ height: 300, flex: 1, backgroundColor: '#FFFFFF',}}>

                                        <View style={{ flex: 1 }} key={data.id}>

                                            <View style={{ flex: 1.7, }}>
                                                <Image style={styles.ImageContent}
                                                    source={require('../../assets/image/Sample1.png')} />
                                            </View>
                                            <View style={{ flex: 1, }}>
                                                <View style={{ flex: 1, flexDirection: 'row', }}>
                                                    <Text numberOfLines={2} style={{ flex: 1, fontSize: 15, fontWeight: 'bold', textAlign: "center", textAlignVertical: "center", marginLeft: 10, marginRight: 10, }}>
                                                        {data.name}
                                                    </Text>

                                                </View>

                                                <View style={{ flex: 1, flexDirection: 'row', }}>
                                                    <View style={{ flex: 1.6, flexDirection: 'row', marginLeft: 10, }}>
                                                        <Text style={{ textAlign: "center", }}> D - {data.DAY} </Text>
                                                        <Text style={{ textAlign: "center", }}> 조회수: {data.see}  </Text>
                                                    </View>
                                                    <View style={{ flex: 1, flexDirection: 'row', borderColor: '#313A96', borderWidth: 2, borderRadius: 5, marginLeft: 50, padding: 1, marginBottom: 5, marginTop: 5, marginRight: 5, }}>
                                                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 5, textAlign: "center", textAlignVertical: "center", }}>
                                                            톡톡</Text>

                                                    </View>
                                                </View>

                                            </View>
                                        </View>
                                    </View>

                                );
                            })
                        }
                    </View>

                    <View style={{ backgroundColor: '#313A96', height: 50, }} />






                    <View style={{ height: 250, borderColor: '#313A96', borderWidth: 5, }}>
                        <View style={{ flex: 3.5, flexDirection: 'row', borderBottomColor: '#D9D9D9', borderBottomWidth: 1, }}>
                            <View style={{ flex: 1, }}>
                                <Image style={styles.ImageContentContain}
                                    source={require('../../assets/image/non/non01.jpg')} />
                            </View>

                            <View style={{ flex: 1.5, }}>

                                <Text style={{ padding: 10, fontSize: 25, fontWeight: 'bold', color: '#313A96' }}>직무 교육 프로그램 가나다마바</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 1, }}>
                                        <Text style={{ padding: 10, fontSize: 20, fontWeight: 'bold', color: '#313A96' }}> D - 2 </Text>


                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={{ marginLeft: 10, marginTop: 10, width: 20, height: 20 }}
                                                source={require('../../assets/image/view.png')} />
                                            <Text style={{ padding: 10, fontSize: 15, fontWeight: 'bold', color: '#C3C3C3' }}> 조회수 </Text>

                                        </View>
                                    </View>
                                    <View style={{ flex: 1, }}>
                                        <View>

                                            <Text>
                                                #해시태그
                                            </Text>
                                            <Text>
                                                #해시태그
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', borderColor: '#313A96', borderWidth: 3, }}>
                            <View style={{ flex: 1, borderRightColor: '#313A96', borderRightWidth: 1, }}>
                                <Text style={{
                                    paddingTop: 13, fontWeight: 'bold', fontSize: 20, textAlign: "center", textAlignVertical: "center",

                                }}>정보 보기</Text>
                            </View>
                            <View style={{ flex: 1.5 }}>
                                <Text style={{ paddingTop: 13, fontWeight: 'bold', fontSize: 20, textAlign: "center", textAlignVertical: "center", }}>팀원 구하기</Text>
                            </View>
                        </View>
                    </View>

                    {/* {
                        tempData.map(data => {
                            return (
                                <View style={{ height: 500, backgroundColor: 'yellow' }}>


                                </View>
                            )
                        })
                    } */}



                </View>
            </Scroll>
        </Container>
    )
}

const styles = StyleSheet.create({
    HotNonDiscipline: { // 인기 비교과 - 글자
        fontWeight: 'bold',
        fontSize: 23,
        padding: 10,
        marginTop: 5,
        
    },
    magam: {
        fontWeight: 'bold',
        fontSize: 23,
        padding: 10,
        
    },
    ImageContent: {
        height: 180,
        width: 180,
        marginTop: 5,
        marginLeft: 8,
        marginRight: 5,
        resizeMode: "stretch",

    },
    ImageContentContain: {
        height: 175,
        width: 140,
        marginTop: 5,
        marginLeft: 8,
        marginRight: 5,
        resizeMode: "stretch",
    },

    showinformaiton: {

    }


});

