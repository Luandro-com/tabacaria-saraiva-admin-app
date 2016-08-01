/*
 *
 * SignupManager
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectSignupManager from './selectors';

import SimpleNavbar from 'components/SimpleNavbar';
import SignupForm from 'components/SignupForm';

export class SignupManager extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const title = 'Cadastrar Gerente';
    return (
      <div>
         <SimpleNavbar title={title} />
      </div>
    );
  }
}

const mapStateToProps = selectSignupManager();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupManager);
