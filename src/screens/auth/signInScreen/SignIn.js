/* eslint-disable space-infix-ops */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import { View, Text, TouchableOpacity} from 'react-native'

import styles from './styles'

import { TextInput } from 'react-native-paper';

import { useDispatch } from 'react-redux';

import {loginUser} from '../../../redux/authSlice/authSlice'

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

export const SignIn = (props) => {
    const [phone, setPhone] = useState('');

    const dispatch = useDispatch();

    return(
        <View style={styles.mainContainer}>
            <View style={styles.topSection}>
                <Text style={styles.heading}>Let's sign you in </Text>
                <Text style={styles.text}>Welcome Back</Text>
                <Text style={styles.text}>You have been missed</Text>
            </View>
            <View style={styles.mainSection}>
            <View style={{marginTop: hp(1)}}>
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
                <TouchableOpacity style={styles.button} onPress={() =>{
                     let body={
                        number:phone,
                    }
                    dispatch(loginUser(body)).then(()=>{
                        props.navigation.navigate('HomeApp');
                    })
                    
                    }}>
                    <Text style={styles.btnText}>Sign In</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomSection}>
                <Text style={styles.bottomText}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
                    <Text style={[styles.bottomText,{fontWeight: '700'}]}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}