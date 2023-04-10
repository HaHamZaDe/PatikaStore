import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import PCard from './components/productCards/pCard';
import PData from './components/pData.json';
import SearchBar from './components/searchBar/searchBar';

const App = () => {
  const [productList, setProductList] = useState(PData);

  const renderPruduct = ({item}) => <PCard product={item} />;
  const handleSearch = text => {
    const filteredList = PData.filter(product => {
      const searchedText = text.toLowerCase();
      const currentTitle = product.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;
    });
    setProductList(filteredList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>PatikaStore</Text>

      <SearchBar onSearch={handleSearch} />

      <FlatList
        horizontal={false}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        data={productList}
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
