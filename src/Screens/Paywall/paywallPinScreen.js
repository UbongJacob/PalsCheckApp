import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import * as Yup from 'yup';

import AppText from '../../Components/appText';
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from '../../Components/Forms';
import Screen from '../../Components/screen';
import SubtitleLine from '../../Components/subtitleLine';
import colors from '../../Config/colors';
import fonts from '../../Config/fonts';

const PaywallPinScreen = () => {
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
    if (userInfo.createPin != userInfo.confirmPin) {
      setErrorMessage('Pin does not match');
      setPasswordError(true);
      return;
    }

    console.warn(userInfo);
  };

  const validationSchema = Yup.object().shape({
    createPin: Yup.string().required().min(4).label('Create Pin'),
    confirmPin: Yup.string().required().min(4).label('Confirm Pin'),
  });

  return (
    <Screen style={styles.container}>
      <AppText style={styles.title}>Set PayWall Pin</AppText>
      <SubtitleLine subtitle="Create Your 4 Digits PayWall Pin" />
      <AppText style={styles.description}>
        Note this pin will be your authorization for any transaction on
        PalsCheck, so keep it safe and secured
      </AppText>

      <AppForm
        initialValues={{
          createPin: '',
          confirmPin: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        <ErrorMessage error={error} visible={error} />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="createPin"
          placeholder="Create pin"
          secondaryPlaceholder="Create pin"
          secureTextEntry={hidePassword}
          textContentType="password"
          showSimpleLineIcons
          showEyeIcon
          iconName="lock-open"
          iconSize={20}
          iconState={hidePassword}
          onSelect={value => value}
          marginTop={15}
          maxLength={4}
          keyboardType="number-pad"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="confirmPin"
          placeholder="Confirm Pin"
          secondaryPlaceholder="Confirm Pin"
          secureTextEntry={hidePassword}
          textContentType="password"
          showSimpleLineIcons
          showEyeIcon
          iconName="lock-open"
          iconSize={20}
          onSelect={value => setHidePassword(value)}
          iconState={hidePassword}
          keyboardType="number-pad"
          maxLength={4}
        />

        <ErrorMessage error={errorMessage} visible={passwordError} />
        <SubmitButton title="Done" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  description: {
    fontSize: 14,
    marginTop: 14,
  },
  title: {
    fontFamily: fonts.primaryBold,
    fontSize: 26,
    color: colors.black,
    marginBottom: 20,
  },
});

export default PaywallPinScreen;
