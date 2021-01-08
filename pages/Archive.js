import React, {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {colours} from '../styles';

import PageHeader from '../components/PageHeader';
import useWorkouts from '../hooks/useWorkouts';
import SearchBar from '../components/SearchBar';
import NoData from '../components/NoData';
import Workouts from '../components/Workouts';
import CornerButton from '../components/CornerButton';

const Archive = ({navigation}) => {
  const {getWorkouts, userWorkouts, removeValue, loading} = useWorkouts();

  useFocusEffect(
    useCallback(() => {
      // removeValue();
      getWorkouts();
    }, []),
  )
  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}>
      <View style={styles.body}>
        <PageHeader title="My Workouts" />
        <SearchBar />
        {userWorkouts && userWorkouts.length === 0 ? <NoData message="You don't currently have any workouts" /> : <Workouts data={userWorkouts} /> }
        <CornerButton text="New Workout" onPress={() => navigation.navigate('New Workout')} />
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
});
export default Archive;