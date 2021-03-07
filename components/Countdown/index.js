import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { colours } from '../../styles';

const Countdown = ({time, onFinished}) => {
  const [timeRemaining, setTime] = useState(time);
  useEffect(() => {
    if (!timeRemaining) onFinished();
    
    const interval = setInterval(() => {
      setTime(timeRemaining - 1)
    }, 100);

    return () => clearInterval(interval);
  }, [timeRemaining])

  return (
    <>
      <Text style={styles.countdownTitle}>Rest for</Text>
      <Text style={styles.countdownValue}>{timeRemaining} seconds</Text>
    </>
  )
}
const styles = StyleSheet.create({
  countdownTitle: {
    textAlign: 'center',
    color: colours.white,
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
  },
  countdownValue: {
    textAlign: 'center',
    color: colours.white,
    fontSize: 28,
    fontFamily: 'OpenSans-Light',
    marginBottom: 40,
  }
})
export default Countdown;