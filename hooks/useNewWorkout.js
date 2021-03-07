import {useState, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {Context} from '../store/workoutStore';


export default () => {
  const [state, dispatch] = useContext(Context);
  const navigation = useNavigation();

  const exercises = state.newExercises;

  //default state for a new exercise
  const initExercise = {
    name: '',
    description: '',
    durationType: 'reps',
    duration: 0,
    sets: 1,
    rest: 10,
    setsComplete: 0
  };
  const [workoutName, setWorkoutName] = useState('');
  const [step, setStep] = useState(0);

  // New Exercise State
  const [activeExercise, setActiveExercise] = useState(initExercise);
  const onNameChange = (value) => {
    setActiveExercise({
      ...activeExercise,
      name: value,
    })
  }
  const onDescChange = (value) => {
    setActiveExercise({
      ...activeExercise,
      description: value,
    })
  }
  const onDurationTypeChange = (value) => {
    setActiveExercise({
      ...activeExercise,
      durationType: value,
    })
  }
  const onDurationChange = (value) => {
    setActiveExercise({
      ...activeExercise,
      duration: value,
    })
  }
  const onSetsChange = (value) => {
    setActiveExercise({
      ...activeExercise,
      sets: value,
    })
  }
  const onRestChange = (value) => {
    setActiveExercise({
      ...activeExercise,
      rest: value,
    })
  }
  const backStep = () => {
    setStep(step-1);
    setActiveExercise(exercises[step-1])
  }

  const addExercise = () => {
    console.log(exercises.length, step)
    if(exercises.length !== 0) {
      const updatedExercises = []
      for(let i = 0; i <= exercises.length; i++) {
        if(i !== step) {
          updatedExercises.push(exercises[i])
        } if(i === step) {
          updatedExercises.push(
            activeExercise
          )
        }
      }
      dispatch({type: 'SET_NEW_EXERCISE', payload: updatedExercises})
    } else {
      dispatch({type: 'SET_NEW_EXERCISE', payload: [activeExercise]})
    }
    setActiveExercise(exercises.length <= step+1 ? initExercise : exercises[step+1]);
    setStep(step+1);
  }

  const saveWorkout = async () => {
    const workout = {
      name: workoutName,
      exercises: exercises
    }
    try {
      const jsonValue = await AsyncStorage.getItem('workouts');
      let currentWorkouts = jsonValue != null ? JSON.parse(jsonValue) : [];
      currentWorkouts.push(workout);
      try {
        const newLocalWorkouts = JSON.stringify(currentWorkouts);
        await AsyncStorage.setItem('workouts', newLocalWorkouts);
        navigation.navigate('Home');
      } catch (e) {
        console.log(e);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return {
    workoutName,
    setWorkoutName,
    step,
    setStep,
    activeExercise,
    onNameChange,
    onDescChange,
    onDurationTypeChange,
    onDurationChange,
    onSetsChange,
    onRestChange,
    addExercise,
    backStep,
    saveWorkout,
  }
}