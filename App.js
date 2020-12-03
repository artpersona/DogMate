import { StatusBar } from 'expo-status-bar';
import React, {useState, useContext, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigation/Navigator';
import * as Facebook from 'expo-facebook'
import Login from './src/screens/Login'
import { AppContext } from './AppContext'
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default function App(){
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null)
  Facebook.initializeAsync('206032301143230','DogMate')
      return (
        <SafeAreaProvider value={{
          isAuthenticated,
          setIsAuthenticated: (value) => setIsAuthenticated(value),
        }}>
          <AppContext.Provider>
              <View style={styles.container}>
                {(isAuthenticated ? <Text>Logged In </Text> : <Login/>)}
                <Text style={styles.text}>{isAuthenticated}</Text>
            </View>
          </AppContext.Provider>
        </SafeAreaProvider>
      );  
  
}

  
  


const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})


