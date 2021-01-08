import React from 'react';
import {Text, StyleSheet} from 'react-native';
import { colours } from '../../styles';

const PageTitle = ({value}) => {
  return (
   <Text style={styles.pageTitle}>{value}</Text>
  )
}

const styles = StyleSheet.create({
  pageTitle: {
    fontSize: 28,
    color: colours.white,
    marginTop: 15,
    marginBottom: 15,
  }
})

export default PageTitle;