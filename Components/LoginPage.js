
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';


function LoginPage({ navigation}){

 
    return (
      <View style={styles.total}>
        <View style={styles.AppName}>
          <Text style={{ fontSize: 50 }}>
            Hi!
          </Text>
        </View>
        <View style={styles.Inputs}>
          
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

});
export default LoginPage;