import { View, Text, StyleSheet, Image } from 'react-native'


const DonateMoney = () => {

    return (


        <View style={styles.container}>
            <Text
                style={{ color: 'white', fontSize: 15, fontWeight: '900', marginRight: 210 }} > Donate Money</Text>

            <Image
                source={require("../assets/images/qr_image.jpeg")}
                style={{ width: '100%', height: '65%', marginTop: '40%' }}
            ></Image>
        </View>

    )
}

export default DonateMoney

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
        justifyContent: 'center'
    },


})