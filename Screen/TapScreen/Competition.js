import 'react-native-gesture-handler'
import * as React from 'react';
import{
  Text,View,StyleSheet,Image,image,
} from 'react-native';
import styled from 'styled-components';
import { SliderBox } from 'react-native-image-slider-box';


const Container = styled.SafeAreaView`
    flex : 1;
`;
const Scroll = styled.ScrollView`
`;

export default function Competition(){


    return(
        <Container>
            <Scroll>
            <View style={{ flex: 1, backgroundColor: 'yellow', height: 270, }}>
          <SliderBox style={{ width: 200, height: 250, alignItems:'center', alignSelf:'center', resizeMode: 'stretch', marginTop: 10,}}
            
            images={[
              require('../../assets/image/non/non01.jpg'),
              require('../../assets/image/non/non02.png'),
              require('../../assets/image/non/non03.jpg'),
              require('../../assets/image/non/non04.jpg'),
              require('../../assets/image/non/non05.jpg')
            ]}
            
            autoplay
            circleLoop
          />
        </View>
            

                <Text>
                    Competition
                </Text>
        <View>
        <Image style= {{width: 50, height: 50}}
          source={require('../../assets/image/non/non01.jpg')}
        />
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://ifh.cc/g/WJnjPt.jpg'}}
        />
        <Image
          style={{width: 66, height: 58}}
          source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
        />
      </View>
            
       
            </Scroll>
        </Container>
    )
}