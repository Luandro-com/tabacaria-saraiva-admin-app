/*
 *
 * AddProductsPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectStockItems } from 'containers/StockPage/selectors';
import { selectTab } from 'containers/TabsPage/selectors';
import { create, update } from './actions';

import AddProductsList from 'components/AddProductsList';

export class AddProductsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AddProductsList {...this.props} />
    );
  }
}

const mapStateToProps = (state, props) => createStructuredSelector({
  items: selectStockItems(),
  tab: selectTab(props.params.tabId),
});

function mapDispatchToProps(dispatch) {
  return {
    create: (data) => dispatch(create(data)),
    update: (data, id) => dispatch(update(data, id)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductsPage);
