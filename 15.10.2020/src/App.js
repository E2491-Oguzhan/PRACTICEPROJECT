/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Button} from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      userName: '',
      createDate: new Date(),
    };

    console.log('CONSTRUCTOR');
  }

  componentDidMount() {
    console.log('COMPONENTDIDMOUNT');
  }
  render() {
    console.log('RENDER');
    return (
      <View>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>
          {' '}
          Count : {this.state.counter}
        </Text>
        <Button
          title="up"
          onPress={() =>
            this.setState({
              counter: this.state.counter + 1,
            })
          }
        />
      </View>
    );
  }
}

export default App;
