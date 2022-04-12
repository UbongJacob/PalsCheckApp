import React, {useState} from 'react';
import {
  Modal,
  TouchableOpacity,
  Platform,
  View,
  StyleSheet,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

import AppText from './appText';
import AppTextInput from './appTextInput';
import colors from '../Config/colors';

const AppDatePicker = ({onDateChange, placeholder, ...otherProps}) => {
  const extendedDayJs = dayjs.extend(advancedFormat);
  const [date, setDate] = useState(extendedDayJs());
  const [show, setShow] = useState(false);
  const [placeholderPressed, setPlaceholderPressed] = useState(false);

  const onChange = (e, selectedDate) => setDate(dayjs(selectedDate));

  const onAndroidChange = (e, selectedDate) => {
    setShow(false);

    if (selectedDate) {
      setDate(dayjs(selectedDate));
      onDateChange(selectedDate);
    }
  };

  const renderDatePicker = () => {
    return (
      <DateTimePicker
        timeZoneOffsetInMinutes={0}
        value={new Date(date)}
        mode="date"
        minimumDate={
          new Date(dayjs().subtract(300, 'years').format('YYYY-MM-DD'))
        }
        maximumDate={
          new Date(dayjs().subtract(18, 'years').format('YYYY-MM-DD'))
        }
        onChange={Platform.OS === 'android' ? onAndroidChange : onChange}
      />
    );
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setShow(true);
          setPlaceholderPressed(true);
        }}>
        <View>
          <AppTextInput
            editable={false}
            placeholder={
              placeholderPressed
                ? date.format('  dddd,   Do   MMMM,   YYYY  ')
                : placeholder
            }
            {...otherProps}
          />

          {Platform.OS === 'android' && show && renderDatePicker()}

          {Platform.OS === 'ios' && (
            <Modal
              transparent={true}
              animationType="slide"
              visible={show}
              supportedOrientations={['portrait']}
              onRequestClose={() => setShow(false)}>
              <View style={{flex: 1}}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                  }}
                  visible={show}
                  onPress={() => setShow(false)}>
                  <TouchableOpacity
                    style={{
                      flex: 1,
                    }}
                    onPress={() => console.warn('Date Picker Clicked')}>
                    <View style={{backgroundColor: colors.white, height: 256}}>
                      <View style={{marginTop: 20}}>{renderDatePicker}</View>

                      <TouchableOpacity
                        onPress={() => {
                          setShow(false);
                        }}
                        style={[styles.btnText, styles.btnCancel]}>
                        <AppText>Cancel</AppText>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          onDateChange(date);
                          setShow(false);
                        }}
                        style={[styles.btnText, styles.btnCancel]}>
                        <AppText>Done</AppText>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                </TouchableOpacity>
              </View>
            </Modal>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

AppDatePicker.defaultProps = {};

const styles = StyleSheet.create({
  btnCancel: {
    left: 0,
  },
  btnDone: {
    right: 0,
  },
  btnText: {
    position: 'absolute',
    top: 0,
    height: 42,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppDatePicker;
