// import 'react-native-gesture-handler'
// import * as React from 'react';
// import{
//   StyleSheet,
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import styled from 'styled-components';

// const Container = styled.SafeAreaView`
//     flex : 1;
// `;
// const Settings = styled.ScrollView``;
// const MarginTitle = styled.View`
//     margin : 7px;
// `;
// const MarginBody = styled.View`
//     margin-right : 5px;
//     margin-left : 5px;
// `;
// const MarginTopBottom = styled.View`
//     margin-top : 10px;
//     margin-bottom : 10px;
// `;
// const Row = styled.View`
//     flex-direction : row;`;

// const Column = styled.View`
//     flex-direction : column;`;

// const Profile = styled.View``;
// const AppSetting = styled.View``;
// const Account = styled.View``;
// const AppInformation = styled.View``;
// const Etc = styled.View``;

// export default function Setting(){

//     return (
//         //UI 완성
//         <Container>
//             <Settings>
//                 <Profile style = {styles.gray}>
//                     <MarginTitle>
//                         <Row style = {{justifyContent : 'space-between'}}>
//                             <Text style = {styles.title}>프로필</Text>
//                             <TouchableOpacity activeOpacity={0.5} onPress={()=>{}}>
//                                 <Image style = {styles.settingimage}
//                                     source = {require('../image/setting.png')}
//                                 />
//                             </TouchableOpacity>
//                         </Row>
//                     </MarginTitle>
//                 </Profile>
//                 <Profile>
//                     <MarginBody>
//                         <Row style = {styles.white}>
//                             <View>
//                                 <Image style  = {styles.avatar}
//                                 source = {require('../image/moanyang.png')}
//                                 />
//                             </View>
//                             <Column>
//                                 <Text style = {styles.profiletitle}>학과 : 컴퓨터공학과</Text>
//                                 <Text style = {styles.profiletitle}>이름 : 이주명</Text>
//                                 <Text style = {styles.profiletitle}>자신 있는 분야 : 디자인</Text>
//                             </Column>
//                         </Row>
//                     </MarginBody>
//                 </Profile>

//                 <Account style = {styles.gray}>
//                     <MarginTitle>
//                         <Text style = {styles.title}>계정</Text>
//                     </MarginTitle>
//                 </Account>
//                 <Account>
//                     <MarginBody>
//                         <TouchableOpacity activeOpacity={0.5} onPress={()=>{}}>
//                             <Text style = {styles.border}>
//                                 학교 인증하기
//                             </Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity activeOpacity={0.5} onPress={()=>{}}>
//                             <Text style = {styles.border}>
//                                 프로필 이미지 변경
//                             </Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity activeOpacity={0.5} onPress={()=>{}}>
//                             <Text style = {styles.border}>
//                                 닉네임 변경
//                             </Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity activeOpacity={0.5} onPress={()=>{}}>
//                             <Text style = {styles.border}>
//                                 회원 탈퇴
//                             </Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity activeOpacity={0.5} onPress={()=>{}}>
//                             <Text style = {styles.borderend}>
//                                 로그아웃
//                             </Text>
//                         </TouchableOpacity>
//                     </MarginBody>
//                 </Account>

//                 <AppSetting style={styles.gray}>
//                     <MarginTitle>
//                         <Text style = {styles.title}>앱 설정</Text>
//                     </MarginTitle>
//                 </AppSetting>
//                 <AppSetting>
//                     <MarginBody>
//                         <TouchableOpacity activeOpacity={0.5} onPress={()=>{}}>
//                             <Text style = {styles.border}>
//                                 채팅 설정
//                             </Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity activeOpacity={0.5} onPress={()=>{}}>
//                             <Text style = {styles.border}>
//                                 알림 설정
//                             </Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity activeOpacity={0.5} onPress={()=>{}}>
//                             <Text style = {styles.borderend}>
//                                 캐시 삭제
//                             </Text>
//                         </TouchableOpacity>
//                     </MarginBody>
//                 </AppSetting>

//                 <AppInformation style={styles.gray}>
//                     <MarginTitle>
//                         <Text style = {styles.title}>앱 정보</Text>
//                     </MarginTitle>
//                 </AppInformation>
//                 <AppInformation>
//                     <MarginBody>
//                     <TouchableOpacity activeOpacity={0.5} onPress={()=>{}}>
//                             <Text style = {styles.border}>
//                                 앱 버젼
//                             </Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity activeOpacity={0.5} onPress={()=>{}}>
//                             <Text style = {styles.border}>
//                                 문의하기
//                             </Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity activeOpacity={0.5} onPress={()=>{}}>
//                             <Text style = {styles.border}>
//                                 공지사항
//                             </Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity activeOpacity={0.5} onPress={()=>{}}>
//                             <Text style = {styles.border}>
//                                 서비스 이용약관
//                             </Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity activeOpacity={0.5} onPress={()=>{}}>
//                             <Text style = {styles.border}>
//                                 커뮤니티 이용규칙
//                             </Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity activeOpacity={0.5} onPress={()=>{}}>
//                             <Text style = {styles.border}>
//                                 개인정보 처리방침
//                             </Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity activeOpacity={0.5} onPress={()=>{}}>
//                             <Text style = {styles.borderend}>
//                                 오픈소스 라이센스
//                             </Text>
//                         </TouchableOpacity>
//                     </MarginBody>
//                 </AppInformation>

//                 <Etc style={styles.gray}>
//                     <MarginTitle>
//                         <Text style = {styles.title}>기타</Text>
//                     </MarginTitle>
//                 </Etc>
//                 <Etc>
//                     <MarginBody>
//                         <TouchableOpacity activeOpacity={0.5} onPress={()=>{}}>
//                             <Text style = {styles.border}>
//                                 정보 동의 설정
//                             </Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity activeOpacity={0.5} onPress={()=>{}}>
//                             <Text style = {styles.borderend}>
//                                 라이트/다크 모드
//                             </Text>
//                         </TouchableOpacity>
//                     </MarginBody>
//                 </Etc>

//             </Settings>
//         </Container>
//     );
// }
      
// const styles = StyleSheet.create({
//     avatar : { 
//         margin : 5,
//         width : 100,
//         height : 100,
//         borderRadius : 25,
//     },
//     settingimage : {
//         width : 25,
//         height : 25,
//     },
//     title : {
//         fontSize : 20,
//         fontWeight : 'bold',
//     },
//     profiletitle : {
//         flex : 1,
//         margin : 5,
//         padding : 3,
//     },
//     gray : {
//         backgroundColor : '#d9d9d9',
//     },
//     white : {
//         backgroundColor : '#ffffff',
//     },
//     border : {
//         borderBottomColor : '#0f0f0f',
//         borderBottomWidth : 0.5,
//         padding : 3,
//     },
//     borderend : {
//         padding : 3,
//     },
//     center : {
//         justifyContent : 'center',
//         alignItems : 'center',
//     },
// });

import 'react-native-gesture-handler'
import * as React from 'react';
import{
  StyleSheet,
} from 'react-native';
import StackNavigator from '../../Components/StackNavigator';

export default function Setting(){
    return (
        <>
            <StackNavigator/>
        </>
    );
}