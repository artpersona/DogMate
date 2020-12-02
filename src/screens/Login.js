import React from 'react';
import {Text, View, Image} from 'react-native';

import {StyleSheet} from 'react-native'

export default function Login() {
    return (
        <View style={styles.container}>
          <Image source={require('../images/logo.png') } style={{width:"60%", height:'60%'}}/>
          <Text style={styles.title}>Dog Mate</Text>
          <Text style={styles.subtitle}>Find a partner for your dog!</Text>
        </View>
      );
}


const styles = StyleSheet.create({
    container: {
        width:'100%',
        borderWidth:1,
        borderBottomColor:'red',
        display: 'flex',
        
        
    },
  });