import 'react-native-gesture-handler'
import * as React from "react";
import {
    Text,
    View,
} from "react-native";
// import TextInputComponent from '../../../Components/LoginComponent/TextInputComponent';
// import ButtomComponent from '../../../Components/LoginComponent/ButtonComponent';
// import {SignUpUser} from '../../../Firebase/SignUpUser';
// import { AddUser } from "../../../Firebase/User";
// import Firebase from '../../../Firebase/firebaseConfig';
export default function SignUp(){
    // state = {
    //     name: '',
    //     email: '',
    //     password: '',
    // }
    // SignUPtoFirebase=()=>{
    //     SignUpUser( this.state.email,this.state.password ).
    //         then((res) => {
    //             console.log('res',res);
    //             var userUID = Firebase.auth().currentUser.uid;
    //             AddUser(this.state.name, this.state.email,'',userUID).
    //                 then(()=>{
    //                     alert('Success');
    //                 }).
    //                 catch((error)=> {
    //                     alert(errer);
    //                 })
    //             console.log(userUID)
    //         }).
    //         error((err) => {
    //             alert(err);
    //         })
    // }
    return(
        <View>
            <Text>sdfdfsf</Text>
            {/* <TextInputComponent placehoder="Enter Name" updateFields={(text) => this.setState({ name : text })}/>
            <TextInputComponent placehoder="Enter Email" updateFields={(text) => this.setState({ email : text })}/>
            <TextInputComponent placehoder="Enter Password" updateFields={(text) => this.setState({ password : text })}/>
            <ButtomComponent title = "Sign In" onPress={() => {SignUpUser( this.state.email,this.state.password) }}/> */}
        </View>
    );
}