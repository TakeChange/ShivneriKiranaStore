import { View, Text, StyleSheet, ImageBackground,Image } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      check();
      navigation.navigate('Donate');
    }, 3000)
  }, [])

  const check = async() =>{
    var temp = await AsyncStorage.getItem('LoginScreen');

    if(temp == 'yes')
    {
      navigation.navigate('DashboardScreen')
    }
    else
    {
      navigation.navigate('LoginScreen');
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/splash.png")}
        style={{ width: '45%', height: '40%' }}
      ></Image>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    justifyContent: 'center'
  },


})
