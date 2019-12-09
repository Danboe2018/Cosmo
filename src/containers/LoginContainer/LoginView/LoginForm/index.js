import React from 'react';
import PropTypes from 'prop-types';
import {View, KeyboardAvoidingView} from 'react-native';
import * as globals from '../../../../lib/globals';
import {styles} from '../styles';
import Email from './Email';
import Password from './Password';
import Button from '../../../../components/Button';

const LoginForm = (props) => {
  const {
    onLoginButtonPress,
    onRegisterButtonPress,
    email,
    setEmail,
    password,
    setPassword
  } = props;

  return (
    <KeyboardAvoidingView style={styles.loginScreen} behavior='padding'>
      <View style={styles.loginContainer}>
        <View style={styles.loginView}>
          <Email
            email={email}
            setEmail={setEmail}
          />
          <Password
            password={password}
            setPassword={setPassword}
          />
          <Button
            buttonType={globals.BUTTON_TYPE.loginButton}
            customButtonStyle={{marginTop: 10}}
            buttonSize={{width: '95%', height: '25%'}}
            buttonOnPress={onLoginButtonPress}
            buttonTitle={globals.BUTTON_TITLE.loginTitle}
          />
          <Button
            buttonType={globals.BUTTON_TYPE.registerButton}
            customButtonStyle={{marginTop: 10}}
            buttonSize={{width: '95%', height: '25%'}}
            buttonOnPress={onRegisterButtonPress}
            buttonTitle={globals.BUTTON_TITLE.registerTitle}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  )
};

LoginForm.propTypes = {
  onLoginButtonPress: PropTypes.func,
  onRegisterButtonPress: PropTypes.func,
  email: PropTypes.string,
  setEmail: PropTypes.func,
  password: PropTypes.string,
  setPassword: PropTypes.func
};

export default LoginForm;
