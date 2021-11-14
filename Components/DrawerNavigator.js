import React, {useState} from "react";
import { 
    Image,
    View, 
    StyleSheet, 
    TouchableOpacity,
} from "react-native";
import { 
    createDrawerNavigator,
} from "@react-navigation/drawer";

import HomeScreen from "../Screen/DrawScreen/HomeScreen";

import MyTalk from "../Screen/DrawScreen/MyTalk";
import Profile from "../Screen/DrawScreen/Profile";
import Setting from "../Screen/DrawScreen/Setting";
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/core';
import Nonhome from './Nonhome';

const Drawer = createDrawerNavigator();

const SearchBarWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #efefef;
  border-radius: 4px;
  padding: 5px 15px;
  margin-Top: 10px;
  margin-Left: 7px;
`;

const SearchInput = styled.TextInput`
  margin-left: 10px;
  include-font-padding: false;
  padding: 0px;
`;

const SearchIcon = styled.Image`
  width: 18px;
  height: 18px;
`;

export default function DrawerNavigator({navigation}) {
    const [value, setValue] = useState('');
    const navi = useNavigation();
  return (
    <Drawer.Navigator 
    screenOptions={{
        headerStyle : {
            backgroundColor: '#313A96',
        },
        
        headerTintColor: '#fff',
        headerTitelStyle: {
            fontWeight: 'bold',
            
        },
        
        headerTitle: () => (
            <View style={styles.row}>
                <TouchableOpacity onPress={()=> navi.navigate("Moanyang", {HomeScreen})}>
                <Image style={styles.moanyang} source={require('../assets/image/moanyang.png')}/>
                 </TouchableOpacity>   
                <SearchBarWrapper style= {styles.search}>
                    <SearchIcon source={require('../assets/image/searchImage.png')} />
                    <SearchInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={setValue}
                    placeholder="검색어를 입력해 주세요."
                    returnKeyType="search"
                    returnKeyLabel="search"
                    value={value}
                    />
                </SearchBarWrapper>

                <TouchableOpacity onPress={()=> navi.navigate("MY TALK", {MyTalk})}>
                <Image style={styles.message}source={require("../assets/image/message.png")}/>
                </TouchableOpacity>
            </View> 
        ),
    }}>
        <Drawer.Screen
            name="Moanyang" 
            component={Nonhome} 
            options={{
                title : '홈',
            }} 
        />
        <Drawer.Screen 
            name="MY TALK" 
            component={MyTalk} 
            options={{
                title : '마이 톡'
            }} 
        />
        
        
        <Drawer.Screen 
            name="Profile" 
            component={Profile}
            options={{
                title : '프로필'
            }} 
        />
        <Drawer.Screen
            name="Setting" 
            component={Setting} 
            options={{
                title : '설정'
            }} 
        />
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
    row : {
        flexDirection : 'row',
        flex: 1,
    },
    moanyang: {
        marginTop: 5,
        width : 50 ,
        height: 45,
    },
    center : {
        fontSize : 1,
        fontWeight : 'bold',
        marginTop : 13,
    },
    search : {
        width:  200,
        height: 35,  
    },
    message: {
        marginTop: 12,
        marginLeft: 16,
        width: 40,
        height: 35,
    }
  });