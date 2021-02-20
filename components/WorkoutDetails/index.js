import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {colours} from '../../styles';

import WorkoutDetailsHeader from './WorkoutDetailsHeader';
import Card from '../Card';

const WorkoutDetailsContainer = ({workoutData}) => (
  <>
    <WorkoutDetailsHeader data={workoutData} />
    {workoutData.exercises.map(({name, description, duration, durationType, sets}) => (
      <Card key={name}>
        <Text style={styles.exerciseTitle}>
          {durationType === 'reps'
          ? `${name} x ${duration}` 
          : `${name} for ${duration} seconds`}
        </Text>
        {description !== "" && <Text style={styles.exerciseDescription}>{description}</Text>}
        <Text style={styles.exerciseSets}>
          {`Sets: ${sets.toString()}`}
        </Text>
      </Card>
    ))}
  </>
);

const styles = StyleSheet.create({
  exerciseTitle: {
    color: colours.white,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
  },
  exerciseDescription: {
    color: colours.white,
    fontFamily: 'OpenSans-Light',
    fontSize: 14,
    marginBottom: 5,
  },
  exerciseSets: {
    color: colours.white,
    fontFamily: 'OpenSans-Light',
    fontSize: 18,
  }
});

export default WorkoutDetailsContainer;