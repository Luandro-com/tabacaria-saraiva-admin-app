/*
 *
 * TransactionsPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import TransactionsList from 'components/TransactionsList';

import selectTransactionsPage from './selectors';
import { load } from './actions';

export class TransactionsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    loadTransactions: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 1,
    };
  }

  componentDidMount() {
    this.props.loadTransactions();
  }

  handleTabChange = (value) => {
    this.setState({
      currentTab: value,
    });
  }

  render() {
    const { currentTab } = this.state;
    return (
      <div>
        <TransactionsList
          {...this.props}
          tab={currentTab}
          handleTabChange={this.handleTabChange}
        />
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
