import React, {useState} from 'react';
import {ScrollView, View, Pressable, Image, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AppText from '../Components/appText';
import Screen from '../Components/Screen';
import colors from '../Config/colors';
import fonts from '../Config/fonts';
import StoriesBoxList from '../Components/HomeScreen/Stories';
import Post from '../Components/HomeScreen/Post';

const HomeScreen = () => {
  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="user" color={colors.primary} size={35} />
        <AppText style={styles.title}>PalsCheck</AppText>

        <View style={styles.iconGroup}>
          <FontAwesome
            name="send"
            color={colors.primary}
            size={25}
            style={{marginRight: 10}}
          />
          <MaterialCommunityIcons
            name="text-search"
            color={colors.primary}
            size={30}
          />
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <StoriesBoxList />
      </View>
      <Post />
    </Screen>
  );
};

const styles = StyleSheet.create({
  iconGroup: {
    flexDirection: 'row',
  },
  container: {
    padding: 10,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -5,
    marginBottom: 10,
  },

  title: {
    fontSize: 28,
    fontFamily: fonts.secondary,
    marginLeft: 40,
  },
});
export default HomeScreen;
