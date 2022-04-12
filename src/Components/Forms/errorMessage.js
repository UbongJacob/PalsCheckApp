import React from 'react';
import {StyleSheet} from 'react-native';
import AppText from '../appText';

function ErrorMessage({error, visible}) {
  if (!visible || !error) return null;
  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {color: 'red', textAlign: 'left', width: '100%', marginLeft: 5},
});

export default ErrorMessage;
