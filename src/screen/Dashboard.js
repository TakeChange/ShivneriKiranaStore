import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'

const App = () => {

  DashElement = [
    {
      id: 1,
      image: require('../ShivneriKiranaStore/src/assets/icons/donate.png'),
      text: 'Donate'
    },
    {
      id: 2,
      image: require('../ShivneriKiranaStore/src/assets/icons/rcv.png'),
      text: 'Receive'
    },
    {
      id: 3,
      image: require('../ShivneriKiranaStore/src/assets/icons/map.png'),
      text: 'Food Map'
    },
    {
      id: 4,
      image: require('../ShivneriKiranaStore/src/assets/icons/mypins.png'),
      text: 'My Pins'
    },
    {
      id: 5,
      image: require('../ShivneriKiranaStore/src/assets/icons/history.png'),
      text: 'History'
    },
    {
      id: 6,
      image: require('../ShivneriKiranaStore/src/assets/icons/about.png'),
      text: 'Donate Money'
    },
    {
      id: 7,
      image: require('../ShivneriKiranaStore/src/assets/icons/donate.png'),
      text: 'Contact US'
    },
    {
      id: 8,
      image: require('../ShivneriKiranaStore/src/assets/icons/lgout.png'),
      text: 'Log Out'
    },
  ]

  const Dash = ({ item }) => {
    return (
      <TouchableOpacity style={styles.flatlistView}>
        <View style={styles.flatlist}>
          <Image source={item.image}
            style={styles.flatlisticon}
          />
          <Text style={styles.flatlistText}>{item.text}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.text}>
          My Dashboard
        </Text>
      </View>

      <FlatList
        data={DashElement}
        renderItem={Dash}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    // padding: 20
    padding:'5%'
  },
  textView: {
    height: 50,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  flatlistView: {
    height: '100%',
    marginTop: '5%',
    padding: 10
  },
  flatlist: {
    backgroundColor: '#2d2d2d',
    height: 160,
    width: 160,
    borderRadius: 20
  },
  flatlisticon: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '8%',

  },
  flatlistText: {
    color: 'white',
    alignSelf: 'center',
    marginTop: '5%',
    fontWeight: '800',
    fontSize: 15
  }
});