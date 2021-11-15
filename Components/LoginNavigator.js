import 'react-native-gesture-handler'
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TopTapNavigator from './TopTapNavigator';
import FirstPage from './FirstPage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import indx from './index';

const Stack = createStackNavigator();

export default function StackNavigator({navigation}){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name = "First"
                component = {FirstPage}
                options={{
                    headerShown : false,   
                }} 
            />
            <Stack.Screen
                name = "Login"
                component = {LoginPage}
                options={{
                headerShown : false,   
                }} 
            />
            <Stack.Screen
                name = "Signup"
                component = {SignupPage}
                options={{
                    headerShown : false,   
                }} 
            />
            <Stack.Screen
                name = "index"
                component = {indx}
                options={{
                headerShown : false,   
            }}
            />
            
        </Stack.Navigator>
        );
}
    
