import 'react-native-gesture-handler'
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './TopTapNavigator';

import TopTapNavigator from './TopTapNavigator';
import DrawerNavi from './DrawerNavigator';
const Stack = createStackNavigator();

export default function TopTab({navigation}){
    return (
        <Stack.Navigator>
            
            <Stack.Screen
                name = "Drawer"
                component = {DrawerNavi}
                options={{
                headerShown : false,   
            }}
            />
            
        </Stack.Navigator>
        );
}
