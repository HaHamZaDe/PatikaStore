import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import PCard from './components/productCards/pCard';
import PData from './components/pData.json';

const App = () => {
  const renderPruduct = ({item}) => <PCard product={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>PatikaStore</Text>
      <TextInput style={styles.search} placeholder="Ara..." />

      <FlatList
        horizontal={false}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        data={PData}
        renderItem={renderPruduct}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },

  header: {
    color: '#800080',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  search: {
    backgroundColor: '#ECEFF1',
    margin: 5,
    borderRadius: 10,
    padding: 10,
  },
  body: {
    padding: 5,
  },
});

export default App;
