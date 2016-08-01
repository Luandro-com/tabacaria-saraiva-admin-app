/*
 *
 * StockPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectStockPage from './selectors';
import { remove } from './actions';

import SearchNavBar from 'containers/SearchNavBar';
import StockList from 'components/StockList';

export class StockPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <SearchNavBar />
        <StockList {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = selectStockPage();

function mapDispatchToProps(dispatch) {
  return {
    remove: (id) => dispatch(remove(id)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StockPage);
