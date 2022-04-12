import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import * as Yup from 'yup';

import {AppForm, AppFormField, ErrorMessage, SubmitButton} from '../Forms';

import AppText from '../appText';
import Screen from '../../Components/screen';
import colors from '../../Config/colors';
import fonts from '../../Config/fonts';
import RegistrationScreenHeader from './registrationScreenHeader';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
  phoneNumber: Yup.string().required().min(11).label('Phone Number'),
});

const RegisterScreen2 = () => {
  const [error, setError] = useState();
  const [hidePassword, setHidePassword] = useState(true);

  const data = [
    {value: 'Male', icon: 'male'},
    {value: 'Female', icon: 'female'},
  ];

  const handleSubmit = userInfo => {
    console.warn('registration successful', userInfo);
  };
  return (
    <Screen style={styles.container}>
      <RegistrationScreenHeader progressText="2/2" />

      <AppForm
        initialValues={{
          email: '',
          phoneNumber: '',
          password: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        <ErrorMessage error={error} visible={error} />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          name="email"
          placeholder="E-mail"
          textContentType="emailAddress"
          showAntDesign
          iconName="mail"
          iconSize={20}
        />
        <AppFormField
          name="phoneNumber"
          placeholder="Phone Number"
          keyboardType="phone-pad"
          maxLength={14}
          showFontAwesome5
          iconName="phone-alt"
          iconSize={20}
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="password"
          placeholder="Password"
          secureTextEntry={hidePassword}
          textContentType="password"
          showSimpleLineIcons
          iconName="lock-open"
          iconSize={20}
          showEyeIcon
          onSelect={value => setHidePassword(value)}
          iconState={hidePassword}
        />
        <SubmitButton title="Register" />
      </AppForm>

      <View style={styles.textView}>
        <AppText style={styles.text}>Already have an account? </AppText>
        <AppText style={{color: colors.primary}}> Login</AppText>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    padding: 35,
  },
  text: {
    color: colors.black,
    fontFamily: fonts.primaryBold,
  },
  textView: {marginVertical: 20, flexDirection: 'row'},
});

export default RegisterScreen2;
