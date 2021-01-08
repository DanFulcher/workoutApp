import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colours} from '../../styles';

const Card = ({children}) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255,255,255, .3)',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  }
});

export default Card;
