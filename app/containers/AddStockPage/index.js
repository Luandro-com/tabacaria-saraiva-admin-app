/*
 *
 * AddStockPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectAddStockPage from './selectors';
import { add } from './actions';

import AddStockForm from 'components/AddStockForm';

export class AddStockPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <AddStockForm {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = selectAddStockPage();

function mapDispatchToProps(dispatch) {
  return {
    add: (e) => {
      e.preventDefault();
      dispatch(add());
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddStockPage);
