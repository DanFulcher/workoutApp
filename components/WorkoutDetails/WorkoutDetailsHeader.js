import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colours} from '../../styles';
import PageTitle from '../PageHeader/PageTitle';

const WorkoutDetailsHeader = ({data}) => {
  return (
    <View style={styles.workoutInfo}>
      <PageTitle value={data.name} centered/>
      <View style={styles.workoutMetaContainer}>
        <View syele={styles.workoutMeta}>
          <Text style={styles.workoutMeta__value}>{data.created_at ? data.created_at : '2/2/21'}</Text>
          <Text style={styles.workoutMeta__key}>Workout created</Text>
        </View>
        <View syele={styles.workoutMeta}>
          <Text style={styles.workoutMeta__value}>{data.best_time ? data.best_time : '0:31:49'}</Text>
          <Text style={styles.workoutMeta__key}>Best Time</Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  workoutMetaContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '75%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
  },
  workoutMeta__value: {
    textAlign: 'center',
    color: colours.white,
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
  },
  workoutMeta__key: {
    textAlign: 'center',
    color: colours.white,
  },
});
export default WorkoutDetailsHeader;