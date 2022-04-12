import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';

import colors from '../../Config/colors';
import AppText from '../appText';

const RegistrationScreenHeader = ({progressText}) => {
  return (
    <View style={styles.headerContainer}>
      <AppText style={styles.header}>Create your Account</AppText>

      <ImageBackground
        source={require('../../../assets/images/Ellipse9.png')}
        style={styles.ellipse}>
        <AppText style={styles.progressText}> {progressText} </AppText>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  ellipse: {
    justifyContent: 'center',
    height: 75,
    width: 75,
    alignItems: 'center',
    marginTop: 10,
  },
  header: {
    fontSize: 36,
    color: colors.primary,
    width: 250,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 30,
    color: colors.primary,
  },
});

export default RegistrationScreenHeader;
