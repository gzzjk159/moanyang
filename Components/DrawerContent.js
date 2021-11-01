import * as React from "react";
import { View, StyleSheet } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
} from 'react-native-paper';
import { Icon } from "react-native-elements/dist/icons/Icon";

export function DrawerContent(props) {
    return(
        <View style = {{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style = {styles.drawerContent}>
                    <View style = {styles.userInfoSection}>
                        <View>
                            <Avatar.Image
                                source = {{
                                    uri : '../image/moanyang.png'
                                }}
                                size = {50}
                            />
                            <View style = {{marginLeft:15,flexDirection: "column"}}>
                                <Title style = {styles.title}>이주명</Title>
                                <Caption style = {styles.caption}>201631029</Caption>
                            </View>
                        </View>
                    </View>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style = {styles.bottomDrawerSection}>
                <DrawerItem
                   icon = { ({color, size}) => (
                        <Icon
                        name = "exit-to-app"
                        color = {color}
                        size = {size}
                        />
                    )}
                    label = "Sign Out"
                    onPress = { () => {} }
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent : {
        felx : 1,
    },
    userInfoSection : {
        paddingLeft : 20,
    },
    title : {
        fontSize : 14,
        marginTop : 3,
        fontWeight : 'bold',
    },
    caption : {
        fontSize : 14,
        lineHeight : 14,
    },
    row : {
        marginTop : 20,
        flexDirection: 'row',
        alignItems : 'center',
    },
    section : {
        flexDirection : 'row',
        alignItems : 'center',
        marginTop : 15,
    },
    paragraph : {
        fontWeight : 'bold',
        marginRight : 3,
    },
    drawerSection : {
        marginTop : 15
    },
    bottomDrawerSection : {
        marginBottom : 15,
        borderTopColor : '#f4f4f4',
        borderTopWidth : 1,
    },
    preference : {
        flexDirection: 'row',
        justifyContent : 'center',
        paddingVertical : 12,
        paddingHorizontal : 16,
    },
})