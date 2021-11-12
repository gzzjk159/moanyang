import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground,Image } from 'react-native';


function FirstPage({ navigation }) {
    return (
        <View style={{ height: 720  }}>
            
            <View style={{ flex: 2.5, borderColor:'#313A96',borderWidth:4, backgroundColor:'#313A96', }}>
                
                
                <Text style={{ flex: 1,fontSize: 48, fontWeight:'bold',
                    textAlign:'center',textAlignVertical:'center', color:'#FFFFFF', }}>
                    안양대 인원 모집 애플리케이션
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
                    <TouchableOpacity style={{ alignSelf:'center', alignItems:'center', 
                    borderColor: '#313A96', fontWeight:'bold',borderWidth: 4, width: 350, height: 50, marginTop: 30, }}
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={{fontSize: 25, color:'black', fontWeight:'bold'}}>로그인 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignSelf:'center', alignItems:'center', 
                    borderColor: '#313A96', fontWeight:'bold',borderWidth: 4, width: 350, height: 50, marginTop: 30, }}
                        onPress={() => navigation.navigate('Signup')}>
                    
                        <Text style={{fontSize: 25, fontWeight: 'bold',color:'black',}}>회원가입</Text>
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
});
export default FirstPage;