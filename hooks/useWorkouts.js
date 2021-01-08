import {useState, useContext} from 'react';
import {Context} from '../store/workoutStore';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default () => {
  const [state, dispatch] = useContext(Context);
  const [loading, setLoading] = useState(false);

  const userWorkouts = state.workouts;
  const getWorkouts = async () => {
    setLoading(true);
    try {
      const localWorkouts = await AsyncStorage.getItem('workouts');
      localWorkouts != null && dispatch({type: 'SET_WORKOUTS', payload: JSON.parse(localWorkouts)})
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }

  removeValue = async () => {
    try {
      await AsyncStorage.removeItem('workouts')
    } catch(e) {
      // remove error
    }
  
    console.log('Done.')
  }
  return {
    getWorkouts,
    userWorkouts,
    removeValue,
    loading
  }
}