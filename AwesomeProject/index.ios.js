/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  NavigatorIOS
} from 'react-native';
import SearchPage from './SearchPage';

class HelloWorld extends Component {
  constructor(props) {
      super(props);
      this.state = {text: ''};
  }
  render() {
    return (
        <View>
          <Text style={styles.text}>Hello World!</Text>
        </View>
    );
  }
}

class AwesomeProject extends React.Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
        );
    }
}


var styles = StyleSheet.create({
    text: {
        color: 'black',
        backgroundColor: 'white',
        fontSize: 30,
        margin: 80
    },
    container: {
        flex: 1
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
