import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MapView from 'react-native-maps';
const Donate = () => {

    const [donername, setdonername] = useState('');
    const [donateItems, setDonateItems] = useState('');
    const [phone, setphone] = useState('');
    const [description, setdescription] = useState('');

    const [donernameError, setdonernameError] = useState('');
    const [donateItemsError, setdonateItemsError] = useState('');
    const [phoneError,setphoneError] = useState('');
    const [descriptionError,setdescriptionError] = useState('');

    const Validation = () => {
        var isValid = true;
        if (donername == '') {
            setdonernameError('Donor Name do not empty');
            isValid = false;
        } else {
            setdonernameError('');
        }

        if (donateItems == '') {
            setdonateItemsError('Donate Items do not empty');
            isValid = false;
        } else {
            setdonateItemsError('');
        }

        if (phone == '') {
            setphoneError('Phone number do not empty');
            isValid = false;
        } else {
            setphoneError('');
        }
        isValid = true;
    if(phone.length < 10){
      setphoneError('Phone must be at least 10 digit.')
    }

        if (description == '') {
            setdescriptionError('Description do not empty');
            isValid = false;
        } else {
            setdescriptionError('');
        }

        
        // if (isValid) {
        //     check();
        // }
    }


    return (
        <ScrollView style={{ backgroundColor: "#000000" }}>
            <View style={styles.container}>
                <Text style={styles.Donate}>Donate Anything</Text>

                <TextInput
                    style={styles.fieldStyle}
                    placeholder='Donor Name'
                    placeholderTextColor={"#FFFFFF"}
                    value={donername}
                    onChangeText={(text) => setdonername(text)}
                />
                <Text style={styles.errorMsg}>{donernameError}</Text>
                <TextInput
                    style={styles.fieldStyle}
                    placeholder='Donate Items'
                    placeholderTextColor={"#FFFFFF"}
                    value={donateItems}
                    onChangeText={(text) =>setDonateItems(text)}
                />
                <Text style={styles.errorMsg}>{donateItemsError}</Text>
                <TextInput
                    style={styles.fieldStyle}
                    placeholder='Phone Number'
                    placeholderTextColor={"#FFFFFF"}
                    value={phone}
                    onChangeText={(text) =>setphone(text)}
                />
                <Text style={styles.errorMsg}>{phoneError}</Text>
                <TextInput
                    style={styles.fieldStyle}
                    placeholder='Description'
                    placeholderTextColor={"#FFFFFF"}
                    value={description}
                    onChangeText={(text) =>setdescription(text)}
                />
                <Text style={styles.errorMsg}>{descriptionError}</Text>

                {/* <MapView
                    style={{ width: '100%', height: '50%',marginTop:'5%' }}
                    initialRegion={{
                        latitude: 28.605649510003392,
                        longitude: 77.2096483825537,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                /> */}

                <TouchableOpacity style={styles.bottomButton} onPress={Validation}>
                    <Text style={{ color: '#FFFFFF', fontWeight: '600' }}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Donate

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Donate: {
        color: "#FFFFFF",
        fontSize: 20,
        marginLeft: '5%',
        marginTop: "5%",
        fontWeight: '700'
    },
    fieldStyle: {
        marginLeft: "5%",
        marginTop: '8%',
        color: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E7E8EA',
        fontSize: 18,
        fontWeight: 'bold',
        width: '90%',
        height: 50
    },

    bottomButton: {
        padding: 12,
        marginTop: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        width: "80%",
        marginLeft: "10%",
        backgroundColor: '#333333',
        borderRadius: 4,
    },

    errorMsg: {
        color: 'red',
        marginLeft: "5%"
      }
    
})