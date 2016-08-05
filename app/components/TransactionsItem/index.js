/**
*
* TransactionsItem
*
*/

import React from 'react';

import TimeAgo from 'components/TimeAgo';
import { TableRow, TableRowColumn } from 'material-ui/Table';

import styles from './styles.css';

function TransactionsItem({ id, method, total, user, created }) {
  return (
    <TableRow>
      <TableRowColumn><TimeAgo date={created} /></TableRowColumn>
      <TableRowColumn>{total}</TableRowColumn>
      <TableRowColumn>{user}</TableRowColumn>
      <TableRowColumn>{method}</TableRowColumn>
    </TableRow>
  );
}

TransactionsItem.propTypes = {
  id: React.PropTypes.string,
  method: React.PropTypes.string,
  total: React.PropTypes.number,
  user: React.PropTypes.string,
  created: React.PropTypes.number,
};

export default TransactionsItem;
