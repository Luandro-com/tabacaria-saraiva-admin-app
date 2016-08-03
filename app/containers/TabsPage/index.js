/*
 *
 * TabsPage
 *
 */

import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import selectTabsPage from './selectors';
import selectStockPage from 'containers/StockPage/selectors';
import { closeTab, toggleCloseModal, toggleShowTabModal, toggleNameTabModal, cancelTab } from './actions';

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
    updateTab: (id) => dispatch(push(`/comandas/nova/${id}`)),
    cancelTab: (id) => dispatch(cancelTab(id)),
    closeTab: (id) => dispatch(closeTab(id)),
    toggleCloseModal: () => dispatch(toggleCloseModal()),
    toggleShowTabModal: () => dispatch(toggleShowTabModal()),
    toggleNameTabModal: () => dispatch(toggleNameTabModal()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TabsPage);
