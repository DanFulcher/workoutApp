import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {colours} from '../styles';

import PageHeader from '../components/PageHeader';
import WorkoutDetailsHeader from '../components/WorkoutDetails/WorkoutDetailsHeader';
import Card from '../components/Card';

const WorkoutDetails = ({route}) => {
  const data = route.params;
  console.log(data);
  return (
    <ScrollView
      style={styles.scrollView}>
        <View style={styles.body}>
          <PageHeader back />
          <WorkoutDetailsHeader data={data} />
          {data.exercises.map(({name, description, duration, durationType, sets}) => (
            <Card>
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
    position: 'relative',
    paddingHorizontal: 20,
  },
  exerciseTitle: {
    color: colours.white,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 21,
  },
  exerciseDescription: {
    color: colours.white,
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
    marginBottom: 10,
  },
  exerciseSets: {
    color: colours.white,
    fontFamily: 'OpenSans-Light',
    fontSize: 18,
  }
});

export default WorkoutDetails;
