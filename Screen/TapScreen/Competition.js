import 'react-native-gesture-handler';
import * as React from 'react';
import {Image, Linking, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
const Container = styled.SafeAreaView`
    flex: 1;
`;
const Scroll = styled.ScrollView`
`;
const Hot_Comp = styled.View`
  background-color : #ffffff;
`; //인기 공모전
const Expiry_Comp = styled.View`
  background-color : #ffffff;
`; //기간 임박 공모전
const Full_Comp = styled.View`
  background-color : #ffffff;
`; //인원 임박 공모전
const All_Comp = styled.View`
  background-color : #ffffff;
`; //전체 공모전
const Row = styled.View`
  flex-direction : row;
`;
const Column = styled.View`
  flex-direction : column;
`;
export default function Competition() {
  //데이터 받아오기
  const data = [
    {
      id : 1,
      type : 3,
      title : '조회수 6',
      image : 'https://ifh.cc/g/QZBTJq.jpg',
      link : 'https://www.sba.seoul.kr/kr/sbcu01s1?bseq=5038090',
      see : '6',
      day : '2021-11-12',
    },
    {
      id : 2,
      type : 3,
      title : '조회수 5',
      image : 'https://ifh.cc/g/QZBTJq.jpg',
      link : 'https://htable.co.kr/article/이벤트/3001/18704/',
      see : '5',
      day : '2021-11-12',
    },
    {
      id : 3,
      type : 3,
      title : '조회수 1',
      image : 'https://ifh.cc/g/QZBTJq.jpg',
      link : 'http://www.kpu.ac.http://t2m.kr/4LLNpkr/gopage/main/gonomalnotice.jsp?siteGubun=1&bbsConfigFK=357&pkid=193142&menuGubun',
      see : '1',
      day : '2021-11-12',
    },
    {
      id : 4,
      type : 2,
      title : '조회수 2',
      image : 'https://ifh.cc/g/QZBTJq.jpg',
      link : 'https://www.sba.seoul.khttps://forms.gle/v9yWJjDB28532PGy7r/kr/sbcu01s1?bseq=5038090',
      see : '2',
      day : '2021-11-01',
    },
    {
      id : 5,
      type : 3,
      title : '조회수 4',
      image : 'https://ifh.cc/g/QZBTJq.jpg',
      link : 'https://www.sba.seoul.kr/kr/sbcu01s1?bseq=5038090',
      see : '4',
      day : '2021-11-10',
    },
    {
      id : 6,
      type : 3,
      title : '조회수 0',
      image : 'https://ifh.cc/g/QZBTJq.jpg',
      link : 'https://www.sba.seoul.kr/kr/sbcu01s1?bseq=5038090',
      see : '0',
      day : '2021-11-12',
    },
  ];
  // const compData = useSelector(state => state.compReducer);
  // React.useEffect(() => {
  //     dispatch(comp_request());
  // }, []);

  //인기 공모전 리스트 만들고 자르기
  const hotdata_list = data.sort((a,b) => a.see.localeCompare(b.see));
  hotdata_list.reverse();
  const hotdata = hotdata_list.slice(0,2);
  //
  const deadlinedata_list = data.sort((a,b) => a.day.localeCompare(b.day));
  const deadlinedata = deadlinedata_list.slice(0,2);
  

  return (
    <Container>
      {/* 스크롤 뷰 */}
      <Scroll>

        {/* 공백 생성 */}
        <View style = {styles.marginTop}>

          {/* 인기 공모전 */}
          <Hot_Comp>
            <View style={styles.title}>
              <Text style={styles.textsize}>인기 공모전</Text>
            </View>
            <View>
              <View style={styles.marginten}>
                <Row>
                  <Image style = {styles.imagesize}
                    source={require('../../back/image/comp01.jpg')}
                  />
                  <Column>
                    <View style={styles.marginleftfive}>
                      <Text>title</Text>
                    </View>
                    <Row>
                      <View>
                        <Text>title</Text>
                      </View>
                      <View>
                        <Text>title</Text>
                      </View>
                      <TouchableOpacity 
                        onPress = { () => {Linking.openURL('http://naver.com')}}>
                        <Image
                        source = {require('../../back/image/comp01.jpg')}
                        style = {{width : 50, height :50}}
                        />
                      </TouchableOpacity>
                    </Row>
                  </Column>
                </Row>
              </View>
            </View>
          </Hot_Comp>

          {/* 인원 마감 임박 */}
          <Full_Comp>

          </Full_Comp>

          {/* 기간 마감 임박 */}
          <Expiry_Comp>
          </Expiry_Comp>

          {/* 전체 공모전 */}
          <All_Comp>

          </All_Comp>
          
        </View>

      </Scroll>

    </Container>
  );
}
const styles = StyleSheet.create({
  marginTop : {
   marginTop : 7, 
  },
  title : {
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#ffffff',
  },
  textsize : {
    fontSize : 25,
    fontWeight : 'bold',
  },
  imagesize : {
    width : 100,
    height :100,
    resizeMode : 'contain',
  },
  marginten : {
    margin : 10,
  },
  marginleftfive:{
    marginLeft : 5,
  },
  flexone : {
    flex : 1,
  }
});