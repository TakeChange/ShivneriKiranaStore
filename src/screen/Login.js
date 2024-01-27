import { Image, ImageBackground, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import Eye from 'react-native-vector-icons/AntDesign';
import { openDatabase } from 'react-native-sqlite-storage';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const db = openDatabase({ name: 'DonateAnything.db' });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [email1, setEmail1] = useState('');
  const [password1, setPassword1] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [userError, setUserError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  useEffect(() => {
    getData();
  }, [])


  const getData = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT email,password FROM user_reg', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
          //console.log(results.rows.item(i))
          var Email = results.rows.item(i).email;
          var Password = results.rows.item(i).password;
          setEmail(Email);
          setPassword(Password);
        }

      })
    })
  }

  const check = () => {
    if (email == email1 && password == password1) {

      Alert.alert('Login Successful');
      AsyncStorage.setItem('LoginScreen','yes');
      navigation.navigate('DashboardScreen');

    }
    else {
      Alert.alert('username & password not match ');

    }
  }

  const Validation = () => {
    var isValid = true;
    if (email1 == '') {
      setUserError('Email do not empty');
      isValid = false;
    } 
    else
    if (!email1) {
      setUserError('Email is required.')
      isValid = false;
    }
    else {
      setUserError('');
    }
    

    if (password1 == '') {
      setPasswordError('Password do not empty');
      isValid = false;
    }
    else if (password1.length < 6) {
      setPasswordError('Password must be 6 character');
    } else {
      setPasswordError('');
    }

    if (isValid) {
      check();
    }
  }


  return (

    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/bthre.png')} resizeMode="cover" style={styles.image}>
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
            value={email1}
            onChangeText={(text) => setEmail1(text)}
          />
          <Text style={styles.errorMsg}>{userError}</Text>

          <View style={styles.container1}>
            <TextInput
              style={styles.fieldStyle}
              placeholder='Password'
              placeholderTextColor={"black"}
              secureTextEntry={!showPassword}
              value={password1}
              onChangeText={(text) => setPassword1(text)}
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
          <TouchableOpacity style={styles.RegStyle} onPress={() => navigation.navigate('RegisterScreen')}>

            <Text style={styles.Register}>Register</Text>
          </TouchableOpacity>


        </View>
      </ImageBackground>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
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
  eye: {
    position: 'absolute',
    right: 15,
    alignSelf: 'center',
    alignContent: 'center',
    bottom: 0,
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
    marginBottom: '20%',
    textDecorationLine: 'underline'
  },
  RegStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMsg: {
    color: 'red',
    marginLeft: "5%"
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
})