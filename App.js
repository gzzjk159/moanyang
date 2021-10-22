/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react';
import React, { Component } from 'react';

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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.hello}>
        <Test1/>
        <Test2/>
        <Test3/>
        </View>
    </SafeAreaView>
  );
};
class Test1 extends Component {
  render() {
    return (
      <View>
        <Text>test1 실험 중이에요</Text>
        </View>
    );
  };
}
class Test2 extends Component {
  render() {
    return (
      <View>
        <Text>test2 실험 중이에요</Text>
        </View>
    );
  };
}
class Test3 extends Component {
  render() {
    return (
      <View>
        <Text style={styles.hello}>chuu is very cute</Text>
        <Text style={styles.hello}>testing</Text>
        </View>
    );
  };
}
const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
  },
  hello : {
    color : 'red',
  },
  navBar : {
    height : 60,
    backgroundColor : '#FF6E40',
    justifyContent : 'center',
    alignItems : 'center',
  },
  navBarText : {
    fontSize : 20,
    color : 'white'
  },
});

export default App;