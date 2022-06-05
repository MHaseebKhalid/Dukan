/* eslint-disable space-infix-ops */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button
} from 'react-native';

import {Header} from '../../components';
import styles from './styles';
import { useDispatch,useSelector } from 'react-redux';

import {logOutUser} from '../../redux/authSlice/authSlice';

let data=[
    {id:1, title: "Lorem ipsum dolor",time:"1 days a go",    image:"https://picsum.photos/200/300"},
    {id:3, title: "Dipiscing elit. Aenean ",time:"3 hour a go",    image:"https://picsum.photos/200"}, 
    {id:2, title: "Sit amet, consectetuer", time:"2 minutes a go", image:"https://picsum.photos/200/300"} ,
    {id:4, title: "Commodo ligula eget dolor.",  time:"4 months a go",  image:"https://source.unsplash.com/300x300"}, 
    {id:5, title: "Aenean massa. Cum sociis", time:"5 weeks a go",   image:"https://picsum.photos/200/300"}, 
    {id:6, title: "Natoque penatibus et magnis",  time:"6 year a go",    image:"https://source.unsplash.com/300x300"}
]

export const Home=({navigation})=>{

  const state=useSelector(state=>state);
  const {authReducer} = state;
  const dispatch=useDispatch();


  const [user,setUser]=useState(null)

  useEffect(()=>{
    if(authReducer.userData!=null){
      setUser(authReducer.userData);
    }
  },[authReducer.userData])

   const renderList=(post) => {
    const item = post.item;
    return (
      <TouchableOpacity>
        <View style={styles.card}>

          <Image style={styles.cardImage} source={{uri:item.image}}/>
          <View style={styles.cardContent}>
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>

            <View style={styles.cardFooter}>
              <View style={styles.socialBarContainer}>
                <View style={styles.socialBarSection}>
                  <TouchableOpacity style={styles.socialBarButton}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/filled-like.png'}}/>
                    <Text style={{color:'white'}}>78</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.socialBarSection}>
                  <TouchableOpacity style={styles.socialBarButton}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/ios-glyphs/75/ffffff/comments.png'}}/>
                    <Text style={{color:'white'}}>25</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.socialBarSection}>
                  <TouchableOpacity style={styles.socialBarButton}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/material/50/ffffff/retweet.png'}}/>
                    <Text  style={{color:'white'}}>13</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }


    return (
      <View style={styles.container}>
           <Header title="Dukan.PK" navigation={navigation} onPress={()=>{dispatch(logOutUser({number:user.user_contact})).then(()=>{navigation.navigate("AuthStack")})}}/>
        <FlatList style={styles.list}
          data={data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={renderList}/>
      </View>
    );
  
}

