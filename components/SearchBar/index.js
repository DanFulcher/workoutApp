import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {colours} from '../../styles';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState();
  return (
    <TextInput
      style={styles.search}
      value={searchTerm}
      placeholder="Search Workouts"
      placeholderTextColor="#fff" 
      onChange={(text) => setSearchTerm(text)}
    />
  );
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: `rgba(255, 255, 255, .1)`,
    borderRadius: 10,
    color: colours.white,
    paddingHorizontal: 20,
    marginBottom: 20,
  }
})

export default SearchBar;