import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colours} from '../../styles';

import Card from '../Card';

const NoData = ({message}) => {
  return (
    <Card>
      <Text style={styles.noData}>{message}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  noData: {
    color: colours.white,
    textAlign: 'center',
    fontFamily: 'OpenSans-Regular',
  }
});

export default NoData;