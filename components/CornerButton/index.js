import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import {colours} from '../../styles';

const CornerButton = ({icon, text, onPress}) => {
  return(
    <TouchableOpacity onPress={onPress} style={styles.cornerButton}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cornerButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 50,
    backgroundColor: colours.primary,
    padding: 20,
  },
  buttonText: {
    color:  colours.white,
    fontFamily: 'OpenSans-SemiBold'
  }
});
export default CornerButton;
