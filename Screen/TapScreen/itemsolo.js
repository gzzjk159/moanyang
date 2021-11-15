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

const Scroll = styled.ScrollView``;

function Item_Solo({ item }) {

    return (
        <Scroll>
            <View style={{ flex: 1, flexDirection: 'row', height: 390, }}>

               
                   
                    <View style={{ flex: 1,  backgroundColor: 'black', opacity: 0.2, }} />
                


                <View style={{ flex: 4, borderWidth: 2, borderColor: '#313A96', }} >

                    <View style={{ flex: 2, alignSelf: 'center', }}>
                        <ImageModal resizeMode="stretch"
                            style={styles.ImgModal}
                            source={{ uri: `${item.image}` }} />
                    </View>

                    <View style={{ flex: 1, }}>
                        <Text numberOfLines={2} style={styles.mapname}>
                            {item.name}
                        </Text>


                        <View style={{ flex: 0.5, }}>
                            <View style={{ flexDirection: 'row', marginBottom: 5, }}>
                                <Text style={styles.dday}> D - {item.day} </Text>
                                <Text style={styles.see}> 조회수: {item.see}  </Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, }}>
                            <View style={{ flex: 1, flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#313A96', justifyContent: 'center', paddingTop: 2,  }}>
                                        
                                       
                                        <View style={{flex: 1, borderColor:'#313A06', borderRightWidth: 1,}}> 
                                                                        
                                        <TouchableOpacity>
                                            <Text style={styles.information} onPress={()=>{Linking.openURL(item.site)}} >정보 보기</Text>
                                    
                                            </TouchableOpacity>
                                        </View>
                                        
                                        
                                    
                                        <View style={{flex: 1,}}> 
                                                                   
                                        <TouchableOpacity>
                                        <Text style={styles.information}>팀원 구하기</Text>
                                    
                                        </TouchableOpacity>
                                        </View>
                                  
                            </View>
                        </View>
                    </View>

                </View>

               
                    <View style={{ flex: 1, backgroundColor: 'black', opacity: 0.2, }}>

                    </View>
                    
                
            </View>
            <View style= {{backgroundColor:'#313A96', height: 15 }}/>
        </Scroll>
    );
}
export default Item_Solo;

const styles = StyleSheet.create({

    row: {
        flexDirection: 'row',
    },
    button: {
        width: 60,
        height: 60,
        backgroundColor: '#333333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    button: {
        backgroundColor: '#859a9b',
        borderRadius: 20,
        padding: 10,
        marginBottom: 20,
        shadowColor: '#303838',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
    },
    ImgModal: {
        swipeToDismiss: false,
        width: 200,
        height: 240,
        resizeMode: "stretch",
        marginTop: 10,
        imageBackgroundColor: "#000000",


    },

    mapname: {

        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",
        paddingTop: 3,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 3,
        borderTopWidth: 1,
        borderTopColor: '#313A96',



    },
    dday: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft: 30.
    },
    see: {
        fontSize: 15,
        paddingLeft: 10,
        fontWeight: 'bold',
    },
    information: {
        alignSelf: 'center',
        paddingTop: 5,
        fontSize: 20,
        
    },
    Team: {
        alignSelf: 'center',
        paddingTop: 5,
        fontSize: 20,
        width: 100,
    },
    infocover: {
        flex: 1,
        margin: 10,
        borderColor: '#313A96',
        borderWidth: 2,
        fontWeight: 'bold',
        justifyContent:'center',
    },
    Teamcover: {
        flex: 1,
        margin: 10,
        borderColor: '#313A96',
        borderWidth: 2,
        fontWeight: 'bold',
        justifyContent:'center',

    }

});