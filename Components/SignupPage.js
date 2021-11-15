
import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Button, } from 'react-native';


function LoginPage({ navigation }) {

  const [value, setValue] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: '#313A96', }}>
      <View style={{ flex: 1, backgroundColor: 'white', margin: 15, marginBottom: 20, }}>
        <View style={{ flex: 2, }}>


          <Text style={{
            flex: 1, fontSize: 48, fontWeight: 'bold',
            textAlign: 'center', textAlignVertical: 'center', color: '#313A96',
          }}>
            회원가입
          </Text>
          <View style={{ flex: 1, }}>
            <Image style={{ width: 200, height: 200, alignSelf: 'center', alignSelf: 'center', }} source={require('../assets/image/moanyang.png')} />
            {/* <Text style={{ flex: 1,fontSize: 50, fontWeight:'bold', color:'#FFFFFF',
                    textAlign:'center',textAlignVertical:'center', }}>
                    모아냥
                </Text> */}
          </View>


        </View>

        <View style={{ flex: 1, }}>
          <View style={{ flex: 1, }}>
            <View>
              <View style={{ padding: 10, }}>
                <TextInput style={styles.ID} value={value} placeholder="example@gmail.com" onChangeText={setValue} autoCorrect={false} autoCapitalize="none">

                </TextInput>
              </View>
              <View style={{ padding: 10, }}>
                <TextInput style={styles.Password} value={value} placeholder="password" onChangeText={setValue} autoCorrect={false} autoCapitalize="none">

                </TextInput>
              </View>
              <View style={{ padding: 10, }}>

                <TouchableOpacity style={styles.LoginBtn} onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.LoginText}> 회원가입 </Text>
                </TouchableOpacity>
              </View>
            </View>



          </View>

        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  total: {
    flex: 1,
    backgroundColor: 'red',
  },
  AppName: {
    flex: 4,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Inputs: {
    flex: 5,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    width: 200,
    height: 35,
  },
  ID: {
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: '#313A96',
    fontWeight: 'bold',
    borderWidth: 2,
    width: 350,
    height: 50,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    borderRadius: 5,
    paddingLeft: 10,
  },
  Password: {
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: '#313A96',
    fontWeight: 'bold',
    borderWidth: 2,
    width: 350,
    height: 50,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    borderRadius: 5,
    paddingLeft: 10,
  },
  LoginBtn: {
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: '#313A96',
    fontWeight: 'bold',
    borderWidth: 2,
    width: 350,
    height: 50,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    borderRadius: 10,

  },
  LoginText: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },

});
export default LoginPage;