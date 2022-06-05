import { StyleSheet, Platform } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
buttonStyle:{
    height:hp(18),
    width:hp(18),
    borderRadius:hp(18),
    alignItems:'center',
    justifyContent:'center'
},
iconStyle:{
    height:hp(15),
    width:hp(15),
    resizeMode:'contain'
}
});