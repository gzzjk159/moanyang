import 'react-native-gesture-handler'
import * as React from 'react';
import TopTapNavigator from '../../Components/TopTapNavigator';
import LoginNavigator from '../../Components/LoginNavigator';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginNav"
          component={LoginNavigator}
          options={{
            headerShown: false,
          }}
        />

        {/* <TopTapNavigator/>  */}
      </Stack.Navigator>
    </>
    // <LoginNavigator/>
    /* <TopTapNavigator/> */

  );
};