import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text } from "react-native";

const Tab = createMaterialTopTabNavigator();

export default function Toptap() {
    return (
        <Tab.Navigator>
            <Tab.Screen name = "non-discipline" component = {HomeScreen}/>
            <Tab.Screen name = "competition" component = {non-disciplineScreen}/>
            <Tab.Screen name = "outdoor-activities" component = {outdoor-activitiesScreen}/>
            <Tab.Screen name = "mytalktalk" component = {mytalktalkScreen}/>
        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});