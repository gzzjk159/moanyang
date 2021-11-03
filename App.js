import 'react-native-gesture-handler'
import * as React from 'react';
import {NavigationContainer, useNavigation } from '@react-navigation/native';
import DrawerNavigator from './Components/DrawerNavigator';
import{
  StyleSheet,
} from 'react-native';
import styled from 'styled-components';

//const Stack = createStackNavigator();
//component를 꾸밀때 쓰는 방법
/* 
const name = stled.(component)`
  자바스크립트 문법
`;
*/
// const Row = styled.View`
//   flex-direction : row;
// `;
//변수 선언
//let numbers = [];

//_.times( 45, n => numbers.push( n + 1 ) );
//numbers = _.shuffle( numbers );

const Container = styled.SafeAreaView`
  flex : 1;
`;
const Row = styled.View`
  flex-direction : row;
`;


// const Tab = createMaterialTopTabNavigator();

// function Tabs () {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen 
//         name = "비교과" 
//         component = {NonDiscipline}
//       />
//       <Tab.Screen 
//         name = "공모전" 
//         component = {Competition}
//       />
//       <Tab.Screen 
//         name = "대외활동" 
//         component = {OutdoorActivities}
//         />
//       <Tab.Screen 
//         name = "Talks" 
//         component = {Talks}
//         />
//     </Tab.Navigator>
//   );
// };

// function Top (){
//   return(
//     <>
//     <Row>
//       <TouchableHighlight onPress = { () => {} }>
//         <Image
//           source = { require('./image/ayu3.png') }
//         />
//       </TouchableHighlight>
//       <TouchableHighlight onPress = { () => {} }>
//         <Image
//           source = { require('./image/ayu3')}
//         />
//       </TouchableHighlight>
//     </Row>
//     </>
//   )
// }

export default function App () {
  return (
      <Container>
        <NavigationContainer>
          <DrawerNavigator/>
        </NavigationContainer>
      </Container>
  )
}

// const styles = StyleSheet.create({
//   blue : {
//      backgroundColor : '#313A96',
//   },
// });