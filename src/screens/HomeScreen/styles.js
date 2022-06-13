import { StyleSheet } from 'react-native';
import { colors } from '../../shared/colors.js';

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
    width: '50%',
  },
  logoContainerText: {
    color: colors.white,
    fontWeight: '800',
  },
  logoContainerLogo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: -90,
  },
  loginButtonContainer: {
    backgroundColor: colors.flame,
    paddingTop: '2%',
    paddingRight: '30%',
    paddingBottom: '2%',
    paddingLeft: '30%',
    borderRadius: 20,
    marginTop: -50,
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '800',
  },
});
