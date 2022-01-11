import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
  },

  background: {
    flex: 1,
    alignItems: 'center',
  },

  bgimg: {
    height: '100%',
    width: '100%',
    opacity: 0.8,
  },

  logo: {
    height: '100%',
    width: '100%',
  },

  logoBg: {
    position: 'absolute',
    height: '25%',
    width: '100%',
  },

  signinHeading: {
    fontSize: 20,
  },

  signin: {
    backgroundColor: 'white',
    borderWidth: 2,
    position: 'absolute',
    width: '85%',
    height: '65%',
    top: '25%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  textInputCard: {
    width: '90%',
    flexDirection: 'row',
  },

  textInputCardLeft: {
    fontSize: 16,
    paddingVertical: '5%',
    width: '30%',
    textAlign: 'center',
    backgroundColor: '#ECEEEF',
    alignSelf: 'center',
  },

  textInputCardRight: {
    borderColor: '#ECEEEF',
    borderWidth: 1,
    width: '70%',
  },

  btnBg: {
    width: '50%',
    justifyContent: 'space-between',
    marginTop: '5%',
  },

  fgtPaswd: {
    color: 'grey',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginLeft: '3%',
  },
});

export {styles};
