import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {colours} from '../../styles';

const Container = ({children}) => (
  <ScrollView
    contentContainerStyle={styles.scrollView}>
    <View style={styles.body}>
      {children}
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  body: {
    backgroundColor: colours.bg,
    height: '100%',
    position: 'relative',
    paddingHorizontal: 20,
  },
});

export default Container;