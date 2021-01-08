import React from 'react';
import {ScrollView, TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {colours} from '../styles';


import useNewWorkout from '../hooks/useNewWorkout';

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
    <ScrollView
      contentContainerStyle={styles.scrollView}>
      <View style={styles.body}>
        <PageHeader back title="New Workout">
          <TouchableOpacity onPress={() => saveWorkout()}>
            <Text style={styles.headerCTA}>
              Finish &amp; Save
            </Text>
          </TouchableOpacity>
        </PageHeader>
        <Input label="Workout Name" value={workoutName} placeholder="eg. Getting Dench" onChange={setWorkoutName} />
        <NewExercise />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
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