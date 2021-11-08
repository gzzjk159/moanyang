import 'react-native-gesture-handler'
import * as React from 'react';
import{
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ToastAndroid,
  Alert,
} from 'react-native';
import { Avatar } from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';
import styled from 'styled-components';

const Container = styled.SafeAreaView`
    flex : 1;
`;

export default function Profile(){
    const [pic, Setpic] = React.useState('');

    const setToastMsg = msg => {
        ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER)
    };

    const uploadImage = () => {
        let options = {
            mediaType : 'photo',
            quality : 1,
            includeBase64 : true,
        };

        launchImageLibrary(options, response => {
            if(response.didCancel){
                setToastMsg('Cancelled image selection');
            }
            else if((response.errorCode == 'permission')){
                setToastMsg('permision not satisfied');
            }
            else if((response.errorCode == 'others')){
                setToastMsg(response.errorMessage);
            }
            else if(response.assets[0].fileSize > 2097152){
                Alert.alert(
                    'Maximum image size exceeded',
                    'Please choose image under 2MB'
                    [{text: 'OK'}],    
                );
            }
            else{
                Setpic(response.assets[0].base64);
            }
        });
    }
    const removeImage = () => {
        Setpic('');
        setToastMsg('Image removed');
    }

    return(
        <Container>
            <View>
                <Avatar.Image
                    size= {150}
                    source={{ uri : 'data:image/png;base64,' + pic}}
                />
            </View>
            <View>
                <TouchableOpacity activeOpacity={0.5} onPress={ ()=> uploadImage() }>
                    <Text>
                        Upload Image
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} onPress={ ()=> removeImage() }>
                    <Text>
                        Remove Image
                    </Text>
                </TouchableOpacity>
            </View>
        </Container>
    );
}
const styles = StyleSheet.create({

});