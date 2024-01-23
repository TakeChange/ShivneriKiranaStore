import { StyleSheet, Text, View, ScrollView,TextInput } from 'react-native'
import React from 'react'
const Donate = () => {
    return (
        <ScrollView style={{ backgroundColor: '#000000' }}>
            <View style={styles.container}>
                <Text style={styles.Donate}>Donate Anything</Text>

                <TextInput
                    style={styles.fieldStyle}
                    placeholder='Donor Name'
                    placeholderTextColor={"#FFFFFF"}
                />
                <TextInput
                    style={styles.fieldStyle}
                    placeholder='Donate Items'
                    placeholderTextColor={"#FFFFFF"}
                />
                <TextInput
                    style={styles.fieldStyle}
                    placeholder='Phone Number'
                    placeholderTextColor={"#FFFFFF"}
                />
                <TextInput
                    style={styles.fieldStyle}
                    placeholder='Description'
                    placeholderTextColor={"#FFFFFF"}
                />
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
        marginTop:"5%",
    },
    fieldStyle: {
        marginLeft: "5%",
        marginTop: '8%',
        color: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E7E8EA',
        fontSize: 20,
        fontWeight: 'bold',
        width: '90%',
        height: 50
      },
})