import 'react-native-gesture-handler'
import * as React from 'react';
import{
  StyleSheet,
  SafeAreaView, 
  View,
  Text,
  TouchableOpacity,
  onchange,
} from 'react-native';
import styled from 'styled-components';

const Container = styled.SafeAreaView`
    flex : 1;
`;
const Scroll = styled.ScrollView`
`;
const Row = styled.View`
    flex-direction : row;
`;
const Talk = styled.View`
    height : 50px;
    background-color : '#ffffff';
`;

export default function Talks(){
    return(
        <Container style={styles.gray}>
            <Row>
                <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={()=>{}}>
                    <Text>
                        비교과
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={()=>{}}>
                    <Text>
                        공모전
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={()=>{}}>
                    <Text>
                        대외활동
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={()=>{}}>
                    <Text>
                        스터디
                    </Text>
                </TouchableOpacity>
            </Row>
            <Row>
                <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={()=>{}}>
                    <Text>
                        동아리
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={()=>{}}>
                    <Text>
                        버튼
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={()=>{}}>
                    <Text>
                        버튼
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={()=>{}}>
                    <Text>
                        기타
                    </Text>
                </TouchableOpacity>
            </Row>
            <Scroll>
                <Talk>
                    <Text>기능 구현중</Text>
                </Talk>
            </Scroll>
        </Container>
    )
}
const styles = StyleSheet.create({
    row : {
      flexDirection : 'row',
    },
    button : {
      flex : 1,
      height : 30,
      borderWidth : 2,
      borderRadius : 15,
      borderColor : '#313A96',
      marginTop : 5,
      marginLeft : 3,
      marginRight : 3,
      backgroundColor : '#ffffff',
      justifyContent : 'center',
      alignItems : 'center',
    },
    gray : {
        backgroundColor : '#fff'
    }
  });