import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import colors from '../Config/colors';
import fonts from '../Config/fonts';
import AppText from './appText';

function AppButton({
  buttonStyles,
  textStyles,
  title,
  onPress,
  color = 'primary',
}) {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: colors[color]}, buttonStyles]}
      onPress={onPress}>
      <AppText style={[styles.text, textStyles]}>{title}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 7,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.primaryBold,
  },
});

export default AppButton;
