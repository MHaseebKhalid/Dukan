/* eslint-disable no-trailing-spaces */
/* eslint-disable space-infix-ops */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React,{useEffect} from 'react';
import {View,Text} from 'react-native';
import Realm from 'realm';
let realm = new Realm({ path: 'UserDatabase.realm' });

export const Splash=({navigation})=>{
    useEffect(()=>{

           let realm = new Realm({
              path: 'UserDatabase.realm',
              schema: [
                {
                  name: 'user_details',
                  properties: {
                    user_id: { type: 'int', default: 0 },
                    user_fullname: 'string',
                    user_contact: 'string',
                    user_email: 'string', 
                    logged_in: 'boolean',
                  },
                },
              ],
            });


            var user_details = realm
            .objects('user_details')
            .filtered('logged_in =' + true);
          
            let user=user_details[0];
        setTimeout(() => {
            if(user){
                navigation.replace('HomeApp')
            }else{
                navigation.replace('AuthStack')
            }
        }, 500);
    },[])
    return(
       null
    )
}