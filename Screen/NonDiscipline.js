import 'react-native-gesture-handler'
import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import NonData from '../Nondummy.json'

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

    React.useEffect(() => {

    });

    const sliderHandler = () => {

    }

    return (
        <Container>
            <Scroll>
                 <Text style={styles.HotNonDiscipline}> {/* 문자 특성*/}
                    인기 비교과
                </Text>

                <View>
                    <View style={{ height: 300, flexDirection: 'row',  }}>
                        {/* 인기 비교과 전체 사이즈, 특성 */}

                        {
                            tempData.map(data => {
                                return (
                                    <View style={{ flex: 1 }} key={data.id}>

                                        <View style={{ flex: 1.7, backgroundColor: 'green',  }}>
                                            <Image style={styles.ImageContent}
                                                source={data.url}/>
                                        </View>
                                        <View style={{ flex: 1, }}>
                                            <View style={{ flex: 1, backgroundColor: 'gray',  }}>
                                                <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: "center", textAlignVertical: "center" }}>
                                                    {data.name}</Text>
                                            </View>

                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                <View style={{ flex: 1, backgroundColor: 'red', flexDirection: 'row' }}>
                                                    <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 13 }}> D - {data.DAY} </Text>
                                                </View>
                                                <View style={{ flex: 2.5, backgroundColor: 'yellow', flexDirection: 'row',  }}>
                                                    <Text style={{ padding: 10, fontWeight: 'bold', fontSize: 20, textAlign: "center", textAlignVertical: "center", marginLeft: 15, }}>
                                                        팀원구하기</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                );
                            })
                        }

                    </View>



 {/* 임시 저장용 */}
                    <Text style={styles.magam}>
                        마감 임박
                    </Text>
                    <View style={{ height: 300, backgroundColor: 'green', flexDirection: 'row' }}>
                        <View style={{ flex: 1, backgroundColor: 'gray' }}>
                            <View style={{ backgroundColor: 'red', flex: 1.7 }}>

                                <Image style={styles.ImageContent}
                                    source={require('../image/Sample1.png')} />

                            </View>
                            <View style={{ backgroundColor: 'yellow', flex: 1 }}>
                                <View>
                                    <View style={{ height: 50, }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 19 }}>
                                            [일자리] 공연예술단체 설립 및 운영</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ height: 50, width: 100, }}>
                                            <Text>가보자</Text>
                                        </View>

                                        <View>
                                            <Text>보고자</Text>
                                        </View>
                                    </View>

                                </View>

                            </View>

                        </View>
                        <View style={{ flex: 1, backgroundColor: 'blue' }}>
                            <View style={{ backgroundColor: 'purple', flex: 1.7 }}>

                                <Image style={{ height: 170, width: 170, marginLeft: 13, marginTop: 10, }}
                                    source={require('../image/non/non01.jpg')} />
                            </View
                            >
                            <View style={{ backgroundColor: 'orange', flex: 1 }}>
                                <View>
                                    <View style={{ height: 50, }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 19 }}>
                                            [일자리] 공연예술단체 설립 및 운영</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ height: 50, width: 100, }}>
                                            <Text>가보자</Text>
                                        </View>

                                        <View>
                                            <Text>보고자</Text>
                                        </View>
                                    </View>

                                </View>

                            </View>
                        </View>


                    </View>
{/* 임시 저장용 */}
                    <View style={{height: 50, backgroundColor: '#D9D9D9'}}/>


                    <View style={{ height: 250, borderTopColor: 'purple', borderBottomColor: 'purple', borderWidth: 1, }}>
                        <View style ={{flex:3.5, flexDirection:'row', borderBottomColor: '#D9D9D9', borderBottomWidth: 1,}}>
                            <View style={{flex: 1, backgroundColor: 'blue',}}>
                                    <Image style={styles.ImageContentContain}
                                    source={require('../image/non/non01.jpg')} />
                            </View>
                            <View style={{flex: 1.5, backgroundColor: 'green',}}>
                                 
                                    <Text style={{padding: 10, fontSize: 25, fontWeight: 'bold',}}>직무 교육 프로그램 가나다마바</Text>
                                    <Text style={{padding: 10, fontSize: 15, fontWeight: 'bold',}}> D - 2 </Text>
                                    <Text style={{padding: 10, fontSize: 15, fontWeight: 'bold',}}> D - 2 </Text>

                            </View>    
                        </View>
                        <View style ={{flex: 1, backgroundColor: 'red', flexDirection: 'row'}}>
                            <View style ={{flex: 1, borderRightColor: '#D9D9D9', borderRightWidth: 1,}}>
                                <Text style={{ paddingTop: 13, fontWeight: 'bold', fontSize: 20, textAlign: "center", textAlignVertical: "center", }}>정보 보기</Text>
                            </View>
                            <View style ={{flex: 1.5}}>
                                <Text style={{ paddingTop: 13, fontWeight: 'bold', fontSize: 20, textAlign: "center", textAlignVertical: "center", }}>팀원 구하기</Text>
                            </View>
                        </View>


                    </View>

                   

                    <View style={{ height: 250, backgroundColor: 'yellow' }}>



                    </View>



                </View>
            </Scroll>
        </Container>
    )
}

const styles = StyleSheet.create({
    HotNonDiscipline: { // 인기 비교과, 마감임박 - 글자
        fontWeight: 'bold',
        fontSize: 23,
        padding: 10,
        marginTop: 5,
        borderBottomColor: 'black', borderBottomWidth: 2,
        backgroundColor: '#D9D9D9',
    },
    magam: {
        fontWeight: 'bold',
        fontSize: 23,
        padding: 10,
        backgroundColor: '#D9D9D9',
        borderBottomColor: 'black',borderBottomWidth: 2, borderTopWidth: 1, borderTopColor: 'black',
    },
    ImageContent: {
        height: 170,
        width: 170,
        marginLeft: 13,
        marginTop: 10,
        resizeMode: "stretch",
    },
    ImageContentContain: {
        height: 160,
        width: 130,
        marginLeft: 13,
        marginTop: 17,
        resizeMode: "contain",
    },
   
    showinformaiton:{

    }


});

