import { View, TextInput, ImageBackground, StyleSheet, Image, TouchableOpacity, Text, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import Eye from 'react-native-vector-icons/AntDesign';
import { openDatabase } from 'react-native-sqlite-storage'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const Register = ({ navigation }) => {

var db = openDatabase({ name: 'DonateAnything.db' });


  ///////////////////////////

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [nameerr, setNameerr] = useState('');
  const [emailerr, setEmailerr] = useState('');
  const [phoneerr, setPhoneerr] = useState('');
  const [passerr, setPasserr] = useState('');

  //////////////////////////////
  //SQLITE
  useEffect(() => {
    db.transaction(txn => {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='user_reg'",
        [],
        (tx, res) => {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS register', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS user_reg(user_id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20), email VARCHAR(20),phone INT(12),password VARCHAR(20))',
              []
            );
          }
          else {
            console.log('Table already exits');
          }
        }
      );
    });
  }, [])


  const addEmployee = () => {
    var isValid = false;
    console.log(name, email, phone, password);

    if (name != '' && email != '' && phone != '' && password != '') {
      isValid = true;
    }

    if (isValid == true) {
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO user_reg(name,email,phone,password) VALUES (?,?,?,?)',
          [name, email, phone, password],

          (tx, results) => {
            console.log('Results', results);
            if (results.rowsAffected > 0) // 0>0  false   1>0 true
            {
              ToastAndroid.show('added successfully', ToastAndroid.SHORT);
              setEmail('');
              setName('');
              setPassword('');
              setPhone('');
              navigation.navigate('LoginScreen');
            }
            else {
              console.log('fail')
            }
          }
        );
      });
    }
    // else {
    //     Alert.alert('Please enter the all filds');
    // }
  }
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
      addEmployee();
    }
  }

  return (

    <View style={styles.container}>

      <ImageBackground source={require("../assets/images/bthre.png")} resizeMode="cover" style={styles.image}>

        <View style={styles.View1}>
          <Image source={require("../assets/icons/add.png")} style={styles.icon} />
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
          <Text style={styles.lasttext}>Already Registered ?</Text>

          <TouchableOpacity style={styles.loginStyle} onPress={() => navigation.navigate('LoginScreen')}>
          
          <Text style={styles.Login}>Login</Text>
        </TouchableOpacity>
          
        </View>

      </ImageBackground>

    </View>

  )
}

export default Register

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
    height: '11%',
    borderRadius: 15
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: '6%'
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
  },
  loginStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Login: {
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: '800',
    justifyContent: 'center',
    textDecorationLine: 'underline'
  },
});




