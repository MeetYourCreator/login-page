import {StyleSheet} from 'react-native';
import {colors} from '../../shared/colors.js';

export const styles = StyleSheet.create({
  screenContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.spaceCadet,
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
});
