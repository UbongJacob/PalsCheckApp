import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import * as Yup from 'yup';
import AppDatePicker from '../../Components/appDatePicker';

import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from '../../Components/Forms';
import Screen from '../../Components/screen';
import ActivatePaywallHeader from './activatePaywallHeader';

const validationSchema = Yup.object().shape({
  // securityQuestion: Yup.string()
  //   .required('First Name is required')
  //   .min(2)
  //   .max(255)
  //   .label('Security Question'),
  // securityAnswer: Yup.string()
  //   .required(' Security Answer is required')
  //   .min(2)
  //   .max(255)
  //   .label('Security Answer'),
  BVN: Yup.string().required('BVN is required').min(11).label('BVN'),
});

const ActivatePaywallScreen2 = () => {
  const [error, setError] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();

  const handleSubmit = userInfo => {
    userInfo = {...userInfo, dateOfBirth};
    console.warn('Next clicked', userInfo);
  };
  return (
    <Screen style={styles.container}>
      <ActivatePaywallHeader />
      <AppForm
        initialValues={{
          BVN: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        <ErrorMessage error={error} visible={error} />

        <AppFormField
          name="BVN"
          placeholder=" BVN"
          keyboardType="number-pad"
          maxLength={11}
          showFontAwesome
          iconSize={20}
          secondaryPlaceholder="BVN"
          marginTop={25}
        />

        <AppDatePicker
          onDateChange={value => setDateOfBirth(value)}
          showFontisto
          iconName="date"
          iconSize={20}
          placeholder="Date of Birth"
          secondaryPlaceholder="Date of Birth"
        />

        <SubmitButton title="Submit" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
});

export default ActivatePaywallScreen2;
