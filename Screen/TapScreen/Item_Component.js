
import 'react-native-gesture-handler'
import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
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
   
    TouchableWithoutFeedback

} from 'react-native';
import styled from 'styled-components';
import FastImage from 'react-native-fast-image';
import ImageModal from 'react-native-image-modal';

const Scroll = styled.ScrollView``;

function Item_Component({ item }) {

    return (
        <Scroll>
        <View >

            <View style={{ flex: 1, }}>
                <View style={{ flex: 1.7, }}>
                    <ImageModal
                        style={styles.ImgModal}
                        source={{ uri: `${item.image}` }} />
                </View>
                <View style={{ flex: 1, }}>
                    <View style={{ flex: 1,  flexDirection: 'row', flexWrap: "wrap" }}>
                        <Text numberOfLines={2} style={{ flex: 1, fontSize: 15, fontWeight: 'bold', textAlign: "center", textAlignVertical: "center", marginLeft: 10, marginRight: 10, }}>
                            {item.name}
                        </Text>

                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', }}>
                        <View style={{ flex: 1, flexDirection: 'column', marginLeft: 10, }}>
                            <Text style={styles.dday}> D - {item.day} </Text>
                            <Text style={styles.see}> 조회수: {item.see}  </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', }}>
                            <TouchableOpacity style={styles.informationcover}>
                                <View>

                                    <Text style={styles.information}>
                                        정보
                                    </Text>

                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.talkcover}>
                                <View>
                                    <Text style={styles.talktalk}>
                                        톡톡
                                    </Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>

                </View>
            </View>
        </View>
        </Scroll>

    );
}

export default Item_Component;

const styles = StyleSheet.create({
    HotNonDiscipline: { // 인기 비교과 - 글자
        fontWeight: 'bold',
        fontSize: 23,
        padding: 10,
        marginTop: 5,
    },
    magam: {
        fontWeight: 'bold',
        fontSize: 23,
        padding: 10,
    },
    ImgModal: {
        swipeToDismiss: false,
        width: 180,
        height: 180,
        resizeMode: "contain",
        marginTop: 5,
        marginLeft: 8,
        marginRight: 5,
        imageBackgroundColor: "#000000",
    },
    ImgModalcontent: {
        height: 150,
        width: 140,
        marginTop: 2,
        marginLeft: 5,
        marginRight: 5,
        resizeMode: "stretch",
    },

    ImageContent: {
        height: 180,
        width: 180,
        marginTop: 5,
        marginLeft: 8,
        marginRight: 5,
        resizeMode: "stretch",
    },
    ImageContentContain: {
        height: 130,
        width: 140,
        marginTop: 5,
        marginLeft: 8,
        marginRight: 5,
        resizeMode: "stretch",
    },
    dday: {
        flex: 1,
        fontSize: 15,
    },
    see: {
        flex: 1,
        fontSize: 15,
    },
    informationcover: {
        flex: 1,
        width: 42,
        borderWidth: 2,
        borderRadius: 4,
        padding: 1,
        marginRight: 3,
        borderColor: '#313A96',
        marginBottom: 3,
        justifyContent:'center',
    },
    talkcover: {
        flex: 1,
        width: 42,
        borderColor: '#313A96',
        borderWidth: 2,
        borderRadius: 4,
        padding: 1,
        marginBottom: 3,
        justifyContent:'center',
    },
    information: {
        fontWeight: 'bold',
        fontSize: 15,
        justifyContent:'center',
        textAlign: "center",
        textAlignVertical: "center",
        marginRight: 1,
    },
    talktalk: {
        fontWeight: 'bold',
        fontSize: 15,
        justifyContent:'center',
        textAlign: "center",
        textAlignVertical: "center",
    },
});