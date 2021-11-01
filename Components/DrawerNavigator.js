import React, {useState} from "react";
import { Image, TextInput, View, StyleSheet, Text } from "react-native";
import { 
    createDrawerNavigator,
    tabBarLabel, 
    DrawerContentScrollView, 
    DrawerHeaderProps,
    DrawerItem,
    DrawerItemList,
    DrawerContentOptions,
    DrawerNavigationProp,
} from "@react-navigation/drawer";
import MyTalk from "../Screen/MyTalk";
import Profile from "../Screen/Profile";
import Setting from "../Screen/Setting";
import HomeScreen from "../Screen/HomeScreen";
import { DrawerContent } from "./DrawerContent";
import Icon from 'react-native-vector-icons/MaterialIcons'
const Drawer = createDrawerNavigator();
import styled from 'styled-components/native';

const SearchBarWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #efefef;
  border-radius: 4px;
  padding: 10px 14px 10px 12px;
  margin: 0px 20px;
  display: flex;
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

export default function DrawerNavigator() {
    const [value, setValue] = useState('');
  return (
    <Drawer.Navigator screenOptions={{
        headerStyle : {
            backgroundColor: '#313A96'
        },
        headerTintColor: '#fff',
        headerTitelStyle: {
            fontWeight: 'bold'
            
        },
        headerTitle: () => (
            <View style={styles.row}>
                <Text style = {styles.center}>모아냥</Text>
                <Image style={{ width : 50 ,height: 50 }} source={require('../image/moanyang.png')}/>
                <SearchBarWrapper>
                    <SearchIcon source={require('../image/searchImage.png')} />
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
            </View>
        ),
    }}>
        <Drawer.Screen 
            name="모아냥" 
            component={HomeScreen} 
            options={{
                drawerLabel: 'HOME',
            }} 
        />
        <Drawer.Screen 
            name="MY TALK" 
            component={MyTalk} 
            // options={{drawerLabel: 'ABOUT'}} 
        />
        <Drawer.Screen 
            name="프로필" 
            component={Profile}
            // options={{drawerLabel: 'ABOUT'}} 
        />
        <Drawer.Screen 
            name="설정" 
            component={Setting} 
            // options={{drawerLabel: 'ABOUT'}} 
        />
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
    row : {
        flexDirection : 'row',
    },
    center : {
        fontSize : 15,
        fontWeight : 'bold',
        marginTop : 10,
        alignItems : 'flex-start',
    },
  });