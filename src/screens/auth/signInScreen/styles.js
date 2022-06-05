import { StyleSheet, Platform } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: Platform.OS == 'ios' ? hp(4) : 0,
   backgroundColor: '#416eb2',
   padding: wp(5)
  },
  topSection: {
    justifyContent: 'center',
    marginVertical: hp(4)
  },
  text: {
    fontSize: 16,
    color: '#fff',
    marginTop: hp(1)
  },
  heading: {
    fontSize: 28,
    color: '#fff',
    fontWeight: '700',
    marginBottom: hp(1)
  },
  mainSection: {
    flex: 2,
    marginTop: hp(4)
  },
  bottomSection: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  bottomText: {
    color: '#fff',
    marginRight: hp(0.5),
    alignSelf: 'flex-end'
  },
  button: {
    padding: wp(3.5),
    marginTop: hp(4),
    backgroundColor: '#c9cfdb',
    alignItems: 'center',
    borderRadius: 3
  },
  btnText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 15
  }
});

export default styles;
