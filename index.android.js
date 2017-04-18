'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Auth from './Auth'


export default class app2 extends Component {
  render() {
    return (
      <Navigator style={styles.container}
         initialRoute={{ title: 'Property Finder', index: 0 }}
         renderScene={(route, navigator) => {
         return <Auth title={route.title} />
      }}/>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('app2', () => app2);
