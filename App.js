
import 'react-native-gesture-handler'
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import{
  SafeAreaView, 
  View,
  Text,
} from 'react-native';

import { Button } from 'react-native-elements';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen      
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
          />    
          <Stack.Screen name ="Second" component={SecondScreen} options={{title: 'SecondPage'}}/>

         

      </Stack.Navigator>
      </NavigationContainer>);
};

export default App;

function HomeScreen({navigation}){
  return (
    <Button title="Go to Second Page"
      onPress={() => navigation.navigate('Second', {name: 'Parameter_1'})}
      />
  );
}

function SecondScreen({navigation}, param){

  return(

    <SafeAreaView style={{marginTop:50, flex:1}}>
    <View style={{flex:2}}/>
    <View style={{flex:2}}/>
    <View style={{flex:1, justifyContent: 'flex-end'}}>
      <Button title="Back" onPress={()=> navigation.goBack()}/>
    </View>
    </SafeAreaView>

  );
}