import { Image, ImageBackground, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
//import Icon from 'react-native-vector-icons/AntDesign'
import { Entypo } from 'react-native-vector-icons/Entypo'
const Login = () => {

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/images/bthre.png')}
          resizeMode="stretch"
          style={styles.img}>

          <View style={styles.icon}>
            <Image
              source={require('../assets/icons/add.png')}
              style={{ height: 70, width: 70, }}
            />
          </View>
          <View>
            <TextInput
              style={styles.fieldStyle}
              placeholder='Email'
              placeholderTextColor={"black"}
            />

            <TextInput
              style={styles.fieldStyle}
              placeholder='Password'
              placeholderTextColor={"black"}
              secureTextEntry={true}
            />

            <TouchableOpacity style={styles.bottomButton}>
              <Text style={{ fontWeight: '700',color: '#FFFFFF' ,fontSize:20}}>Login</Text>
            </TouchableOpacity>

            <View style={styles.forgetStyle}>
              <Text style={styles.forgetText}>Not Registered! Click here to</Text>
            </View>
            <TouchableOpacity style={styles.RegStyle}>
            <Text style={styles.Register}>Register</Text>
            </TouchableOpacity>


          </View>


        </ImageBackground>
      </View>
    </ScrollView>

  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    height: 761,
    width: 355,
  },
  icon: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 90 / 2,
    borderWidth: 4,
    borderColor: '#000000',
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
    marginLeft: "38%",
    marginTop: "30%"
  },
  labelText: {
    fontSize: 20,
    color: '#000000',
    marginTop: '10%',
    marginLeft: '12%',
    fontWeight: '700'
  },
  fieldStyle: {
    marginLeft: "5%",
    marginTop: '10%',
    color: '#000000',
    borderBottomWidth: 1,
    borderBottomColor: '#E7E8EA',
    fontSize: 20,
    fontWeight: 'bold',
    width: '90%',
    height: 50
  },
  bottomButton: {
    padding: 12,
    backgroundColor: '#000000',
    marginTop: '10%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: "80%",
    marginLeft: "10%"
  },
  forgetStyle: {
    alignSelf: 'center',
    marginTop: '8%'
  },
  forgetText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight:'800',
  },
  Register:{
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight:'800',
    justifyContent:'center',
    marginBottom:'20%'
  },
  RegStyle:{
    justifyContent:'center',
    alignItems:'center',
  }

})