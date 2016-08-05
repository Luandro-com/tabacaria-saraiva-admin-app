/*
 *
 * TransactionsPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectTransactionsPage from './selectors';
import { load } from './actions';
import TransactionsList from 'components/TransactionsList';

export class TransactionsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.loadTransactions();
  }

  render() {
    return (
      <div>
        <TransactionsList {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = selectTransactionsPage();

function mapDispatchToProps(dispatch) {
  return {
    loadTransactions: () => dispatch(load()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsPage);
