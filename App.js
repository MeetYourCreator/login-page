/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SignInScreen from '../../screens/SignInScreen/SignInScreen.js'

const App = () => {
  return (
    <SafeAreaView>
      <SignInScreen />
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
// });

export default App;
