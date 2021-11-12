import 'react-native-gesture-handler'
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NonDiscipline from '../Screen/TapScreen/NonDiscipline';
import Competition from '../Screen/TapScreen/Competition';
import OutdoorActivities from '../Screen/TapScreen/OutdoorActivities';
import Talks from '../Screen/TapScreen/Talks';

const Tab = createMaterialTopTabNavigator();

export default function Tabs(){
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name = "비교과" 
        component = {NonDiscipline}
      />
      <Tab.Screen 
        name = "공모전" 
        component = {Competition}
      />
     
      <Tab.Screen 
        name = "대외활동" 
        component = {OutdoorActivities}
        />
      <Tab.Screen 
        name = "Talks" 
        component = {Talks}
        />
    </Tab.Navigator>
  );
}