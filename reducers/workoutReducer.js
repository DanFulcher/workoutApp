const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return {
        ...state,
        workouts: action.payload
      }
    case 'SET_NEW_EXERCISE':
        return {
            ...state,
            newExercises: action.payload
        };
    default:
        return state;
  }
};

export default Reducer;