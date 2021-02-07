import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {colours} from '../../styles';

const Button = ({onPress, onLongPress, text, noFill}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <View style={[styles.button, noFill && styles.noFill]}>
        <Text style={styles.button_text}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colours.primary,
    padding: 15,
    borderRadius: 10,
    width: 'auto',
  },
  noFill: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colours.primary,
  },
  button_text: {
    color: colours.white,
    fontFamily: 'OpenSans-SemiBold',
    textAlign: 'center',
  }
})

export default Button;
