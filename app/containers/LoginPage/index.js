/*
 *
 * LoginPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectLoginPage from './selectors';
import { login } from './actions';

import LoginForm from 'components/LoginForm';

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { userLogin } = this.props;
    return (
      <LoginForm login={userLogin} />
    );
  }
}

const mapStateToProps = selectLoginPage();

function mapDispatchToProps(dispatch) {
  return {
    userLogin: (e) => {
      e.preventDefault();
      dispatch(login());
    },
    dispatch,
  };
}

LoginPage.propTypes = {
  userLogin: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
