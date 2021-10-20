/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
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
    <View style = {styles.container}>
<<<<<<< HEAD
      <Text style = {styles.hello}>저희 이제 능숙해요 </Text>
=======
      <Text style = {styles.hello}>chuu is very cute</Text>
      <Text style = {styles.hello}>testing</Text>
>>>>>>> e1b4ae8358b8932745d2ecd820896478874b9aa6
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
  },
  hello : {
    color : 'red',
  }
});

export default App;