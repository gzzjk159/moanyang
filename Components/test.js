import { Component } from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    AppRegistry,
  } from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";

export default class Test extends Component{
    render() {
        return(
          <View>
              <Text style = {styles.dark}>
                제발 나와주세요
              </Text>
          </View>
        );
    }
}
const styles = StyleSheet.create({
  dark : {
    color : 'black'
  },
});