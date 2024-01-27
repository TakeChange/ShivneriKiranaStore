import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const History = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>History</Text>
    </View>
  )
}

export default History

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    padding: '6%'
  },
  text:{
    color:'white',
    fontSize:20,
    fontWeight:'bold'
  }

})