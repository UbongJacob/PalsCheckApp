import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import AppText from '../appText';
import fonts from '../../Config/fonts';
import Screen from '../screen';
import colors from '../../Config/colors';
import {AppForm, AppFormField, ErrorMessage, SubmitButton} from '../Forms';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  OTP: Yup.string().required().min(6).label('OTP').max(6),
});

const OTPScreen = () => {
  const [error, setError] = useState();

  const handleSubmit = userInput => {
    console.warn('OTP INPUTED ', userInput);
  };

  return (
    <Screen style={styles.container}>
      <AppText style={styles.text}> OTP </AppText>
      <AppText style={styles.text}> CODE </AppText>
      <AppText style={styles.subtext}> VERIFICATION </AppText>
      <AppText style={styles.subtitle}>
        Enter the one time password sent to
      </AppText>
      <AppText style={styles.subtitle}>+234 816 111 666 11</AppText>

      <AppForm
        initialValues={{OTP: ''}}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        <ErrorMessage error={error} visible={error} />
        <AppFormField
          name="OTP"
          keyboardType="phone-pad"
          maxLength={6}
          height={70}
          width={300}
          marginTop={80}
        />
        <SubmitButton title="Verify Code" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    marginTop: -50,
  },
  text: {
    fontFamily: fonts.primaryBold,
    color: colors.primary,
    fontSize: 50,
    letterSpacing: 5,
  },
  subtext: {
    color: colors.primary,
    fontSize: 20,
    fontFamily: fonts.primaryBold,
  },
});

export default OTPScreen;
