import React from 'react';

import Container from '../components/Container';

import PageHeader from '../components/PageHeader';
import CurrentExercise from '../components/CurrentExercise';

const Workout = ({route}) => {
  const workout = route.params;
  return (
    <Container>
      <PageHeader back title={workout.name} />
      <CurrentExercise workout={workout} />
    </Container>
  )
}

export default Workout;
