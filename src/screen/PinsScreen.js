import { View, Text } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
const PinsScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <Text style={{ fontSize: 18, fontWeight: '900', color: 'white',margin:'5%' }}>My Pins</Text>
            <MapView
                style={{ width: '100%', height: '90%' }}
                initialRegion={{
                    latitude: 28.605649510003392,
                    longitude: 77.2096483825537,
                    latitudeDelta: 12,
                    longitudeDelta: 12,
                }}

            />
        </View>
    )
}

export default PinsScreen