import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { colours } from '../../../styles';
import { useNavigation } from '@react-navigation/native';

const Workout = ({data}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Workout Details', data)}>
      <View style={styles.workout}>
        <Text style={styles.workoutName}>
          {data.name}
        </Text>
        <Text style={styles.workoutDetail}>Exercises: {data.exercises.length}</Text>
      </View>
    </TouchableOpacity>
    
  );
}

const styles = StyleSheet.create({
  workout: {
    backgroundColor: 'rgba(255, 255, 255, .3)',
    borderRadius: 10,
    padding: 15,
  },
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