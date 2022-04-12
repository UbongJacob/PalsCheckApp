import React from 'react';
import {StyleSheet} from 'react-native';

import Screen from '../screen';
import AppText from '../appText';
import AppIcon from '../appIcon';
import colors from '../../Config/colors';
import fonts from '../../Config/fonts';
import AppButton from '../appButton';

const CheckMailScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppIcon
        name="email-multiple-outline"
        showMaterialCommunityIcons={true}
        color={colors.primary}
        size={110}
        style={{marginTop: -200}}
      />
      <AppText style={styles.title}>Check Your Mail</AppText>
      <AppText style={styles.text}>
        We have sent the password recovery instructions to your mail
      </AppText>

      <AppButton title="Ok" />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 35,
  },
  text: {
    textAlign: 'center',
    fontSize: 17,
    width: 300,
    marginBottom: 30,
  },
  title: {
    color: colors.primary,
    fontFamily: fonts.primaryBold,
    fontSize: 26,
    margin: 10,
  },
});

export default CheckMailScreen;
