import { StyleSheet, Text, View, ImageBackground, TextInput, Platform, TouchableOpacity, ScrollView, KeyboardAvoidingView, } from 'react-native'
import React, { useState } from 'react'

const Submit = ({ navigation }) => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  return (

    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/btwoo.png')}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={{margin:'2%'}}>
          <Text style={styles.labelText}>Name</Text>
          <View style={{ borderBottomColor: 'white', borderBottomWidth: 2 }}>
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={styles.fieldStyle}
              placeholder=''
            /></View>
          <Text style={styles.labelText}>Email</Text>
          <View style={{ borderBottomColor: 'white', borderBottomWidth: 2 }}>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.fieldStyle}
              placeholder=''
            /></View>
          <Text style={styles.labelText}>Message</Text>
          <View style={{ borderBottomColor: 'white', borderBottomWidth: 2 }}>
            <TextInput
              value={msg}
              onChangeText={(text) => setMsg(text)}
              style={styles.fieldStyle}
              placeholder=''
            /></View>
          <TouchableOpacity style={styles.bottomButton} >
            <Text style={styles.SubButton}>SUBMIT</Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    </View>
  )
}

export default Submit

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  labelText: {
    color: 'black',
    fontWeight: '900',
    fontSize: 18,
  },
  bottomButton: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 10,
    marginTop:'5%'
  },
  SubButton: {
    color: 'white',
    width: 250,
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16
  }
})