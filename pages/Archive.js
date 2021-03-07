import React, {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {colours} from '../styles';

import Container from '../components/Container';
import PageHeader from '../components/PageHeader';
import useWorkouts from '../hooks/useWorkouts';
import NoData from '../components/NoData';
import Workouts from '../components/Workouts';
import CornerButton from '../components/CornerButton';

const Archive = ({navigation}) => {
  const {getWorkouts, userWorkouts, removeValue, loading} = useWorkouts();

  useFocusEffect(
    useCallback(() => {
      getWorkouts();
    }, []),
  )
  return (
    <Container>
      <PageHeader title="Welcome to Judy" />
        {
          userWorkouts && userWorkouts.length === 0 
          ? <NoData message="You don't currently have any workouts" /> 
          : <Workouts data={userWorkouts} />
        }
        <CornerButton text="New Workout" onPress={() => navigation.navigate('New Workout')} />
    </Container>
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
});
export default Archive;