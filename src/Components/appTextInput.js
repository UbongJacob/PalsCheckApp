import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Pressable} from 'react-native';
import colors from '../Config/colors';

import defaultStyles from '../Config/styles';
import AppIcon from './appIcon';
import AppText from './appText';

function AppTextInput({
  iconName,
  iconSize,
  onSelect,
  showEyeIcon,
  iconState,
  width = '100%',
  height,
  backgroundColor,
  marginTop,
  secondaryPlaceholder,
  ...otherProps
}) {
  const [hidePassword, setHidePassword] = useState(true);

  const selectHandler = value => {
    onSelect(value);
    setHidePassword(value);
  };

  if (secondaryPlaceholder && !backgroundColor) backgroundColor = colors.white;
  else if (backgroundColor) backgroundColor;
  else backgroundColor = colors.light;

  return (
    <View style={{marginTop}}>
      <View style={[styles.container, {height, backgroundColor, width}]}>
        {/* conditional rendering of any icon supported by the AppIcon component ... please check the AppIcon component for more info on how to use it  */}
        <AppIcon
          name={iconName}
          size={iconSize}
          style={styles.icon}
          {...otherProps}
        />

        <View style={{backgroundColor, flex: 1}}>
          <TextInput
            placeholderTextColor={colors.fade}
            style={defaultStyles.text}
            {...otherProps}
          />
        </View>

        {/* conditional rendering of the eye icon for the functionality of hide and reveal password */}
        {showEyeIcon && (
          <Pressable
            onPress={() => selectHandler(!hidePassword)}
            style={styles.secondaryIcon}>
            <AppIcon
              name={!iconState ? 'ios-eye-outline' : 'ios-eye-off-outline'}
              size={23}
              showIonicons
            />
          </Pressable>
        )}
      </View>

      {/* conditional rendering of the secondary placeholder which is normally in between the top border line */}
      {secondaryPlaceholder && (
        <AppText
          style={[
            styles.placeholderText,
            {backgroundColor},
          ]}>{`  ${secondaryPlaceholder}  `}</AppText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 1,
    marginVertical: 12,
    borderColor: colors.border,
    borderWidth: 1,
    height: 50,
  },
  icon: {
    alignSelf: 'center',
    marginHorizontal: 5,
  },
  secondaryIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  placeholderText: {
    position: 'absolute',
    left: 10,
    fontSize: 12.3,
  },
});

export default AppTextInput;
