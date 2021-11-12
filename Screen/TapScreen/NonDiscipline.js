import 'react-native-gesture-handler'
import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import NonData from '../../Nondummy.json';
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
    

    
} from 'react-native';
// import _ from 'lodash';
import styled from 'styled-components';
import FastImage from 'react-native-fast-image';
import ImageModal from 'react-native-image-modal';




export default function NonDiscipline() {
    const Container = styled.SafeAreaView``;
    const Scroll = styled.ScrollView``;


    const [tempData, SetTempData] = React.useState(NonData.slice(0, 2));
    // const [magamData, setTemp] = React.useState(tempData.slice(0, 2));
    // const [moreData, setData] = React.useState(NonData.slice(13, 20));
    
    return (
        <Container>
            <Scroll>
                <View style={{}}>




                    <Text style={styles.HotNonDiscipline}>
                        인기 비교과
                    </Text>
                    <View style={{ backgroundColor: '#313A96', height: 5, }} />
                    
                   
                        
                    <View style={{ flexDirection: 'row', }}>
                        
                        {

                            tempData.map( (data, index) => {



                                return (
                                    <View style={{ height: 300, flex: 1, backgroundColor: '#FFFFFF',}}  key={index} >

                                        <View style={{ flex: 1, }}>

                                            <View style={{ flex: 1.7, }}>
                                                <ImageModal
                                                style={styles.ImgModal}
                                                source={data.image}/>
                                            </View>
                                            <View style={{ flex: 1, }}>
                                                <View style={{ flex: 1, flexDirection: 'row', }}>
                                                    <Text numberOfLines={2} style={{ flex: 1, fontSize: 15, fontWeight: 'bold', textAlign: "center", textAlignVertical: "center", marginLeft: 10, marginRight: 10, }}>
                                                        {data.name}
                                                    </Text>

                                                </View>

                                                <View style={{ flex: 1, flexDirection: 'row', }}>
                                                    <View style={{ flex: 1, flexDirection: 'column', marginLeft: 10, }}>
                                                        <Text style={styles.dday}> D - {data.day} </Text>
                                                        <Text style={styles.see}> 조회수: {data.see}  </Text>
                                                    </View>
                                                    <View style={{flex: 1,flexDirection:'row',}}>
                                                        <TouchableOpacity style={styles.informationcover}>
                                                        <View>
                                                        
                                                            <Text style={styles.information}>
                                                                정보
                                                            </Text>
                                                            
                                                        </View>
                                                        </TouchableOpacity>

                                                        <TouchableOpacity style={styles.talkcover}>
                                                        <View>
                                                            <Text style={styles.talktalk}>
                                                                톡톡
                                                            </Text>      
                                                        </View>
                                                        </TouchableOpacity>

                                                    </View>
                                                </View>

                                            </View>
                                        </View>
                                    </View>
                                );
                            })

                        }
                    </View>
                            


                    {/* <View style={{ backgroundColor: '#313A96', height: 5, }} />

                    <Text style={styles.magam}>
                        마감 임박
                    </Text>

                    <View style={{ backgroundColor: '#313A96', height: 5, }} />

                    <View style={{ flexDirection: 'row', }}>
                        {

                            tempData.map(data => {



                                return (
                                    <View style={{ height: 300, flex: 1, backgroundColor: '#FFFFFF', }}>

                                        <View style={{ flex: 1, }} key={index}>

                                            <View style={{ flex: 1.7, }}>
                                                <ImageModal
                                                style={styles.ImgModal}
                                                source={require('../../assets/image/non/non01.jpg')}/>
                                            </View>
                                            <View style={{ flex: 1, }}>
                                                <View style={{ flex: 1, flexDirection: 'row', }}>
                                                    <Text numberOfLines={2} style={{ flex: 1, fontSize: 15, fontWeight: 'bold', textAlign: "center", textAlignVertical: "center", marginLeft: 10, marginRight: 10, }}>
                                                        {data.name}
                                                    </Text>

                                                </View>

                                                <View style={{ flex: 1, flexDirection: 'row', }}>
                                                    <View style={{ flex: 1, flexDirection: 'column', marginLeft: 10, }}>
                                                        <Text style={styles.dday}> D - {data.day} </Text>
                                                        <Text style={styles.see}> 조회수: {data.see}  </Text>
                                                    </View>
                                                    <View style={{flex: 1,flexDirection:'row',}}>
                                                        <TouchableOpacity style={styles.informationcover}>
                                                        <View>
                                                        
                                                            <Text style={styles.information}>
                                                                정보
                                                            </Text>
                                                            
                                                        </View>
                                                        </TouchableOpacity>

                                                        <TouchableOpacity style={styles.talkcover}>
                                                        <View>
                                                            <Text style={styles.talktalk}>
                                                                톡톡
                                                            </Text>      
                                                        </View>
                                                        </TouchableOpacity>

                                                    </View>
                                                </View>

                                            </View>
                                        </View>
                                    </View>
                                );
                            })

                        }
                    </View> */}
                    {/* <View style={{ backgroundColor: 'black', opacity: 0.2,height: 200, }} />



                    {

                    moreData.map(data => {



                    return (

                    <View key={data.id}>
                    <View style={{ height: 220, borderColor: '#313A96', borderWidth: 5, }}>

                        <View style={{ flex: 3.5, flexDirection: 'row', borderBottomColor: '#D9D9D9', borderBottomWidth: 1, }}>
                            <View style={{ flex: 1, }}>
                                                <ImageModal
                                                style={styles.ImgModalcontent}
                                                source={require('../../assets/image/non/non01.jpg')}/> 
                            </View>

                            <View style={{ flex: 1.5, }}>
                                <View style={{flex: 1.2,}}>
                                <Text numberOfLines={2}  style={{ padding: 10, fontSize: 20, fontWeight: 'bold', color: '#313A96' }}>{data.name}</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', }}>
                                    
                                        <Text style={{  paddingLeft: 10,fontSize: 15, fontWeight: 'bold',  }}> D - {data.day} </Text>     
                                        <Text style={{  paddingLeft: 10,fontSize: 15, fontWeight: 'bold',  }}> 조회수: {data.see} </Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', borderColor: '#313A96', borderWidth: 3, }}>
                            
                            <View style={{ flex: 1, borderRightColor: '#313A96', borderRightWidth: 1, }}>
                                <TouchableOpacity>
                                <Text style={{
                                    padding: 7, fontWeight: 'bold', fontSize: 20, textAlign: "center", textAlignVertical: "center",
                                }}>정보 보기
                                </Text>
                                </TouchableOpacity>
                                
                            </View>
                            
                            
                            <View style={{ flex: 1.5 }}>
                                <TouchableOpacity>
                                <Text style={{ padding: 7, fontWeight: 'bold', fontSize: 20, 
                                textAlign: "center", textAlignVertical: "center", }}>팀원 구하기</Text>
                                </TouchableOpacity>
                            </View>
                            
                        </View>

                        
                    </View>
                    <View style={{ backgroundColor: '#313A96', height: 30, }} />
                    </View>
                    );
                            })} */}

               



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
    ImgModal:{
        swipeToDismiss: false,
        width: 180,
        height: 180,
        resizeMode: "stretch",
        marginTop: 5,
        marginLeft: 8,
        marginRight: 5,
        imageBackgroundColor: "#000000",

    },
    ImgModalcontent:{
        height: 150,
        width: 140,
        marginTop: 2,
        marginLeft: 5,
        marginRight: 5,
        resizeMode: "stretch",
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
        height: 130,
        width: 140,
        marginTop: 5,
        marginLeft: 8,
        marginRight: 5,
        resizeMode: "stretch",
    },
    dday: {
        flex: 1, fontSize: 15,
    },
    see: {
        flex: 1, fontSize: 15,
    },
    informationcover: {
        flex: 1,
        width: 42,
        borderWidth: 2,
        borderRadius: 4,
        padding: 1,
        marginRight: 3,
        borderColor: '#313A96',
        marginBottom: 3,

    },
    talkcover: {
        flex: 1,
        width: 42,
        borderColor: '#313A96',
        borderWidth: 2,
        borderRadius: 4,
        padding: 1,
        marginBottom: 3,
        

    },
    information: {
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 13,
        textAlign: "center",
        textAlignVertical: "center",
        marginRight: 1,
    },
    talktalk: {
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 13,
        textAlign: "center",
        textAlignVertical: "center",
    },
    showinformaiton: {

    }


});

