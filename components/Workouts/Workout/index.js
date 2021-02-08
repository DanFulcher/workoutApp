import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { colours } from '../../../styles';
import { useNavigation } from '@react-navigation/native';
import Card from '../../Card';

const Workout = ({data}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Workout Details', data)}>
      <Card>
        <Text style={styles.workoutName}>
          {data.name}
        </Text>
        <Text style={styles.workoutDetail}>Exercises: {data.exercises.length}</Text>
      </Card>
    </TouchableOpacity>
    
  );
}

const styles = StyleSheet.create({
  workoutName: {
    color: colours.white,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 18,
  },
  workoutDetail: {
    fontSize: 14,
    color: colours.white,
    fontFamily: 'OpenSans-Light'
  }
});

export default Workout;