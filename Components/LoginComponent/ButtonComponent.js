import React, { Component } from "react";
import {
    TouchableOpacity,
    View,
    StyleSheet,
    Text,
} from 'react-native';

export default function ButtomComponent(){
    const { title, onPress } = this.props;
    return(
        <TouchableOpacity onPress={() => onPress()} style={styles.button}>
            <View style={styles.mainContainer}>
                <Text style={styles.textStyle}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button : {
        justifyContent : 'center',
        alignItems: 'center',
        width : '100%',
    },
    mainContainer : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 5,
        height : 50,
        marginBottom : 10,
        width: '85%',
        paddingHorizontal : 6,
        backgroundColor : '#d9d9d9',
        margin : 10,
    },
    textStyle : {
        fontSize : 18,
        fontWeight : 'bold',
    }
});