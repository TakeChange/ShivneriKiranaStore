import { Image, ImageBackground, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import Eye from 'react-native-vector-icons/AntDesign';
const Login = ({ navigation }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [userError, setUserError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const Validation = () => {
    var isValid = true;
    if (username == '') {
      setUserError('Email do not empty');
      isValid = false;
    } else {
      setUserError('');
    }
    isValid = true;
    if (!username) {
      setUserError.username = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(username)) {
      setUserError('Email is invalid.');
    }
    isValid = true;
    if (password =='') {
      setPasswordError('Password do not empty');
      isValid = false;
    }
    else if (password.length < 6) {
      setPasswordError('Password must be 6 character');
    } else {
      setPasswordError('');
    }

    // if (isValid) {
    //     check();
    // }
  }


  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/images/bthre.png')}
          resizeMode='cover'
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
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
            <Text style={styles.errorMsg}>{userError}</Text>

              <View style={styles.container1}>
            <TextInput
              style={styles.fieldStyle}
              placeholder='Password'
              placeholderTextColor={"black"}
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
           
            <Eye
              name={showPassword ? 'eyeo' : 'eye'}
              size={28}
              color="black"
              style={styles.eye}
              onPress={toggleShowPassword}
            />
           
            </View>
            <Text style={styles.errorMsg}>{passwordError}</Text>

            <TouchableOpacity style={styles.bottomButton} onPress={Validation}>
              <Text style={{ fontWeight: '700', color: '#FFFFFF', fontSize: 20 }}>Login</Text>
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
  container1: {
    flexDirection: 'row',
  },
  eye:{
    position:'absolute',
    right:15,
    alignSelf:'center',
    alignContent:'center',
    bottom:0,
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
    fontWeight: '800',
  },
  Register: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '800',
    justifyContent: 'center',
    marginBottom: '20%'
  },
  RegStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMsg: {
    color: 'red',
    marginLeft: "5%"
  }

})