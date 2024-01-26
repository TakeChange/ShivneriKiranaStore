import { View, TextInput, ImageBackground, StyleSheet, Image, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'
import Eye from 'react-native-vector-icons/AntDesign';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const App = () => {

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  //const [pass, setPass] = useState('');

  const [nameerr, setNameerr] = useState('');
  const [emailerr, setEmailerr] = useState('');
  const [phoneerr, setPhoneerr] = useState('');
  const [passerr, setPasserr] = useState('');

  const emailRegex = '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$';
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const Validation = () => {
    var isValid = true;
    if (name == "") {
      setNameerr('Enter User Name');
      isValid = false;
    }
    else {
      setNameerr('');
    }

    if (email == "") {
      setEmailerr('Enter Email');
      isValid = false;
    }
    // else
    //   if (!emailRegex.test(email)) {
    //     setEmailerr('Enter Valid Email');
    //     isValid = false;
    //   }
    else {
      setEmailerr('');
    }

    if (phone == "") {
      setPhoneerr('Enter Phone Number');
      isValid = false;
    }
    
    else {
      setPhoneerr('');
    }

    if (password == "") {
      setPasserr('Enter Password');
      isValid = false;
    }
    else if (password.length < 6) {
      setPasserr('Password must be 6 character');
    }
    else {
      setPasserr('');
    }
  }

  return (

    <View style={styles.container}>

      <ImageBackground source={require("../ShivneriKiranaStore/src/assets/images/bthre.png")} resizeMode="cover" style={styles.image}>

        <View style={styles.View1}>
          <Image source={require("../ShivneriKiranaStore/src/assets/icons/add.png")} style={styles.icon} />
        </View>
        <View style={styles.View2}>
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="black"
          />
          <Text style={{ color: 'red' }}>{nameerr}</Text>

          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
            placeholderTextColor="black"
          />
          <Text style={{ color: 'red' }}>{emailerr}</Text>

          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={(text) => setPhone(text)}
            placeholder="Phone Number"
            placeholderTextColor="black"
            keyboardType="numeric"
            maxLength={10}
          />
          <Text style={{ color: 'red' }}>{phoneerr}</Text>

          <View style={styles.container1}>
            <TextInput
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              style={styles.input1}
              placeholder=" Password"
              placeholderTextColor="black"
            />
            <Eye
              name={showPassword ? 'eyeo' : 'eye'}
              size={28}
              color="black"

              onPress={toggleShowPassword}
            />
          </View>
          <Text style={{ color: 'red' }}>{passerr}</Text>
          <TouchableOpacity style={styles.btn} onPress={Validation}>
            <Text style={styles.btnText}>REGISTER</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.lasttext}>Already Registered ?</Text>
          </TouchableOpacity>
        </View>

      </ImageBackground>

    </View>

  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%'
    //justifyContent: 'center',
  },
  View1: {
    width: 125,
    height: 125,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderRadius: 125 / 2,
    borderWidth: 5,
    marginTop: '10%'
  },
  icon: {
    width: 100,
    height: 100,
  },


  ///////////TextInputPArt
  View2: {
    alignSelf: 'center',
    marginTop: '5%'
  },

  input: {
    height: 50,
    outline: 'none',
    width: 320,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    padding: 10,
    fontSize: 15,
    fontWeight: '800',
    marginTop: '4%',
  },


  /////////password
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%',
    borderBottomColor: 'white',
    borderBottomWidth: 1
  },
  input1: {
    flex: 1,
    width: 320,
    height: 50,
    paddingVertical: 10,
    paddingRight: 10,
    fontSize: 15,
    fontWeight: '800',
    outline: 'none',
  },

  ////////////Button
  btn: {
    backgroundColor: 'black',
    marginTop: '10%',
    height: '12%',
    borderRadius: 15
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: '5%'
  },
  lasttext: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '5%'
  },
  errorMsg: {
    color: 'red',
    fontSize: 20
  }
});




