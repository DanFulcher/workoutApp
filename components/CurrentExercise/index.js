import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Button from '../Button';
import Countdown from '../Countdown';
import {colours} from '../../styles';

const CurrentExercise = ({workout}) => {
  const [index, setIndex] = useState(0);
  const [rest, setRest] = useState(null);
  const [completedExercises, setCompleted] = useState(0);
  const [finished, setFinished] = useState(false);

  const activeExercise = workout.exercises[index];
  const nextEx = workout.exercises[index+1]
  const increment = () => {
    setRest(null);
    setIndex(index + 1 >= workout.exercises.length ? 0 : index + 1 );
  }

  useEffect(() => {
    if(completedExercises === workout.exercises.length) {
      setFinished(true);
    } else {
      if(activeExercise.setsComplete == parseFloat(activeExercise.sets)) {
        increment();
      }
    }
  }, [activeExercise]);

  const next = () => {
    activeExercise.setsComplete ? activeExercise.setsComplete++ : activeExercise.setsComplete = 1;
    if(activeExercise.setsComplete != activeExercise.sets) {
      setRest(activeExercise.rest)
    } else {
      setCompleted(completedExercises + 1);
      setRest(activeExercise.rest)
    }
  }
  const reset = () => {
    console.log('finsihed');
  }
  return (
    <View style={styles.exerciseContainer}>
      {finished ? (
        <>
          <Text style={styles.exerciseTitle}>Congratulations! You have finished {workout.name}!</Text>
          <Button text="Finish" onPress={() => reset()}/>
        </>
      ) : rest ? (
        <>
          <Countdown time={rest} onFinished={() => increment()} />
          <Text style={styles.exerciseSets}>Up next</Text>
          <Text style={styles.exerciseTitle}>
            {nextEx.durationType === 'reps'
            ? `${nextEx.name} x ${nextEx.duration}` 
            : `${nextEx.name} for ${nextEx.duration} seconds`}
          </Text>
        </>
      ) : (
        <>
          <Text style={styles.exerciseSets}>{`Set ${activeExercise.setsComplete + 1 || 1}/${activeExercise.sets}`}</Text>
          <Text style={styles.exerciseTitle}>
            {activeExercise.durationType === 'reps'
            ? `${activeExercise.name} x ${activeExercise.duration}` 
            : `${activeExercise.name} for ${activeExercise.duration} seconds`}
          </Text>
          {activeExercise.description !== '' && <Text style={styles.exerciseDesc}>{activeExercise.description}</Text>}
          <View style={styles.buttonRow}>
            <View style={styles.buttonCont}>
              <Button text="Next" onPress={() => next()} />
            </View>
          </View>
        </>
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  exerciseContainer: {
    marginTop: 90,
  },
  exerciseTitle: {
    textAlign: 'center',
    color: colours.white,
    fontFamily: 'OpenSans-Light',
    fontSize: 28,
  },
  exerciseDesc: {
    textAlign: 'center',
    color: colours.white,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    marginTop: 8,
  },
  exerciseSets: {
    color: colours.white,
    fontSize: 18,
    fontFamily: 'OpenSans-SemiBold',
    textAlign: 'center',
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonCont: {
    width: '75%',
  }
});

export default CurrentExercise;