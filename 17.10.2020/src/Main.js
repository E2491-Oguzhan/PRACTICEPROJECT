/* eslint-disable prettier/prettier */
/* eslint-disable no-lone-blocks */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  Alert,
  TextInput,
} from 'react-native';
import productData from './product_data.json';
import {ProductCard} from './components';

// import Button from './components/Button';
// import InputPanel from './components/InputPanel';

const Main = () => {
  {
    /**
    const sayHello = () => {
    Alert.alert('Sahip', 'Wellcome');
    };
  */
  }
  // const [userName, setUserName] = useState('');
  const renderListItems = ({item}) => <ProductCard product={item} />;

  const [searchValue, setSearchValue] = useState('');
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    // Alert.alert('Clarusway', 'Hoşgeldiniz');
    setDisplayList(productData);
  }, []);

  useEffect(() => {
    const filteredValue = productData.filter((item) => {
      const text = searchValue.toUpperCase();
      const productTitle = item.title.toUpperCase();

      return productTitle.indexOf(text) > -1;
    });
    setDisplayList(filteredValue);
  }, [searchValue]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text style={styles.textStyle}> Clarusshop </Text>
        <View style={styles.searchBar}>
          <TextInput
            placeholder="search items"
            onChangeText={(value) => setSearchValue(value)}
          />
        </View>
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={displayList}
          renderItem={renderListItems}
          numColumns={2}
        />
        {/* <InputPanel sendText={(myValue) => setUserName(myValue)} /> */}
      </View>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  textStyle: {
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  searchBar: {
    padding: 0,
    backgroundColor: '#e0e0e0',
    margin: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
});

/**
 * 1) Stok durumunu belirtmeniz
 * 2) <SearchBar onSearch={...} />
 */

{
  /* <Button color="#4fc2f7" banner="Press Me!!" onPress={sayHello} />
      <Button
        banner="Press Me and see Bye!!"
        onPress={() => {
          Alert.alert('sahip', 'ByeBye');
        }}
      />
  */
}
