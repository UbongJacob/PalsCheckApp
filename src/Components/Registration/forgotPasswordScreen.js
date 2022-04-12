import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import * as Yup from 'yup';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppText from '../../Components/appText';
import Screen from '../../Components/screen';
import colors from '../../Config/colors';
import fonts from '../../Config/fonts';
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from '../../Components/Forms';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
});

const handleSubmit = () => {
  console.warn('Forgot password sent to your mail');
};

const ForgotPasswordScreen = () => {
  const [error, setError] = useState();
  return (
    <Screen style={styles.container}>
      <MaterialCommunityIcons
        name="lock-alert-outline"
        color={colors.primary}
        size={100}
      />
      <AppText style={styles.header}>Forgot your Password?</AppText>

      <View style={styles.subtitleContainer}>
        <AppText style={{fontSize: 17}}>
          Enter your registered email below to receive password reset
          instructions
        </AppText>
      </View>
      <AppForm
        initialValues={{
          firstName: '',
          lastName: '',
          phoneNumber: '',
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        <ErrorMessage error={error} visible={error} />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="E-mail"
          textContentType="emailAddress"
        />

        <View style={styles.buttonContainer}>
          <SubmitButton title="Send" />
        </View>
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {marginTop: 37, width: '100%'},
  container: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
  },
  header: {
    color: colors.primary,
    fontFamily: fonts.primaryBold,
    fontSize: 30,
  },
  subtitleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    marginBottom: 50,
  },
});

export default ForgotPasswordScreen;
