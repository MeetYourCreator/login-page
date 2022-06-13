import React from 'react';
import {Image, Text, useWindowDimensions, View} from 'react-native';
import {styles} from './styles.js';
import Logo from '../../../assets/images/discover-transparent-background-logo.png';
import Input from '../../components/Input/Input.js';

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  return (
    <View style={styles.screenContainer}>
      <Image source={Logo} style={[styles.logoContainer, { height: height * 0.3 }]} resizeMode='contain' />
      <Input placeholder="name" />
    </View>
  );
};

export default SignInScreen;
