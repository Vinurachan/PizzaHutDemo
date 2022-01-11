/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Component} from 'react';
import {
  Button,
  Image,
  PermissionsAndroid,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {styles} from '../styles/Login.js';
import InputField from '../components/InputField';

const callPhoneCheck = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CALL_PHONE,
      {
        title: 'PizzaHutDemo App Call Phone Permission',
        message: 'PizzaHutDemo App needs access to call your phone ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can call this phone');
    } else {
      console.log('Call Phone permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export default class Login extends Component {
  state = {
    email: '',
    userPassword: '',
  };

  componentDidMount() {
    wait(2000).then(callPhoneCheck);
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea} forceInset={{top: 'always'}}>
        <StatusBar style="light" />
        <View style={styles.background}>
          <Image
            source={require('../assets/images/android/background.jpg')}
            style={styles.bgimg}
          />
          <View style={styles.logoBg}>
            <Image
              source={require('../assets/images/android/logo.png')}
              style={styles.logo}
            />
          </View>
          <View style={styles.signin}>
            <Text
              style={{
                fontSize: 20,
              }}>
              Sign In
            </Text>
            <InputField
              name="Username"
              placeholder="Enter Username"
              value={this.state.email}
            />
            <InputField
              name="Password"
              placeholder="Enter Password"
              value={this.state.userPassword}
            />
            <View style={styles.btnBg}>
              <Button
                title="Log in"
                color={'#41BD3A'}
                // onPress={}
              />
              <Text> </Text>
              <Button
                title="Sign up"
                // onPress={}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: 'black',
                }}>
                Forgot Password?
              </Text>
              <Text
                style={styles.fgtPaswd}
                // onPress={}
              >
                Click Here
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
