import { View, Text } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
const DonateMapScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <Text style={{ fontSize: 15, fontWeight: '900', color: 'white' }}>DonateMapScreen</Text>
            <MapView
                style={{ width: '99%', height: '97%' }}
                initialRegion={{
                    latitude: 28.605649510003392,
                    longitude: 77.2096483825537,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}

            />
        </View>
    )
}

export default DonateMapScreen