import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const DonateScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Donate Anything</Text>
      <TouchableOpacity>
      <View style={styles.View1}>
        <Image
          source={require("../assets/icons/donate.png")}
          style={styles.icon} />
          <Text style={styles.ViewText}>Login</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View style={styles.View1}>
        <Image
          source={require("../assets/icons/add.png")}
          style={styles.icon} />
          <Text style={styles.ViewText}>Register</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View style={styles.View1}>
        <Image
          source={require("../assets/icons/about.png")}
          style={styles.icon} />
          <Text style={styles.ViewText}>Donate Money</Text>
      </View>
      </TouchableOpacity>
    </View>
  )
}

export default DonateScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    padding: '6%'
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  View1: {
    backgroundColor: '#2d2d2d',
    height: 200,
    width: '100%',
    borderRadius: 20,
    marginTop: '10%'
  },
  icon: {
    width: 100,
    height: 100,
    alignSelf:'center',
    marginTop:'8%'
  },
  ViewText: {
    color: 'white',
    alignSelf: 'center',
    marginTop: '5%',
    fontWeight: '800',
    fontSize: 15
  }
})