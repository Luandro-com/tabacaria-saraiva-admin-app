/**
*
* TabModal
*
*/

import React from 'react';
import { parseMoney } from 'utils/parsers';
import { black } from 'utils/colors';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import styles from './styles.css';

function TabModal({ id, items, products }) {
  const itemsList = items.filter((item) => item.id === id)[0].items;
  const itemsInfo = itemsList.map((item, key) => {
    const info = products.filter((prod) => prod.id === item.id)[0];
    return (
      <TableRow key={key} style={{ color: black }}>
        <TableRowColumn>{info.name}</TableRowColumn>
        <TableRowColumn>{item.quantity}</TableRowColumn>
        <TableRowColumn>{parseMoney(info.price)}</TableRowColumn>
      </TableRow>
    );
  });
  return (
    <Table>
      <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn>Nome</TableHeaderColumn>
          <TableHeaderColumn>Quantidade</TableHeaderColumn>
          <TableHeaderColumn>Preço</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody
        displayRowCheckbox={false}
        stripedRows
      >
        {itemsInfo}
      </TableBody>
    </Table>
  );
}

TabModal.propTypes = {
  id: React.PropTypes.string.isRequired,
  items: React.PropTypes.array.isRequired,
  products: React.PropTypes.array.isRequired,
};

export default TabModal;
