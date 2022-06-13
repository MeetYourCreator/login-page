import React from 'react';
import { SafeAreaView, TextInput, View } from 'react-native';

const Input = ({placeholder}) => {
  return (
    <View>
      <TextInput placeholder={placeholder} />
    </View>
  );
};

export default Input;