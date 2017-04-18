'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  AppRegistry,
  Text,
  View,
  Image,
  Navigator,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 30,
    textAlign: 'center',
    color: 'black'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  searchInput: {
    height: 50,
    width: 200,
    padding: 4,
    fontSize: 18,
    textAlign: 'center',
    color: 'black'
  },
  button: {
    height: 40,
    width: 200,
    flexDirection: 'row',
    backgroundColor: 'gray',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 8,
    justifyContent: 'center',
},
    buttonText: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
  },
  image: {
    width: 250,
    height: 150
},
});

class Auth extends Component {

  render()
   {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Please log in
        </Text>
        <TextInput
         style={styles.searchInput}
         placeholder='Enter login'/>
         <TextInput
          style={styles.searchInput}
          placeholder='Enter password'/>
        <TouchableHighlight style={styles.button}
          underlayColor='#DCDCDC'>
          <Text style={styles.buttonText}>Input</Text>
        </TouchableHighlight>
        <Image source={require('./Resources/transport.png')} style={styles.image}/>
      </View>
    );
  }
}

module.exports = Auth;
