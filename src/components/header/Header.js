import React from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';

import {styles} from './styles'
import {images} from '../../assets/images'

export const Header=(props)=>{
    let {title,onPress,navigation}=props
    return(
        <View style={styles.mainContainer}>
            <Text style={styles.headingTextStyle}>{title}</Text>
            <TouchableOpacity onPress={onPress}>
                <Image style={styles.logOutIconStyle} source={images.logOutIcon}/>
            </TouchableOpacity>
        </View>
    )
}