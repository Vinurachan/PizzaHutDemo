/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Component} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import {styles} from '../styles/Login.js';

export default class Login extends Component {
  state = {
    email: '',
    userPassword: '',
  };

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
            <View style={styles.textInputCard}>
              <Text style={styles.textInputCardLeft}>Username</Text>
              <TextInput
                style={styles.textInputCardRight}
                placeholder="Enter Username"
                textAlign="center"
                value={this.state.email}></TextInput>
            </View>
            <View style={styles.textInputCard}>
              <Text style={styles.textInputCardLeft}>Password</Text>
              <TextInput
                style={styles.textInputCardRight}
                secureTextEntry={true}
                placeholder="Enter Password"
                textAlign="center"
                value={this.state.userPassword}></TextInput>
            </View>
            <View style={styles.btnBg}>
              <Button
                title="Log in"
                color={'#41BD3A'}
                //   onPress={() => this.props.navigation.navigate()}
              />
              <Text> </Text>
              <Button
                title="Sign up"
                //onPress={() => this.props.navigation.navigate()}
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
                //   onPress={() => this.props.navigation.navigate()}
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
