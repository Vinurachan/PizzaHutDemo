import * as React from 'react';
import {Component} from 'react';
import {ActivityIndicator, Image, View} from 'react-native';
import {styles} from '../styles/Splash.js';

export default class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 5000);
  }

  render() {
    return (
      <View>
        <Image
          source={require('../assets/images/splash.png')}
          style={styles.img}
        />
        <View style={styles.load}>
          <ActivityIndicator animating={true} size={40} color={'green'} />
        </View>
      </View>
    );
  }
}
