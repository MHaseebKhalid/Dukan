import React from 'react';
import {View,Text,TouchableOpacity,Image,ActivityIndicator} from 'react-native';
import {styles} from './styles'

export const CustomButton=(props)=>{
    let {onPress,imgUri,style,iStyle,loading,loaderColor='#34aeff'}=props
    return(
        <TouchableOpacity onPress={onPress} style={[styles.buttonStyle,style]}>
            {
                loading?
                <ActivityIndicator size="large" color={loaderColor} />
                :
            <Image source={imgUri} style={[styles.iconStyle,iStyle]}/>
            }
        </TouchableOpacity>
    )
}