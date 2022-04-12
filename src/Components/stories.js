import React from 'react';
import {View, Image, FlatList, StyleSheet, Pressable} from 'react-native';

import colors from '../config/colors';

import AppText from './appText';

const dummyData = [
  {
    name: 'Adalikwu Michael',
    image: require('../../assets/images/pic1.jpg'),
  },
  {
    name: 'Prince Randy',
    image: require('../../assets/images/pic2.jpg'),
  },
  {
    name: 'CTO',
    image: require('../../assets/images/pic3.jpg'),
  },
  {
    name: 'Bill Gates',
    image: require('../../assets/images/pic3.jpg'),
  },
  {
    name: 'Captain America',
    image: require('../../assets/images/pic1.jpg'),
  },
  {
    name: 'Mark Z',
    image: require('../../assets/images/pic2.jpg'),
  },
  {
    name: 'Johnathan',
    image: require('../../assets/images/pic3.jpg'),
  },
  {
    name: 'Sani Abacha',
    image: require('../../assets/images/pic2.jpg'),
  },
  {
    name: 'Buhari',
    image: require('../../assets/images/pic1.jpg'),
  },
  {
    name: 'Tinibu',
    image: require('../../assets/images/pic3.jpg'),
  },
];

const StoriesBox = ({image, name}) => {
  return (
    <Pressable style={styles.storiesBoxContainer}>
      <View style={styles.storiesBox}>
        <Image source={image} style={styles.image} />
      </View>
      <AppText style={styles.name} numberOfLines={1}>
        {name}
      </AppText>
    </Pressable>
  );
};

const StoriesBoxList = () => {
  return (
    <FlatList
      data={dummyData}
      renderItem={({item}) => (
        <StoriesBox image={item.image} name={item.name} />
      )}
      horizontal
      alwaysBounceHorizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  image: {height: 60, width: 60, borderRadius: 21},
  storiesBox: {
    height: 66,
    width: 66,
    borderWidth: 4,
    borderRadius: 21,
    borderColor: colors.danger,
    alignItems: 'center',
    justifyContent: 'center',
  },
  storiesBoxContainer: {
    alignItems: 'center',
    width: 83,
    marginTop: 6,
  },
  name: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default StoriesBoxList;
