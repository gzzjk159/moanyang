import * as React from 'react';
import { Text, } from 'react-native';
import styled from 'styled-components';
const Container = styled.SafeAreaView`
    flex : 1;
`;
const Mt = styled.Text`
`;
export default function Notice(){
    return(
        <Container>
            <Mt>
                Profile
            </Mt>
        </Container>
    )
}