import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import * as Yup from 'yup';

import {AppForm, AppFormField, ErrorMessage, SubmitButton} from '../Forms';
import RadioButton from '../radioButton';
import AppText from '../appText';
import Screen from '../screen';
import colors from '../../Config/colors';
import RegistrationScreenHeader from './registrationScreenHeader';

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
});

const RegisterScreen1 = () => {
  const [error, setError] = useState();
  const [genderError, setGenderError] = useState();
  const [option, setOption] = useState(null);

  const data = [
    {value: 'Male', icon: 'male'},
    {value: 'Female', icon: 'female'},
  ];

  const handleSubmit = userInfo => {
    if (option == null) return setGenderError(true);

    const newInfo = {...userInfo, gender: option};
    console.warn('Next clicked', newInfo);
  };
  return (
    <Screen style={styles.container}>
      <RegistrationScreenHeader progressText="1/2" />

      <AppForm
        initialValues={{
          firstName: '',
          lastName: '',
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
        />
        <AppFormField
          autoCapitalize="words"
          name="lastName"
          placeholder="Last Name"
          textContentType="name"
          showFontAwesome
          iconSize={20}
        />

        <RadioButton
          data={data}
          onSelect={value => {
            setOption(value);
            setGenderError(false);
          }}
        />
        <ErrorMessage error={'Please Choose A Gender'} visible={genderError} />
        <SubmitButton title="Next" />
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
  textView: {marginVertical: 20, flexDirection: 'row'},
});

export default RegisterScreen1;
