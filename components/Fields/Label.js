import React from 'react';
import {Text, StyleSheet} from 'react-native';
import { colours } from '../../styles';

const Label = ({text}) => {
  return (
    <Text style={styles.label}>{text}</Text>
  )
}

const styles = StyleSheet.create({
  label: {
    color: colours.white,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 12,
  },
})

export default Label;