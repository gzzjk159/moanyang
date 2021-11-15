// import 'react-native-gesture-handler'
// import * as React from 'react';
// import {NavigationContainer, useNavigation } from '@react-navigation/native';
// //import { createStackNavigator } from '@react-navigation/stack';
// import{
//   Button,
//   Dimensions,
//   StyleSheet,
//   SafeAreaView,
//   View,
//   Text,
//   ScrollView,
//   Image,
//   TextInput,
//   Touchable,
//   StatusBar,
// } from 'react-native';
// // import _ from 'lodash';
// import styled from 'styled-components';
// const Container = styled.SafeAreaView`
//     flex : 1;
// `;
// const OA = styled.Text`
// `;
// export default function OutdoorActivities(){
//     return(
//         <Container>
//             <OA>
//                 OutdoorActivities
//             </OA>
//         </Container>
//     )
// }

import * as React from 'react';
import {TextInput, View} from 'react-native';
import io from 'socket.io-client';

export default class chatroom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: '',
      chatMessages: [],
    };
  }

  componentDidMount() {
    this.socket = io('http://172.16.14.16:3002');
    this.socket.on('chat message', msg => {
      this.setState({chatMessages: [...this.state.chatMessages, msg]});
    });
  }

  submitChatMessage() {
    this.socket.emit('chat message', this.state.chatMessage);
    this.setState({chatMessage: ''});
  }

  render() {
    const chatMessages = this.state.chatMessages.map(chatMessage => (
      <Text key={chatMessage}>{chatMessage}</Text>
    ));
    return (
      <View>
        <TextInput
          style={{height: 40, borderWidth: 2}}
          autoCorrect={false}
          value={this.state.chatMessage}
          onSubmitEditing={() => this.submitChatMessage()}
          onChangeText={chatMessage => {
            this.setState({chatMessages: [...this.state.chatMessages, msg]});
          }}
        />
        {chatMessages}
      </View>
    );
  }
}
