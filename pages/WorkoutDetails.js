import React from 'react';

import Container from '../components/Container';

import PageHeader from '../components/PageHeader';
import WorkoutDetailsContainer from '../components/WorkoutDetails';

const WorkoutDetails = ({route}) => {
  const data = route.params;
  return (
    <Container>
      <PageHeader back />
      <WorkoutDetailsContainer workoutData={data} />
    </Container>
  )
}

export default WorkoutDetails;
