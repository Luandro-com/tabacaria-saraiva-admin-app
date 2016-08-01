/*
 *
 * AddTabPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectStockPage from 'containers/StockPage/selectors';
import { update } from './actions';

import AddProductsList from 'components/AddProductsList';

export class AddTabPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    updateItems: React.PropTypes.func.isRequired,
    items: React.PropTypes.array.isRequired,
    loading: React.PropTypes.bool.isRequired,
  }

  render() {
    const { updateItems, items, loading } = this.props;
    return (
      <div>
        <AddProductsList update={updateItems} items={items} loading={loading} />
      </div>
    );
  }
}

const mapStateToProps = selectStockPage();

function mapDispatchToProps(dispatch) {
  return {
    updateItems: (data) => dispatch(update(data)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTabPage);
