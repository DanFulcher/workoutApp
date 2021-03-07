import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { colours } from '../../styles';
import PageTitle from './PageTitle';

const PageHeader = ({
  back,
  title,
  children
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.pageHeader}>
      <View style={styles.pageHeader_section}>
        {back && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.goBack}>Back</Text>
          </TouchableOpacity>
        )}
        {title && (
          <PageTitle value={title} />
        )}
      </View>
      <View style={styles.pageHeader_section}>
        {children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  pageHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 50,
  },
  pageHeader_section: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  goBack: {
    color: colours.white,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    marginRight: 20,
  },
})

export default PageHeader;