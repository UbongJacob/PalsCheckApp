import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import * as Yup from 'yup';

import {AppForm, AppFormField, ErrorMessage, SubmitButton} from '../Forms';
import Screen from '../screen';
import AppText from '../appText';
import AppIcon from '../appIcon';
import colors from '../../Config/colors';
import fonts from '../../Config/fonts';

const NewPasswordScreen = () => {
  const [error, setError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [hidePassword, setHidePassword] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setErrorMessage(false);
    }, 7000);
  }, [errorMessage]);

  const handleSubmit = userInfo => {
    if (userInfo.newPassword != userInfo.confirmNewPassword) {
      setErrorMessage('Password does not match');
      setPasswordError(true);
      return;
    }
    if (userInfo.newPassword.includes(' ')) {
      setErrorMessage('Please your password should not contain spaces');
      setPasswordError(true);
      return;
    }

    console.warn(userInfo);
  };

  const validationSchema = Yup.object().shape({
    newPassword: Yup.string().required().min(4).label('New Password'),
    confirmNewPassword: Yup.string()
      .required()
      .min(4)
      .label('Confirm New Password'),
  });

  return (
    <Screen style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppIcon
          name="lock-open-variant-outline"
          showMaterialCommunityIcons={true}
          color={colors.primary}
          size={128}
          style={styles.icon}
        />

        <AppText style={styles.title}>Create new Password</AppText>

        <AppText style={{textAlign: 'center'}}>
          Enter your registred email below to receive password reset
          instructions
        </AppText>

        <AppForm
          initialValues={{
            newPassword: '',
            confirmNewPassword: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}>
          <ErrorMessage error={error} visible={error} />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="newPassword"
            placeholder="Enter new password"
            secureTextEntry={hidePassword}
            textContentType="password"
            showSimpleLineIcons
            showEyeIcon
            iconName="lock-open"
            iconSize={20}
            iconState={hidePassword}
            onSelect={value => setHidePassword(value)}
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="confirmNewPassword"
            placeholder="Confirm new password"
            secureTextEntry={hidePassword}
            textContentType="password"
            showSimpleLineIcons
            showEyeIcon
            iconName="lock-open"
            iconSize={20}
            onSelect={value => setHidePassword(value)}
            iconState={hidePassword}
          />

          <ErrorMessage error={errorMessage} visible={passwordError} />
          <SubmitButton title="Create" />
        </AppForm>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 31,
  },
  title: {
    color: colors.primary,
    fontFamily: fonts.primaryBold,
    fontSize: 30,
  },
  icon: {
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default NewPasswordScreen;
