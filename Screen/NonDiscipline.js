import 'react-native-gesture-handler'
import * as React from 'react';
import {NavigationContainer, useNavigation } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import{
  Button,
  Dimensions,
  StyleSheet,
  SafeAreaView, 
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  Touchable,
  StatusBar,
} from 'react-native';
// import _ from 'lodash';
import styled from 'styled-components';
const Container = styled.SafeAreaView`
`;
const Scroll = styled.ScrollView`
`;
export default function NonDiscipline(){
    return(
        <Container>
            <Scroll>
                <Text style={styles.HotNonDiscipline}>
                    인기 비교과
                </Text>

                <View>
                    <View style ={{ height: 300, backgroundColor: 'red', flexDirection: 'row'}}>
                        <View style = {{ flex: 1, backgroundColor: 'gray'}}>
                            <View style = {{ backgroundColor: 'red' , flex: 1.7}}>

                            <Image style = {{height: 170, width: 170, marginLeft: 13, marginTop: 10,}} 
                            source ={require('../image/Sample1.png')}/>

                            </View>
                            <View style = {{backgroundColor: 'yellow', flex: 1}}>
                                <View>
                                    <View style = {{height: 50, }}>
                                        <Text style= {{fontWeight: 'bold', fontSize: 19}}>
                                            [일자리] 공연예술단체 설립 및 운영</Text>
                                    </View>
                                    <View style = {{flexDirection: 'row'}}>
                                        <View style = {{height: 50, width: 100,}}>
                                            <Text>가보자</Text>
                                        </View>

                                        <View>
                                            <Text>보고자</Text>
                                        </View>
                                    </View>

                                </View>

                            </View>
                
                        </View>
                        <View style = {{ flex: 1, backgroundColor: 'blue'}}>
                            <View style = {{ backgroundColor: 'purple' , flex: 1.7}}>  

                            <Image style = {{height: 170, width: 170, marginLeft: 13, marginTop: 10,}} 
                            source ={require('../image/Sample1.png')}/>
                            </View
                            >
                            <View style = {{backgroundColor: 'orange', flex: 1}}>
                            <View>
                                    <View style = {{height: 50, }}>
                                        <Text style= {{fontWeight: 'bold', fontSize: 19}}>
                                            [일자리] 공연예술단체 설립 및 운영</Text>
                                    </View>
                                    <View style = {{flexDirection: 'row'}}>
                                        <View style = {{height: 50, width: 100,}}>
                                            <Text>가보자</Text>
                                        </View>

                                        <View>
                                            <Text>보고자</Text>
                                        </View>
                                    </View>

                                </View>
                                
                            </View>
                        </View>

                    </View>
                        <Text style={styles.HotNonDiscipline}>
                        마감 임박
                        </Text>
                    <View style = { {height: 300, backgroundColor: 'green', flexDirection: 'row'}}>
                    <View style = {{ flex: 1, backgroundColor: 'gray'}}>
                            <View style = {{ backgroundColor: 'red' , flex: 1.7}}>

                            <Image style = {{height: 170, width: 170, marginLeft: 13, marginTop: 10,}} 
                            source ={require('../image/Sample1.png')}/>

                            </View>
                            <View style = {{backgroundColor: 'yellow', flex: 1}}>
                                <View>
                                    <View style = {{height: 50, }}>
                                        <Text style= {{fontWeight: 'bold', fontSize: 19}}>
                                            [일자리] 공연예술단체 설립 및 운영</Text>
                                    </View>
                                    <View style = {{flexDirection: 'row'}}>
                                        <View style = {{height: 50, width: 100,}}>
                                            <Text>가보자</Text>
                                        </View>

                                        <View>
                                            <Text>보고자</Text>
                                        </View>
                                    </View>

                                </View>

                            </View>
                
                        </View>
                        <View style = {{ flex: 1, backgroundColor: 'blue'}}>
                            <View style = {{ backgroundColor: 'purple' , flex: 1.7}}>  

                            <Image style = {{height: 170, width: 170, marginLeft: 13, marginTop: 10,}} 
                            source ={require('../image/Sample1.png')}/>
                            </View
                            >
                            <View style = {{backgroundColor: 'orange', flex: 1}}>
                            <View>
                                    <View style = {{height: 50, }}>
                                        <Text style= {{fontWeight: 'bold', fontSize: 19}}>
                                            [일자리] 공연예술단체 설립 및 운영</Text>
                                    </View>
                                    <View style = {{flexDirection: 'row'}}>
                                        <View style = {{height: 50, width: 100,}}>
                                            <Text>가보자</Text>
                                        </View>

                                        <View>
                                            <Text>보고자</Text>
                                        </View>
                                    </View>

                                </View>
                                
                            </View>
                        </View>
                    
                        
                    </View>
                        <Text style={styles.HotNonDiscipline}>
                        여기 부터 고쳐주세요
                        </Text>
                    <View style = { {height: 250, backgroundColor: 'blue'}}>
                    
                    
                        
                    </View>


                    
                </View>
            </Scroll>
        </Container>
    )
}

const styles = StyleSheet.create({
    HotNonDiscipline : {
        fontWeight: 'bold',
        fontSize: 23,  
        padding: 10,
        marginLeft: 5,
        marginTop: 5,
    },
    image1: {
        backgroundColor: 'blue',
        widht: 100,
        height: 50,
    },
    hot: {
        flexDirection: 'row',
    }
  });

