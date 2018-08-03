import React from 'react';
import { connect } from 'react-redux';
// import CoinButton from './client/components/CoinButton';
import { Provider } from "react-redux";
import { updateCash } from './client/actions/index.js';
import store from "./client/store/index";
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './client/components/HomePage';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <HomePage />
        </View>
      </Provider>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
