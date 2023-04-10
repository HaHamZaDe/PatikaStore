import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './searchBar.styles';

const SearchBar = props => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Ara..." onChangeText={props.onSearch} />
    </View>
  );
};

export default SearchBar;
