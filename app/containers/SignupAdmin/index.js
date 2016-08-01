/*
 *
 * SignupAdmin
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectSignupAdmin from './selectors';
import { signup, reset } from './actions';

import SimpleNavbar from 'components/SimpleNavbar';
import SignupForm from 'components/SignupForm';

export class SignupAdmin extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    formSubmit: React.PropTypes.func.isRequired,
    loading: React.PropTypes.bool,
    success: React.PropTypes.bool.isRequired,
    reset: React.PropTypes.func.isRequired,
  }

  render() {
    const { formSubmit, reset, loading, success } = this.props;
    const title = 'Cadastrar Gerente';
    return (
      <div>
        <SimpleNavbar title={title} />
        <SignupForm success={success} loading={loading} reset={reset} submit={formSubmit} />
      </div>
    );
  }
}

const mapStateToProps = selectSignupAdmin();

function mapDispatchToProps(dispatch) {
  return {
    formSubmit: (e) => {
      e.preventDefault();
      dispatch(signup());
    },
    reset: () => dispatch(reset()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupAdmin);
