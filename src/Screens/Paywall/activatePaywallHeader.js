import React from 'react';
import {StyleSheet} from 'react-native';

import AppText from '../../Components/appText';
import SubtitleLine from '../../Components/subtitleLine';
import colors from '../../Config/colors';
import fonts from '../../Config/fonts';

const ActivatePaywallHeader = () => {
  return (
    <>
      <AppText style={styles.title}>My PayWall</AppText>
      <SubtitleLine subtitle="Activate Paywall" />
      <AppText style={styles.description}>
        Make sure to fill your{' '}
        <AppText style={{color: colors.danger}}> Legal Info </AppText> as this
        will be used to process your transactions on palscheck
      </AppText>
    </>
  );
};

const styles = StyleSheet.create({
  description: {
    fontSize: 14,
    marginTop: 6,
  },
  title: {
    fontFamily: fonts.primaryBold,
    fontSize: 26,
    color: colors.black,
    marginBottom: 20,
  },
});

export default ActivatePaywallHeader;
