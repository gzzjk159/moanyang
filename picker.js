import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';

class PickerComponent extends Component {
    state ={
        delabel: 'value',
    }
    render() {
      return (
        <View style={styles.container}>
          <Picker style={{height: 50, width: 200}}
              selectedValue={this.state.delabel}
              onValueChange={(val, idx) => this.setState({delabel: val})}
              >
            <Picker.Item label="선택하세요" value={'value'}/>
            <Picker.Item label="비교과" value={'Non'} />
            <Picker.Item label="공모전" value={'Comp'} />
            <Picker.Item label="대외활동" value={'Out'} />
          </Picker>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      
      
      alignItems: 'center',
    },
  });
  
  export default PickerComponent;