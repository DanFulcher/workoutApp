import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {colours} from '../styles';

import useNewWorkout from '../hooks/useNewWorkout';

import Container from '../components/Container';
import PageHeader from '../components/PageHeader';
import Input from '../components/Fields/Text';
import NewExercise from '../components/NewExercise';

const NewWorkout = () => {
  const {
    workoutName,
    setWorkoutName,
    saveWorkout,
  } = useNewWorkout();
  return (
    <Container>
      <PageHeader back title="New Workout">
          <TouchableOpacity onPress={() => saveWorkout()}>
            <Text style={styles.headerCTA}>
              Finish &amp; Save
            </Text>
          </TouchableOpacity>
        </PageHeader>
        <Input label="Workout Name" value={workoutName} placeholder="eg. Getting Dench" onChange={setWorkoutName} />
        <NewExercise />
    </Container>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    flexGrow: 1,
  },
  body: {
    backgroundColor: colours.bg,
    height: '100%',
    paddingHorizontal: 20,
    position: 'relative',
  },
  headerCTA: {
    fontFamily: 'OpenSans-Bold',
    color: colours.primary,
  }
});
export default NewWorkout;