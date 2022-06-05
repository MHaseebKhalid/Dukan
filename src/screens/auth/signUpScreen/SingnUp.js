/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import { View, Text, TouchableOpacity, ScrollView,Image} from 'react-native'

import styles from './styles'

import { TextInput } from 'react-native-paper';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

  import {images} from '../../../assets/images'

  import { useDispatch } from 'react-redux';

  import {registerUser} from '../../../redux/authSlice/authSlice'



export const SignUp = (props) => {
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();

    return(
        <View style={styles.mainContainer}>
            <TouchableOpacity style={{marginTop: hp(1)}} onPress={() => props.navigation.goBack()}>
                

                <Image source={images.arrow} resizeMode="contain" style={{height:22,width:22,tintColor:'white'}}/>
            </TouchableOpacity>
            <View style={styles.topSection}>
                <Text style={styles.heading}>Create Web Store</Text>
                <Text style={styles.text}>Enter your details to create web store</Text>
            </View>
            <View style={styles.mainSection}>
            <View style={{marginTop: hp(1)}}>
                    <TextInput
                        label="Full Name"
                        value={name}
                        onChangeText={text => setName(text)}
                        mode={'outlined'}
                        activeOutlineColor={'#fff'}
                        outlineColor={'#fff'}
                        style={{fontSize: 13, backgroundColor: '#416eb2', color: '#fff'}}
                        theme={{ colors: { placeholder: '#fff', text: '#fff', primary: 'red',} }}
                        dense={true}
                    />
                </View>
            <View style={{marginTop: hp(2)}}>
                    <TextInput
                        label="Phone Number"
                        value={phone}
                        onChangeText={text => setPhone(text)}
                        mode={'outlined'}
                        activeOutlineColor={'#fff'}
                        outlineColor={'#fff'}
                        style={{fontSize: 13, backgroundColor: '#416eb2'}}
                        theme={{ colors: { placeholder: '#fff', text: '#fff', primary: 'red',} }}
                        dense={true}
                    />
                </View>
            <View style={{marginTop: hp(2)}}>
                    <TextInput
                        label="Email"
                        onFocus={()=>{}}
                        value={email}
                        onChangeText={text => setEmail(text)}
                        mode={'outlined'}
                        activeOutlineColor={'#fff'}
                        outlineColor={'#fff'}
                        style={{fontSize: 13, backgroundColor: '#416eb2'}}
                        theme={{ colors: { placeholder: '#fff', text: '#fff', primary: 'red',} }}
                        dense={true}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={() =>{
                    let body={
                        name:name,
                        email:email,
                        number:phone,
                    }
                    dispatch(registerUser(body)).then(()=>{
                        props.navigation.navigate("SignIn")
                    })
                    }}>
                    <Text style={styles.btnText}>Continue</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}