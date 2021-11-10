import 'react-native-gesture-handler'
import * as React from 'react';
import{
  Text,
} from 'react-native';
import styled from 'styled-components';
const Container = styled.SafeAreaView`
    flex : 1;
`;
const Scroll = styled.ScrollView`
`;
export default function Competition(){
    return(
        <Container>
            <Scroll>
                <Text>
                    Competition
                </Text>
            </Scroll>
        </Container>
    )
}