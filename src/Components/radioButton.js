import React, {useState} from 'react';
import {View, Pressable, StyleSheet} from 'react-native';

import AppText from './appText';
import AppIcon from './appIcon';
import colors from '../Config/colors';

export default function RadioButton({data, onSelect}) {
  const [userOption, setUserOption] = useState(null);
  const selectHandler = value => {
    onSelect(value);
    setUserOption(value);
  };

  return (
    <>
      <View style={styles.container}>
        {data.map((item, index) => {
          return (
            <Pressable
              key={index}
              onPress={() => selectHandler(item.value)}
              style={styles.contentContainer}>
              <AppIcon
                name={item.icon}
                size={30}
                style={{marginHorizontal: 5}}
                showFontisto
              />
              <AppText style={{fontSize: 18, marginHorizontal: 5}}>
                {item.value}
              </AppText>

              <View style={styles.boxOutline}>
                <View
                  style={
                    item.value === userOption ? styles.innerBox : null
                  }></View>
              </View>
            </Pressable>
          );
        })}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 15,
  },
  innerBox: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: colors.primary,
  },
  boxOutline: {
    height: 18,
    width: 18,
    borderRadius: 9,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.primaryLight,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
  },
});
