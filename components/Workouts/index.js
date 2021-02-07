import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colours} from '../../styles';

import Workout from './Workout';

const Workouts = ({data}) => {
  return (
    <View style={styles.body}>
      {data.length && data.map(workout => (
        <Workout key={workout.name} data={workout} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  
});

export default Workouts;