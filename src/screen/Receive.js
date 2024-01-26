import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { MapView } from 'react-native-maps'

const Receive = () => {

    const [receivername, setReceivername] = useState('');
    const [description, setDescription] = useState('');

    const [receiverError, setReceiverError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');

    const Validation = () => {
        var isValid = true;
        if (receivername == '') {
            setReceiverError('Receiver name do not empty.');
            isValid = false;
        } else {
            setReceiverError('');
        }

        if (description == '') {
            setDescriptionError('Description do not empty.');
            isValid = false;
        } else {
            setDescriptionError('');
        }
        // if (isValid) {
        //     check();
        // }
       
    }


    return (
        <ScrollView style={{ backgroundColor: '#000000' }}>
            <View style={styles.container}>
                <Text style={styles.Receive}>Receive</Text>

                <TextInput
                    value={receivername}
                    onChangeText={(text) => setReceivername(text)}
                    style={styles.fieldStyle}
                    placeholder='Receiver Name'
                    placeholderTextColor={"#FFFFFF"}
                />
                <Text style={styles.errorMsg}>{receiverError}</Text>

                <TextInput
                    value={description}
                    onChangeText={(text) => setDescription(text)}
                    style={styles.fieldStyle}
                    placeholder='Description'
                    placeholderTextColor={"#FFFFFF"}
                />
                <Text style={styles.errorMsg}>{descriptionError}</Text>

                {/* <MapView
                    style={{ width: '20%', height: '20%' }}
                    initialRegion={{
                        latitude: 28.605649510003392,
                        longitude: 77.2096483825537,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}

                /> */}

                <View style={{ margin: '3%' }}>
                    <Image
                        source={require("../assets/images/qr_image.jpeg")}
                        style={{ width: '100%', height: '65%', marginTop: '90%' }}>
                    </Image>
                    {/* <View>
                    <TouchableOpacity style={styles.bottomButton} onPress={() => { }}>
                        <Text style={styles.submit} >SUBMIT</Text>
                    </TouchableOpacity>
                
                    </View> */}

                </View>

            </View>
            <View>
                <TouchableOpacity style={styles.bottomButton} onPress={Validation}>
                    <Text style={styles.submit} >SUBMIT</Text>
                </TouchableOpacity>
            </View>


        </ScrollView>
    )
}

export default Receive

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: '3%',
        alignContent: 'center'
    },
    Receive: {
        color: "#FFFFFF",
        fontSize: 20,
        marginLeft: '2%',
        marginTop: "5%",
        fontWeight: 'bold',
    },
    fieldStyle: {
       
        marginTop: '8%',
        color: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E7E8EA',
        fontSize: 18,
        fontWeight: 'bold',
        width: '100%',
        height: 50
    },
    bottomButton: {
        padding: '4%',
        backgroundColor: '#333333',
        marginTop: '140%',
        margin: '10%',
        borderRadius: 3
    },
    submit: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        fontWeight: '900',

    },
    errorMsg: {
        color: 'red',
        fontSize:12,
        
    }

})