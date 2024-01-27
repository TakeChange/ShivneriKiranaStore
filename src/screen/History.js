import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { openDatabase } from 'react-native-sqlite-storage'



const History = () => {

  var db = openDatabase({ name: 'DonateAnything.db' });
  const [donarList, setDonerList] = useState([])
  const isFocused = useIsFocused();
  useEffect(() => {
    getData();
  }, [isFocused])
  

  const getData = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM donar', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
          console.log(results.rows.item(i))
        }
        setDonerList(temp);
      });
    });
  };

  const DonarInfo = ({ item }) => {

    return (
      <View style={styles.Container1}>
        <View>
          <Text style={{ fontSize: 15, fontWeight: '900', color: '#FFFFFF' }}>Doner Name: {item.donar_name}</Text>
          <Text style={{ fontSize: 15, fontWeight: '900', color: '#FFFFFF' }}>Donate Items: {item.donate_items}</Text>
          <Text style={{ fontSize: 15, fontWeight: '900', color: '#FFFFFF' }}>Phone Number: {item.phone}</Text>
          <Text style={{ fontSize: 15, fontWeight: '900', color: '#FFFFFF' }}>Description: {item.description}</Text>
        </View>
      </View>

    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Donar History</Text>
      <View>
        <FlatList
          data={donarList}
          renderItem={DonarInfo}
          keyExtractor={(item) => item.donar}
        />
      </View>
    </View>
  )
}

export default History

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    padding: '6%'
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  Container1: {
    marginTop: '10%',
    backgroundColor: '#333333',
    borderRadius: 20,
    padding: '8%',
    justifyContent: 'center',
    margin: '6%'
  },


})