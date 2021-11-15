import 'react-native-gesture-handler'
import * as React from 'react';
import TopTapNavigator from './TopTapNavigator';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function Nonhome() {
    return (
        <>
            {/* <Stack.Navigator>
                <TopTapNavigator />
            </Stack.Navigator> */}
            <TopTapNavigator />
        </>
    );
};