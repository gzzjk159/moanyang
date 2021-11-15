import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import DrawerNavigator from './Components/DrawerNavigator';
import {createStore} from 'redux';
import rootReducer from './redux/reducer/RootReducer';
import { Provider } from 'react-redux';
// import createSagaMiddleWare from "redux-saga";
// import rootSaga from './redux/saga/rootSaga';


export default function App() {
  const Container = styled.SafeAreaView`
  flex: 1;
`;
  // const sagaMiddleWare =  createSagaMiddleWare();//
  const store = createStore(rootReducer);
  // sagaMiddleWare.run(rootSaga);


  return (
    <Container>
      <Provider store={store}>
        <StatusBar animated={true} backgroundColor="#000000" />
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </Provider>
    </Container>
  );
}

// const styles = StyleSheet.create({
//   blue : {
//      backgroundColor : '#313A96',
//   },
//   row : {
//     flexDirection : 'row',
//   },
//   searchImage : {
//     width : 50,
//     height : 50,
//   },
//   myTalkImage : {
//     width : 50,
//     height : 50,
//   },
// });
