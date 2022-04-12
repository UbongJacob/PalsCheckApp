import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import * as Yup from 'yup';

import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from '../../Components/Forms';
import Screen from '../../Components/screen';
import ActivatePaywallHeader from './activatePaywallHeader';

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First Name is required')
    .min(2)
    .max(255)
    .label('First Name'),
  lastName: Yup.string()
    .required('Last Name is required')
    .min(2)
    .max(255)
    .label('Last Name'),
  accountNumber: Yup.string()
    .required('Account Number is required')
    .min(10)
    .label('Account Number'),
});

const ActivatePaywallScreen1 = () => {
  const [error, setError] = useState();

  const handleSubmit = userInfo => {
    console.warn('Next clicked', userInfo);
  };

  return (
    <Screen style={styles.container}>
      <ActivatePaywallHeader />

      <AppForm
        initialValues={{
          firstName: '',
          lastName: '',
          accountNumber: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        <ErrorMessage error={error} visible={error} />
        <AppFormField
          autoCapitalize="words"
          name="firstName"
          placeholder="First Name"
          textContentType="name"
          showFontAwesome
          iconSize={20}
          marginTop={25}
          secondaryPlaceholder="First Name"
        />

        <AppFormField
          autoCapitalize="words"
          name="lastName"
          placeholder="Last Name"
          textContentType="name"
          showFontAwesome
          iconSize={20}
          secondaryPlaceholder="Last Name"
        />

        <AppFormField
          name="accountNumber"
          placeholder=" Account Number"
          keyboardType="number-pad"
          maxLength={10}
          showAntDesign
          iconName="edit"
          iconSize={20}
          secondaryPlaceholder="Account Number"
        />
        <SubmitButton title="Next" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
});

export default ActivatePaywallScreen1;
