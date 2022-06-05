import { StyleSheet, Platform } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
mainContainer:{
  height:hp(8),
  width:'100%',
  backgroundColor:'#416eb2',
  alignItems:'center',
  paddingHorizontal:wp(5),
  justifyContent:'space-between',
  flexDirection:'row'
},
headingTextStyle:{
  fontSize:18,
  color:'white',

},
logOutIconStyle:{
  tintColor:'white',
  height:hp(3),
  width:hp(3),
  resizeMode:'contain'
}
});