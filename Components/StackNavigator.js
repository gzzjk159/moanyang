import 'react-native-gesture-handler'
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SettingHome from '../Screen/Settings/SettingHome';
// 계정
import SignUp from '../Screen/Settings/Account/SignUp';
import Logout from '../Screen/Settings/Account/Logout';
import Withdrawal from '../Screen/Settings/Account/Withdrawal';
// 앱 설정
import NotificationSetting from '../Screen/Settings/AppSetting/NotificationSetting';
import ChatSetting from '../Screen/Settings/AppSetting/ChatSetting';
import ClearCache from '../Screen/Settings/AppSetting/ClearCache';
// 앱 정보
import AppVersion from '../Screen/Settings/AppInformation/AppVersion';
import OpenSourceLicense from '../Screen/Settings/AppInformation/OpenSourceLicense';
import PrivacyPolicy from '../Screen/Settings/AppInformation/PrivacyPolicy';
import Notice from '../Screen/Settings/AppInformation/Notice';
import UseRule from '../Screen/Settings/AppInformation/UseRule';
import Question from '../Screen/Settings/AppInformation/Question';
import TermService from '../Screen/Settings/AppInformation/TermsService';
// 기타
import DarkLightMode from '../Screen/Settings/Etc/DarkLightMode';
import InfoConsentSetting from '../Screen/Settings/Etc/InfoConsentSetting';

const Stack = createStackNavigator();

export default function StackNavigator({navigation}){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name = "SettingHome"
                component = {SettingHome}
                options={{
                    headerShown : false,
                    // title : '설정',
                    // headerTintColor : "#313A96",
                    // headerTitleStyle : {
                    //     fontWeight : 'bold'
                    // },
                    // headerTitleAlign : 'center'
                }} 
            />

            {/* 계정  */}
            <Stack.Screen
                name = "SignUp"
                component = {SignUp}
                options={{
                    title : '회원 가입',
                    headerTintColor : "#313A96",
                    headerTitleStyle : {
                        fontWeight : 'bold'
                    },
                    headerTitleAlign : 'center',
                }} 
            />
            <Stack.Screen
                name = "Withdrawal"
                component = {Withdrawal}
                options={{
                    title : '회원 탈퇴',
                    headerTintColor : "#313A96",
                    headerTitleStyle : {
                        fontWeight : 'bold'
                    },
                    headerTitleAlign : 'center',
                }} 
            />
            <Stack.Screen
                name = "Logout"
                component = {Logout}
                options={{
                    title : '로그아웃',
                    headerTintColor : "#313A96",
                    headerTitleStyle : {
                        fontWeight : 'bold'
                    },
                    headerTitleAlign : 'center',
                }} 
            />

            {/* 앱 설정 */}
            <Stack.Screen
                name = "ChatSetting"
                component = {ChatSetting}
                options={{
                    title : '채팅 설정',
                    headerTintColor : "#313A96",
                    headerTitleStyle : {
                        fontWeight : 'bold'
                    },
                    headerTitleAlign : 'center',
                }} 
            />
            <Stack.Screen
                name = "NotificationSetting"
                component = {NotificationSetting}
                options={{
                    title : '알림 설정',
                    headerTintColor : "#313A96",
                    headerTitleStyle : {
                        fontWeight : 'bold'
                    },
                    headerTitleAlign : 'center',
                }} 
            />
            <Stack.Screen
                name = "ClearCache"
                component = {ClearCache}
                options={{
                    title : '캐시 삭제',
                    headerTintColor : "#313A96",
                    headerTitleStyle : {
                        fontWeight : 'bold'
                    },
                    headerTitleAlign : 'center',
                }} 
            />

            {/* 앱 정보 */}
            <Stack.Screen
                name = "AppVersion"
                component = {AppVersion}
                options={{
                    title : '앱 버젼',
                    headerTintColor : "#313A96",
                    headerTitleStyle : {
                        fontWeight : 'bold'
                    },
                    headerTitleAlign : 'center',
                }} 
            />
            <Stack.Screen
                name = "Question"
                component = {Question}
                options={{
                    title : '문의하기',
                    headerTintColor : "#313A96",
                    headerTitleStyle : {
                        fontWeight : 'bold'
                    },
                    headerTitleAlign : 'center',
                }} 
            />
            <Stack.Screen
                name = "Notice"
                component = {Notice}
                options={{
                    title : '공지사항',
                    headerTintColor : "#313A96",
                    headerTitleStyle : {
                        fontWeight : 'bold'
                    },
                    headerTitleAlign : 'center',
                }} 
            />
            <Stack.Screen
                name = "TermService"
                component = {TermService}
                options={{
                    title : '서비스 이용약관',
                    headerTintColor : "#313A96",
                    headerTitleStyle : {
                        fontWeight : 'bold'
                    },
                    headerTitleAlign : 'center',
                }} 
            />
            <Stack.Screen
                name = "UseRule"
                component = {UseRule}
                options={{
                    title : '커뮤니티 이용규칙',
                    headerTintColor : "#313A96",
                    headerTitleStyle : {
                        fontWeight : 'bold'
                    },
                    headerTitleAlign : 'center',
                }} 
            />
            <Stack.Screen
                name = "PrivacyPolicy"
                component = {PrivacyPolicy}
                options={{
                    title : '개인정보 처리방침',
                    headerTintColor : "#313A96",
                    headerTitleStyle : {
                        fontWeight : 'bold'
                    },
                    headerTitleAlign : 'center',
                }} 
            />
            <Stack.Screen
                name = "OpenSourceLicense"
                component = {OpenSourceLicense}
                options={{
                    title : '오픈소스 라이센스',
                    headerTintColor : "#313A96",
                    headerTitleStyle : {
                        fontWeight : 'bold'
                    },
                    headerTitleAlign : 'center',
                }} 
            />

            {/* 기타 Etc */}
            <Stack.Screen
                name = "DarkLightMode"
                component = {DarkLightMode}
                options={{
                    title : '라이트/다크 모드',
                    headerTintColor : "#313A96",
                    headerTitleStyle : {
                        fontWeight : 'bold'
                    },
                    headerTitleAlign : 'center',
                }} 
            />
            <Stack.Screen
                name = "InfoConsentSetting"
                component = {InfoConsentSetting}
                options={{
                    title : '정보 동의 설정',
                    headerTintColor : "#313A96",
                    headerTitleStyle : {
                        fontWeight : 'bold'
                    },
                    headerTitleAlign : 'center',
                }} 
            />
        </Stack.Navigator>
    );
}


// const styles = StyleSheet.create({
//     center : {
//         justifyContent : 'center',
//         alignItems : 'center',
//     },
//   });