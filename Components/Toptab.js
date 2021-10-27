import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export default function Toptap() {
    return (
        <Tab.Navigator>
            <Tab.Screen name = "non-discipline" component = {HomeScreen}/>
            <Tab.Screen name = "competition" component = {non-disciplineScreen}/>
        </Tab.Navigator>
    );
}