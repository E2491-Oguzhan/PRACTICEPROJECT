/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const InputPanel = (props) => {
  const [inputText, setInputText] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(value) => setInputText(value)}
          placeholder="Search"
        />
      </View>

      <TouchableOpacity style={styles.buttonContainer}>
        <Text
          onPress={() => props.sendText(inputText)}
          style={{textAlign: 'center'}}>
          Choose
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputPanel;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    padding: 5,
    margin: 10,
    borderRadius: 5,
  },
  inputContainer: {
    backgroundColor: '#eceff1',
    padding: 5,
    margin: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    backgroundColor: '#a5d6a7',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
});
