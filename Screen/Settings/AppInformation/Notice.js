import * as React from 'react';
import { 
    Text, 
    View,
    StyleSheet,
} from 'react-native';
import styled from 'styled-components';
const Container = styled.SafeAreaView`
    flex : 1;
`;
// 공지사항
export default function Notice(){
    return(
        <Container>
            <View>
                <Text style = {styles.textstyle}> 
                    공지사항은 없습니다.
                </Text>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    textstyle : {
        fontSize : 20 ,
        fontWeight : 'bold',
    },
    center : {
        flex : 1,
    },
});