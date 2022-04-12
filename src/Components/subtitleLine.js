import React from 'react';
import {View, StyleSheet} from 'react-native';

import colors from '../Config/colors';
import fonts from '../Config/fonts';
import AppText from './appText';

const SubtitleLine = ({subtitle}) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>{subtitle}</AppText>
      <View style={styles.line}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'flex-end'},
  line: {
    backgroundColor: colors.lightGrey,
    height: 1,
    flex: 1,
    marginBottom: 8,
  },
  text: {
    color: colors.primary,
    fontFamily: fonts.primaryBold,
    fontSize: 18,
    marginRight: 10,
  },
});

export default SubtitleLine;
