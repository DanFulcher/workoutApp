import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { colours } from '../../styles';
import Card from '../Card';
import Label from './Label';

const Input = ({label, value, placeholder, onChange}) => {
  return (
    <Card>
       {label && <Label text={label} />}
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="rgba(255,255,255,.3)"
        onChangeText={(text) => onChange(text)} />
    </Card>
  )
}

const styles = StyleSheet.create({
  label: {
    color: colours.white,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 12,
  },
  input: {
    fontFamily: 'OpenSans-Light',
    color: colours.white,
    fontSize: 21,
    padding: 1,
  }
})

export default Input;