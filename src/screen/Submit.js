import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity,} from 'react-native'
import React, { useState } from 'react'

const Submit = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  return (
    
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/btwoo.png')}
        resizeMode='stretch'
        style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', }}>
        <View style={{ justifyContent: 'flex-start' }}>
          <Text style={styles.labelText}>Name</Text>
          <View style={{ bottom: 110, width: 250, borderBottomColor: 'white', borderBottomWidth: 2 }}>
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={styles.fieldStyle}
              placeholder=''
            /></View>
          <Text style={styles.labelText}>Email</Text>
          <View style={{ bottom: 110, width: 250, borderBottomColor: 'white', borderBottomWidth: 2 }}>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.fieldStyle}
              placeholder=''
            /></View>
          <Text style={styles.labelText}>Message</Text>
          <View style={{ bottom: 110, width: 250, borderBottomColor: 'white', borderBottomWidth: 2 }}>
            <TextInput
              value={msg}
              onChangeText={(text) => setMsg(text)}
              style={styles.fieldStyle}
              placeholder=''
            /></View>
        </View>

        <View>
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

  labelText: {
    color: 'black',
    textAlign: 'justify',
    fontWeight: '900',
    fontSize: 18,
    bottom: 100,
    marginEnd: 200
  },
  bottomButton:{
    backgroundColor:'black',
    padding:20,
    borderRadius:10,
    marginBottom:30
  },
  SubButton:{
    color:'white',
    width:250,
    textAlign:'center',
    fontWeight:'900',
    fontSize:16
  }
})