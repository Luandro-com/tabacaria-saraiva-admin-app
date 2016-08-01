/**
*
* AddStockForm
*
*/

import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';

import { TextField } from 'redux-form-material-ui';
import SimpleNavbar from 'components/SimpleNavbar';
import RaisedButton from 'material-ui/RaisedButton';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import Check from 'material-ui/svg-icons/navigation/check';

import styles from './styles.css';

const style = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

function AddStockForm({ add, loading, success }) {
  const button = loading
  ? <RefreshIndicator
    size={50}
    left={70}
    top={0}
    loadingColor={"#FF9800"}
    status="loading"
    style={style.refresh}
  />
  : <RaisedButton className={styles.button} secondary type="submit" label="Finalizar" />;

  return (
    <div className={styles.container}>
      <SimpleNavbar back="/estoque" title="Criar novo produto" />
      <form className={styles.form} onSubmit={add}>
        <Field name="name" type="text" component={TextField} floatingLabelText="Nome do produto" /><br />
        <Field name="price" type="text" component={TextField} floatingLabelText="Preço do produto" /><br />
        <Field name="stock" type="text" component={TextField} floatingLabelText="Quantidade em estoque" /><br />
        <Field name="notification" type="text" component={TextField} floatingLabelText="Aviso de estoque" /><br />
        {button}
        {success && <Check color={'green'} />}
      </form>
    </div>
  );
}

AddStockForm.propTypes = {
  add: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool.isRequired,
  success: React.PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'stockForm',
})(AddStockForm);
