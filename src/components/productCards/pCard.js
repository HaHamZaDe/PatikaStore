import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './pCardStyle';

const PCard = props => {
  const {title, imgURL, price, inStock} = props.product;

  return (
    <View style={styles.container}>
      <View style={styles.imgcontainer}>
        <Image style={styles.image} source={{uri: imgURL}} />
      </View>
      <View style={styles.textcontainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
        {!inStock && <Text style={styles.stock}>STOKTA YOK</Text>}
      </View>
    </View>
  );
};

export default PCard;
