import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import colors from '../Config/colors';

function Screen({children, style}) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default Screen;
