import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Switch, StyleSheet} from 'react-native';
import {colours} from '../../styles';
import Card from '../Card';
import Label from '../Fields/Label';
import Button from '../Button';

import useNewWorkout from '../../hooks/useNewWorkout';

const NewExercise = () => {
  const {
    step,
    activeExercise,
    onNameChange,
    onDescChange,
    onDurationTypeChange,
    onDurationChange,
    onSetsChange,
    onRestChange,
    addExercise,
    backStep,
  } = useNewWorkout();
  
  const [isEnabled, setIsEnabled] = useState();

  useEffect(() => {
    setIsEnabled(activeExercise.durationType === 'time' ? true : false)
  }, [activeExercise]);

  const toggleDurationType = () => {
    setIsEnabled(!isEnabled);
    onDurationTypeChange(!isEnabled ? 'time' : 'reps')
  }
  return (
    <>
      <Card>
        <Text style={styles.title}>Excercise {step+1}</Text>

        <Label text="Exercise Name" />
        <TextInput
          style={styles.input}
          value={activeExercise.name}
          placeholder="eg. Pull Ups"
          placeholderTextColor='rgba(255, 255, 255, .3)'
          onChangeText={(val) => onNameChange(val)}
        />
        
        <Label text="Exercise Details (optional)" />
        <TextInput
          style={styles.input}
          value={activeExercise.description}
          placeholder="eg. with 10kg added weight"
          placeholderTextColor='rgba(255, 255, 255, .3)'
          onChangeText={(val) => onDescChange(val)}
        />

        <Label text={`Duration ${isEnabled ? '(Secs)' : '(Reps)'}`} />
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            value={activeExercise.duration.toString()}
            onChangeText={(val) => onDurationChange(val)}
          />
          <View style={styles.toggelCont}>
            <Switch
              trackColor={{ false: colours.bg, true: colours.white }}
              thumbColor={isEnabled ? colours.primary : colours.white}
              onValueChange={() => toggleDurationType()}
              value={isEnabled}
              style={styles.toggle}
            />
            <Text style={styles.toggleText}>Reps/ Secs</Text>
          </View>
        </View>
        
        <Label text="Sets" />
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          value={activeExercise.sets.toString()}
          onChangeText={(val) => onSetsChange(val)}
        />
        <Label text='Rest (before next exercise)' />
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          value={activeExercise.rest.toString()}
          onChangeText={(val) => onRestChange(val)}
        />
      </Card>
      <View style={[styles.actions, step > 0 && styles.actions_row]}>
        {step > 0 && <Button noFill text="Back" onPress={() => backStep()}/>}
        <Button text="Next" onPress={() => addExercise()}/>
      </View>
  </>
  )
}

const styles = StyleSheet.create({
  title: {
    color: colours.white,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    fontFamily: 'OpenSans-Light',
    color: colours.white,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: colours.white,
    paddingVertical: 5,
    marginBottom: 20,
    minWidth: '75%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  row_input: {
    width: '45%',
    flexGrow: 1,
  },
  toggelCont: {
    marginLeft: 15,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
  },
  toggleText: {
    fontSize: 12,
    color: colours.white,
    fontFamily: 'OpenSans-SemiBold'
  },
  actions: {
    marginBottom: 20,
  },
  actions_row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default NewExercise;