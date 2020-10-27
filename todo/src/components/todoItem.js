/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native';

export default function TodoItem({item, pressHandler}) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.item}>{item.text}</Text>
        <Image source={require('./assets/icon.png')} style={{marginTop: 18}} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginTop: 10,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#b2dfdb',
    color: '#333',
    fontWeight: 'bold',
    width: Dimensions.get('window').width * 0.79,
  },
});
