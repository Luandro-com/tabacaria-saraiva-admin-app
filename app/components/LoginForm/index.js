/**
*
* LoginForm
*
*/

import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';

import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import Logo from './logo.png';

import styles from './styles.css';

function LoginForm({ login }) {
  return (
    <div className={styles.container}>
      <img src={Logo} alt="Tabacaria Saraiva" /><br />
      <form onSubmit={login}>
        <Field name="email" type="text" component={TextField} hintText="luandro@gmail.com" floatingLabelText="E-mail" /><br />
        <Field name="password" type="password" component={TextField} floatingLabelText="Senha" /><br />
        <RaisedButton type="submit" label="Login" />
      </form>
    </div>
  );
}

LoginForm.propTypes = {
  login: React.PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'loginForm',
})(LoginForm);
