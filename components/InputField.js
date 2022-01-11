/* eslint-disable react/self-closing-comp */
import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from '../styles/InputField';

const InputField = props => {
  return (
    <View style={styles.textInputCard}>
      <Text style={styles.textInputCardLeft}>{props.name}</Text>
      <TextInput
        style={styles.textInputCardRight}
        placeholder={props.placeholder}
        textAlign="center"
        value={props.value}></TextInput>
    </View>
  );
};

export default InputField;
