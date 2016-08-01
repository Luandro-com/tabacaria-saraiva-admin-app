/**
*
* SignupForm
*
*/

import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';

import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import Logo from 'components/LoginForm/logo.png';

import styles from './styles.css';

function SignupForm({ submit, reset, loading, success }) {
  const button = loading
    ? <RefreshIndicator
      size={50}
      left={70}
      top={0}
      loadingColor={"#FF9800"}
      status="loading"
    />
    : <RaisedButton type="submit" label="Login" />;

  return (
    <div className={styles.container}>
      <img src={Logo} alt="Tabacaria Saraiva" /><br />
      {success && <h1>Usuário criado com sucesso</h1>}
      <form onSubmit={submit}>
        <Field name="email" type="text" component={TextField} hintText="luandro@gmail.com" floatingLabelText="E-mail" floatingLabelFixed /><br />
        <Field name="password" type="password" component={TextField} floatingLabelText="Senha" floatingLabelFixed /><br />
        {button}
      </form>
    </div>
  );
}

SignupForm.propTypes = {
  submit: React.PropTypes.func.isRequired,
  reset: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  success: React.PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'adminForm',
})(SignupForm);
