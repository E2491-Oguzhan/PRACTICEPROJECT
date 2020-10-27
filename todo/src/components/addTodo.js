/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  Button,
  Text,
  Alert,
} from 'react-native';

export default function AddTodo({submitHandler}) {
  const [counter, setCounter] = useState(0);
  const clearBoth = () => {
    setCounter(0);
  };
  const updateBoth = () => {
    if (text.length > 3) {
      setCounter(counter + 1);
      submitHandler(text);
    } else {
      Alert.alert('Warning!', "Todo list's word must be over 3 chars log", [
        {text: 'Ok', onPress: () => console.log('alert closed')},
      ]);
    }
  };

  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <Text>{counter}</Text>
      <TextInput
        style={styles.textStyle}
        placeholder="Enter your daily task..."
        onChangeText={changeHandler}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View>
          <Button title="ADD TODO" color="#546E7A" onPress={updateBoth} />
        </View>
        <View>
          <Button title="RESET TODO" color="#546E7A" onPress={clearBoth} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: 'bold',
    width: Dimensions.get('window').width * 0.85,
    height: Dimensions.get('window').height * 0.06,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 25,
  },
});
