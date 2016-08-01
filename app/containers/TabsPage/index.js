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
import { load } from './actions';

import SearchNavBar from 'containers/SearchNavBar';
import TabsList from 'components/TabsList';

export class TabsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    loadTabs: React.PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.loadTabs();
  }

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
    loadTabs: () => dispatch(load()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TabsPage);
