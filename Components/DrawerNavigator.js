import React, {useState} from "react";
import { 
    Image,
    View, 
    StyleSheet, 
} from "react-native";
import { 
    createDrawerNavigator,
} from "@react-navigation/drawer";
import MyTalk from "../Screen/MyTalk";
import Profile from "../Screen/Profile";
import Setting from "../Screen/Setting";
import HomeScreen from "../Screen/HomeScreen";
import styled from 'styled-components/native';

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

export default function DrawerNavigator() {
    const [value, setValue] = useState('');
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
                
                <Image style={styles.moanyang} source={require('../image/moanyang.png')}/>
                    
                <SearchBarWrapper style= {styles.search}>
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

                <Image style={styles.message} source={require('../image/message.png')}/>
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
        marginTop: 11,
        marginLeft: 14,
        width: 43,
        height: 37,
    }
  });