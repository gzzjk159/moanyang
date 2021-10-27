import * as React from 'react';
import{
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
} from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

const SearchInput = () => {
  const [text, searchText] = React.useState("");

  export default function Top () {
      return(
      <View>
        <Text style = { styles.moanyang } >모아냥</Text>
        <TouchableHighlight onPress={ () => this.moveToAddNewCustomer() }>
            <Image style = {styles.imagestyle} source={require('moayu/image/moanyang.png')}></Image>
        </TouchableHighlight>
        <TextInput style={styles.search}/>
      </View>
      );
  }
  const styles = StyleSheet.create({
    moanyang : {
      fontSize : 20,
      fontStyle : 'Bold',
    },
    imagestyle : {
      width : 50,
      height : 50,
      borderRadius : 25,
    },
    search : {
      height : 50,
      borderWidth : 0.5,
      padding : 10,
    }
  });
}