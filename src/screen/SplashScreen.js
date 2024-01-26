import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      //navigation.navigate('DonateMapScreen');
    }, 2000)
  }, [])

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/splash.png")}
        style={{ width: '95%', height: '70%' }}
      ></ImageBackground>
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
