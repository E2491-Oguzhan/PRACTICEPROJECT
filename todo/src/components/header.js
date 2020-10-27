/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Dimensions, Text} from 'react-native';

export default function Header({}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>TODO</Text>
      </View>
      <View>
        <Text style={styles.text}>{0}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    height: Dimensions.get('window').height * 0.07,
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#ff6f00',
  },
});
