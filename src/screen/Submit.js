import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, ScrollView,Image } from 'react-native'
import React, { useState,useEffect } from 'react'
import { openDatabase } from 'react-native-sqlite-storage'

const Submit = ({ navigation }) => {
  
  var db = openDatabase({ name: 'DonateAnything.db' });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [msgError, setMsgError] = useState('');

  useEffect(() => {
    db.transaction(txn => {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='Contact_US'",
        [],
        (tx, res) => {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS Contact_US', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS Contact_US(contact_id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20), email VARCHAR(20),message VARCHAR(30))',
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

  const addContact = () => {
    var isValid = false;
    console.log(name, email, msg);

    if (name != '' && email != '' && msg != '') {
      isValid = true;
    }

    if (isValid == true) {
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO Contact_US(name,email,message) VALUES (?,?,?)',
          [name, email, msg],
         // console.log(name),
          (tx, results) => {
            console.log('Results', results);
            if (results.rowsAffected > 0) // 0>0  false   1>0 true
            {
              ToastAndroid.show('added successfully', ToastAndroid.SHORT);
              setEmail('');
              setName('');
              setMsg('');
              
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
    if (name == '') {
        setNameError('Name do not empty');
        isValid = false;
    } else {
        setNameError('');
    }
    var isValid = true;
    if (email == '') {
        setEmailError('Email do not empty');
        isValid = false;
    } else {
        setEmailError('');
    }
     isValid = true;
     if (!email) { 
      setEmailError.email = 'Email is required.'; 
  } else if (!/\S+@\S+\.\S+/.test(email)) { 
      setEmailError('Email is invalid.'); 
  } 
  var isValid = true;
    if (msg == '') {
        setMsgError('Message Field do not empty');
        isValid = false;
    } else {
        setMsgError('');
        addContact();
    }

    // if (isValid) {
    //   check();
    // }
}

  return (
    <ScrollView>
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/btwoo.png')}
        resizeMode="cover"
        style={{width:'100%', height:750,}}
      >
      <View style={styles.icon}>
        <Image
          source={require("../assets/icons/custservice.png")}
          style={{height:'76%',width:'70%'}} />
      </View>
      
      <View>
            <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
              style={styles.TextfStyle}
              placeholder='Name'
              placeholderTextColor={"black"}
            />
            <Text style={styles.errorMsg}>{nameError}</Text>
            <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
              style={styles.TextfStyle}
              placeholder='Email'
              placeholderTextColor={"black"}
            />
            <Text style={styles.errorMsg}>{emailError}</Text>
            <TextInput
            value={msg}
            onChangeText={(text) => setMsg(text)}
            style={styles.TextfStyle}
            placeholder='Message'
            placeholderTextColor={"black"}
          />
          <Text style={styles.errorMsg}>{msgError}</Text>
          </View>
          <TouchableOpacity style={styles.Buttonstyle} onPress={Validation}>
            <Text style={styles.SubButton}>SUBMIT</Text>
          </TouchableOpacity>
      </ImageBackground>
    </View>
    </ScrollView>
  )
}

export default Submit

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon:{
    height:'10%',
    width:'20%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:90/2,
    borderWidth:3,
    marginLeft:'38%',
    marginTop:'25%'
  },
  TextfStyle:{
    marginLeft: "8%",
    marginTop: '5%',
    color: '#000000',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    fontSize: 20,
    fontWeight: 'bold',
    width: '80%',
    
  },
  Buttonstyle:{
    padding: 15,
    backgroundColor: '#000000',
    marginTop: '10%',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: "80%",
    marginLeft: "10%"
  },
  SubButton:{
    fontSize: 16,
    color: 'white',
    fontWeight:'bold',
  },
  errorMsg: {
    color: 'red',
    marginLeft:'7%'
}
 
})