import * as React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from './src/Screens/Authentication/auth';

const Stack = createNativeStackNavigator();

//  const App = () => {
//    const isDarkMode = useColorScheme() === 'dark';

//    return (
//      <Provider store={store}>
//        <NavigationContainer>
//          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//          <Stack.Navigator>
//            <Stack.Screen name="Auth" component={Auth} />
//          </Stack.Navigator>
//        </NavigationContainer>
//      </Provider>

//    );
//  };

import ForgotPasswordScreen from './src/Components/Registration/forgotPasswordScreen';
import CheckMailScreen from './src/Components/Registration/checkMailScreen';
import RegisterScreen1 from './src/Components/Registration/registerScreen1';
import RegisterScreen2 from './src/Components/Registration/registerScreen2';

import NewPasswordScreen from './src/Components/Registration/newPasswordScreen';
import OTPScreen from './src/Components/Registration/OTPScreen';
import PaywallPinScreen from './src/Screens/Paywall/paywallPinScreen';
import ActivatePaywallScreen2 from './src/Screens/Paywall/activatePaywallScreen2';
import AppDatePicker from './src/Components/appDatePicker';

const App = () => {
  return <ActivatePaywallScreen2 />;
};

export default App;
