import * as React from 'react';
import {
   TextInput, 
   View,
} from 'react-native';
import io from 'socket.io-client';


export default class chatroom extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chaMessage : '',
    };
  }

  componentDidMount(){
   this.socket = io('localhost:3002');
   this.setState({ chaMessage :""});
  }
  render(){
    return(
      <View>
        <TextInput
          style={{height : 40, borderWidth : 2}}
        />
      </View>
    );
  }
}