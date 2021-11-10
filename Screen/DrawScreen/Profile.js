import 'react-native-gesture-handler'
import * as React from 'react';
import{
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Alert,
  TextInput,
} from 'react-native';
import { Avatar } from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';
import styled from 'styled-components';

const Container = styled.SafeAreaView`
    flex : 1;
`;
const ProfileImage = styled.View``;
const ProfileText = styled.View``;
const Background = styled.View`
    margin : 10px;
    background-color : rgba(255, 255, 128, .3);
    flex : 1;
`;
const Row = styled.View`
    flex-direction : row;
`;
const Column = styled.View`
    flex-direction : column;
`;
const marginImage = styled.View`
    margin : 3px;
`;
export default function Profile(){
    //프로필 사진 바꾸기
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
                setToastMsg('이미지 변경 완료');
            }
        });
    }
    const removeImage = () => {
        Setpic('');
        setToastMsg('이미지 제거');
    }
    // 자기 소개서 바꾸기

    return(
        <Container>
            <Background>
                {/* 이미지 바꾸기 */}
                <Row>
                    <ProfileImage style={styles.marginten}>
                        {   pic === "" ?(
                            <Avatar.Image
                            size = {150}
                            source = { require('../../assets/image/moanyang.png') }
                            />
                        ):
                        (
                        <View>
                            <Avatar.Image
                                size= {150}
                                source={{ uri : 'data:image/png;base64,' + pic}}
                            />
                        </View>
                        )}
                        <Row>
                            <TouchableOpacity style = {styles.buttonSize} activeOpacity={0.5} onPress={ ()=> uploadImage() }>
                                <Text>사진 변경</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.buttonSize} activeOpacity={0.5} onPress={ ()=> removeImage() }>
                                <Text>사진 제거</Text>
                            </TouchableOpacity>
                        </Row>
                    </ProfileImage>
                </Row>
                {/* 텍스트 바꾸기 */}
                <ProfileText style = {styles.profiletext}>
                    <TextInput
                        onChangeText={ () => {}}
                        placeholder="자기를 소개하는 말을 적어보세요"
                        multiline = {true}
                    />
                    <TouchableOpacity style= {styles.buttonCenter} activeOpacity={0.5} onPress={ () =>{} }>
                            <Text>저장</Text>
                    </TouchableOpacity>
                </ProfileText>
            </Background>
        </Container>
    );
}
const styles = StyleSheet.create({
    buttonSize : {
        flex : 1,
        width : 50,
        justifyContent : 'center',
        alignItems : 'center',
        padding : 5,
    },
    marginten : {
        margin : 10,
    },
    buttonCenter : {
        justifyContent : 'flex-end',
        alignItems : 'center',
        flex : 1
    },
    profiletext : {
        flex : 1,
        borderWidth : 2,
        borderColor : '#d9d9d9',
        marginLeft : 10,
        marginRight : 10,
        marginBottom : 10,
    },
});