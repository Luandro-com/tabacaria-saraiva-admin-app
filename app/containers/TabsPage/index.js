/*
 *
 * TabsPage
 *
 */

import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import selectTabsPage from './selectors';
import selectStockPage from 'containers/StockPage/selectors';
import { closeTab } from './actions';

import SearchNavBar from 'containers/SearchNavBar';
import TabsList from 'components/TabsList';

export class TabsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <SearchNavBar />
        <TabsList {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  tabs: selectTabsPage(),
  stock: selectStockPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    closeTab: (id) => dispatch(closeTab(id)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TabsPage);
