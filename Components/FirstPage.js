import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground,Image } from 'react-native';
import {Fonts} from '../src/fonts';
import Styled from 'styled-components/native'

function FirstPage({ navigation }) {
    return (
        <View style={{ flex: 1 ,backgroundColor:'#313A96', }}>
            
            <View style={{ flex: 2.5, borderColor:'#313A96',borderWidth:4,  }}>
                
                
                <Text style={{ flex: 1,fontSize: 60, fontWeight:'bold',
                    textAlign:'center',textAlignVertical:'center', color:'#FFFFFF', fontFamily: Fonts.BMDOHYEON }}>
                    모아냥
                </Text>
                
                <View style={{flex: 1,}}>
                <Image style={{width: 200,height: 200, alignSelf:'center',alignSelf:'center', }} source={require('../assets/image/moanyang.png')}/>
                {/* <Text style={{ flex: 1,fontSize: 50, fontWeight:'bold', color:'#FFFFFF',
                    textAlign:'center',textAlignVertical:'center', }}>
                    모아냥
                </Text> */}
                </View>
                
                
            </View>

            <View style={{ flex: 1, }}>
                <View style={{  flex: 1,  }}>
                    <TouchableOpacity style={ styles.Login }
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.LoginText}>로그인 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Sign}
                        onPress={() => navigation.navigate('Signup')}>
                    
                        <Text style={styles.SignText}>회원가입</Text>
                    </TouchableOpacity>
                </View>
                
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    total: {
        flex: 1,
    },
    AppName: {
        flex: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
    },
    Buttons: {
        flex: 4.5,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    Login:{
        alignSelf:'center', 
        alignItems:'center', 
        borderColor: 'black', 
        fontWeight:'bold',
        borderWidth: 1, 
        width: 350, 
        height: 50,  
        backgroundColor: '#FFFFFF',
        justifyContent:'center',
        borderRadius:5,
        
    },
    LoginText:{
        fontSize: 25, 
        color:'black', 
        fontWeight:'bold', 
            },
    Sign: {
        alignSelf:'center', 
        alignItems:'center', 
        borderColor: 'black', 
        fontWeight:'bold',
        borderWidth: 1, 
        width: 350, 
        height: 50, 
        marginTop: 30, 
        backgroundColor: 'yellow',
        borderRadius: 5,
        justifyContent:'center',
    },
    SignText:{
        fontSize: 25, 
        color:'black', 
        fontWeight:'bold', 
        
    }
});
export default FirstPage;