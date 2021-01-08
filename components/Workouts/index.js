import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colours} from '../../styles';

const Workouts = ({data}) => {
  console.log('workouts', data)
  return (
    <View style={styles.body}>
      {data.length && data.map(workout => (
        <Text>{workout.name}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  
});

export default Workouts;