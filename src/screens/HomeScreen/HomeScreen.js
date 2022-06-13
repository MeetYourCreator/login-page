import React from 'react';
import { Image, Pressable, Text, useWindowDimensions, View } from 'react-native';
import { styles } from './styles.js';
import Logo from '../../../assets/images/discover-transparent-background-logo.png';

const HomeScreen = () => {
  const { height } = useWindowDimensions();
  return (
    <View style={styles.screenContainer}>
      <Image source={Logo} style={[styles.logoContainer, { height: height * 0.3 }]} resizeMode='contain' />
      <Pressable style={styles.loginButtonContainer}>
       <Text style={styles.loginButtonText}>Login</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
