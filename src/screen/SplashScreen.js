import { View, Text, StyleSheet, ImageBackground,Image } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Donate');
    }, 2000)
  }, [])

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
