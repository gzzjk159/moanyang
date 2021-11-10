import 'react-native-gesture-handler'
import * as React from 'react';
import{
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components';
import Profile from '../DrawScreen/Profile';
const Container = styled.SafeAreaView`
    flex : 1;
`;
const Settings = styled.ScrollView``;
const MarginTitle = styled.View`
    margin : 7px;
`;
const MarginBody = styled.View`
    margin-right : 5px;
    margin-left : 5px;
`;
const Row = styled.View`
    flex-direction : row;
`;
const Column = styled.View`
    flex-direction : column;`;
const ProfileSet = styled.View``;
const AppSetting = styled.View``;
const Account = styled.View``;
const AppInformation = styled.View``;
const Etc = styled.View``;

export default function SettingHome({navigation}){
    return (
        //UI 완성
        <Container>
            <Settings>

                {/* 프로필  */}
                <ProfileSet style = {styles.gray}>
                    <MarginTitle>
                        <Row style = {{justifyContent : 'space-between'}}>
                            <Text style = {styles.title}>프로필</Text>
                            <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('Profile', {Profile})}>
                                <Image style = {styles.settingimage}
                                    source = {require('../../assets/image/setting.png')}
                                />
                            </TouchableOpacity>
                        </Row>
                    </MarginTitle>
                </ProfileSet>
                <ProfileSet>
                    <MarginBody>
                        <Row style = {styles.white}>
                            <View>
                                <Image style  = {styles.avatar}
                                source = {require('../../assets/image/moanyang.png')}
                                />
                            </View>
                            <Column>
                                <Text style = {styles.profiletitle}>학과 : 컴퓨터공학과</Text>
                                <Text style = {styles.profiletitle}>이름 : 이주명</Text>
                                <Text style = {styles.profiletitle}>자신 있는 분야 : 디자인</Text>
                            </Column>
                        </Row>
                    </MarginBody>
                </ProfileSet>

                {/* 계정 */}
                <Account style = {styles.gray}>
                    <MarginTitle>
                        <Text style = {styles.title}>계정</Text>
                    </MarginTitle>
                </Account>
                <Account>
                    <MarginBody>
                        <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('SignUp')}>
                            <Text style = {styles.border}>
                                회원 가입
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('Withdrawal')}>
                            <Text style = {styles.border}>
                                회원 탈퇴
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('Logout')}>
                            <Text style = {styles.borderend}>
                                로그아웃
                            </Text>
                        </TouchableOpacity>
                    </MarginBody>
                </Account>

                {/* 앱 세팅 */}
                <AppSetting style={styles.gray}>
                    <MarginTitle>
                        <Text style = {styles.title}>앱 설정</Text>
                    </MarginTitle>
                </AppSetting>
                <AppSetting>
                    <MarginBody>
                        <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('ChatSetting')}>
                            <Text style = {styles.border}>
                                채팅 설정
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('NotificationSetting')}>
                            <Text style = {styles.border}>
                                알림 설정
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('ClearCache')}>
                            <Text style = {styles.borderend}>
                                캐시 삭제
                            </Text>
                        </TouchableOpacity>
                    </MarginBody>
                </AppSetting>

                {/* 앱 정보 */}
                <AppInformation style={styles.gray}>
                    <MarginTitle>
                        <Text style = {styles.title}>앱 정보</Text>
                    </MarginTitle>
                </AppInformation>
                <AppInformation>
                    <MarginBody>
                        <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('AppVersion')}>
                            <Text style = {styles.border}>
                                앱 버젼
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('Question')}>
                            <Text style = {styles.border}>
                                문의하기
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('Notice')}>
                            <Text style = {styles.border}>
                                공지사항
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('TermService')}>
                            <Text style = {styles.border}>
                                서비스 이용약관
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('UseRule')}>
                            <Text style = {styles.border}>
                                커뮤니티 이용규칙
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('PrivacyPolicy')}>
                            <Text style = {styles.border}>
                                개인정보 처리방침
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('OpenSourceLicense')}>
                            <Text style = {styles.borderend}>
                                오픈소스 라이센스
                            </Text>
                        </TouchableOpacity>
                    </MarginBody>
                </AppInformation>

                {/* 기타 */}
                <Etc style={styles.gray}>
                    <MarginTitle>
                        <Text style = {styles.title}>기타</Text>
                    </MarginTitle>
                </Etc>
                <Etc>
                    <MarginBody>
                        <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('InfoConsentSetting')}>
                            <Text style = {styles.border}>
                                정보 동의 설정
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('DarkLightMode')}>
                            <Text style = {styles.borderend}>
                                라이트/다크 모드
                            </Text>
                        </TouchableOpacity>
                    </MarginBody>
                </Etc>

            </Settings>
        </Container>
    );
}
      
const styles = StyleSheet.create({
    avatar : { 
        margin : 5,
        width : 100,
        height : 100,
        borderRadius : 25,
    },
    settingimage : {
        width : 25,
        height : 25,
    },
    title : {
        fontSize : 20,
        fontWeight : 'bold',
    },
    profiletitle : {
        flex : 1,
        margin : 5,
        padding : 3,
    },
    gray : {
        backgroundColor : '#d9d9d9',
    },
    white : {
        backgroundColor : '#ffffff',
    },
    border : {
        borderBottomColor : '#0f0f0f',
        borderBottomWidth : 0.5,
        padding : 3,
    },
    borderend : {
        padding : 3,
    },
    center : {
        justifyContent : 'center',
        alignItems : 'center',
    },
});