/*
 *
 * TransactionsPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectTransactionsPage from './selectors';

import TransactionsList from 'components/TransactionsList';

export class TransactionsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <TransactionsList />
      </div>
    );
  }
}

const mapStateToProps = selectTransactionsPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsPage);
