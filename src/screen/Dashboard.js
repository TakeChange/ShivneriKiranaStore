import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Dashboard = ({navigation}) => {
  
  DashElement = [
    {
      id: 1,
      image: require('../assets/icons/donate.png'),
      text: 'Donate'
    },
    {
      id: 2,
      image: require('../assets/icons/rcv.png'),
      text: 'Receive'
    },
    {
      id: 3,
      image: require('../assets/icons/map.png'),
      text: 'Food Map'
    },
    {
      id: 4,
      image: require('../assets/icons/mypins.png'),
      text: 'My Pins'
    },
    {
      id: 5,
      image: require('../assets/icons/history.png'),
      text: 'History'
    },
    {
      id: 6,
      image: require('../assets/icons/about.png'),
      text: 'Donate Money'
    },
    {
      id: 7,
      image: require('../assets/icons/donate.png'),
      text: 'Contact US'
    },
    {
      id: 8,
      image: require('../assets/icons/lgout.png'),
      text: 'Log Out'
    },
  ]

  const check=(item)=>{
    if(item == 1)
    {
      navigation.navigate('DonateScreen')
    }

    else if(item == 2)
    {
      navigation.navigate('ReceiveScreen')
    }

    else if(item == 3)
    {
      navigation.navigate('DonateMapScreen')
    }

    else if(item == 4)
    {
      navigation.navigate('PinsScreen')
    }

    else if(item == 5)
    {
      navigation.navigate('HistoryScreen')
    }

    else if(item == 6)
    {
      navigation.navigate('DonateMoneyScreen')
    }

    else if(item == 7)
    {
      navigation.navigate('SubmitScreen')
    }
    else if(item == 8)
    {
      AsyncStorage.setItem('LoginScreen',' no');
      navigation.navigate('LoginScreen')
    }

  }

  const Dash = ({ item }) => {
    return (
      <TouchableOpacity style={styles.flatlistView} onPress={()=>check(item.id)} >
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

export default Dashboard

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