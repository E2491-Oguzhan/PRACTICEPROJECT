/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import Header from './components/header';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy coffee ☕', key: '1'},
    {text: 'create a todo app 💻', key: '2'},
    {text: 'play on the switch 🎮', key: '3'},
  ]);
  const [counter, setCounter] = useState(0);

  const clearInput = () => {
    setCounter(counter - 1);
  };

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key !== key);
    });
  };

  const submitHandler = (userText) => {
    setTodos((prevTodos) => {
      return [{text: userText, key: Math.random().toString()}, ...prevTodos];
    });
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed keyboard');
      }}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#546E7A',
        }}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'android' ? null : 'padding'}>
          {/** header */}
          <Header />
          {/** to form */}
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
          {/** footer */}
          <View
            style={{
              justifyContent: 'flex-end',
              flex: 1,
              alignItems: 'center',
            }}>
            <View style={styles.inputContainer}>
              <AddTodo submitHandler={submitHandler} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 30,
    flex: 2.2,
  },
  inputContainer: {
    backgroundColor: '#b2dfdb',
    width: Dimensions.get('window').width * 0.95,
    height: Dimensions.get('window').height * 0.2,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Platform.OS === 'android' ? 20 : 30,
  },
});
