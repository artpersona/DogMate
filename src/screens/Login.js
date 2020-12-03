import React, { useContext } from 'react';
import {Text, View, Image, Dimensions, TouchableHighlight, TouchableOpacity} from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons'; 
import * as Facebook from 'expo-facebook'
import {StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { AppContext } from '../../AppContext'
import styles from './Styles'

export default function Login() {
   const {isAuthenticated,setIsAuthenticated} = useContext(AppContext)
   const facebookLogin = async () => {
        console.log('top: ',isAuthenticated)
        try{
          const {
            type,
            token,
            expires,
            permissions,
            declinedPermissions
          } = await Facebook.logInWithReadPermissionsAsync( {
            permissions: ['public_profile']
          });
      
          if(type === 'success'){
            fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(500)`)
              .then(response => response.json())
              .then(data => {
                setIsAuthenticated(true)
                console.log(data)
              })
              .catch(e => console.log(e))
          }
          else{
    
          }
        }
    
        catch({message}){
          alert(`Facebook Error: ${message}`)
        }
      }

    
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Image source={require('../images/logo.png') } style={styles.logo_img}/>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>Dog Mate</Text>
                    <Text style={styles.subtitle}>Find a partner for your dog today!</Text>
                </View>
                <View style={styles.buttonGroup}>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <View style={styles.button}>
                        <AntDesign name="googleplus" size={30} style={[styles.buttonLogo, styles.googleIcon]} color="black" />
                        <Text style={styles.buttonText}>Login With Google</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={facebookLogin}>
                        <View style={styles.button}>
                        <FontAwesome name="facebook-f" size={30} style={[styles.buttonLogo, styles.facebookIcon]}  color="black" />
                        <Text style={styles.buttonText}>Login With Facebook</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      );
}

let ScreenHeight = Dimensions.get("window").height;
