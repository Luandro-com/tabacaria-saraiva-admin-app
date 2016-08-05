/**
*
* TransactionsList
*
*/

import React from 'react';
import { red } from 'utils/colors';

import SimpleNavbar from 'components/SimpleNavbar';
import TransactionsItem from 'components/TransactionsItem';
import CircularProgress from 'material-ui/CircularProgress';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import styles from './styles.css';

function TransactionsList({ loading, items }) {
  console.log('items:', items);
  return (
    <div className={styles.transactionsList}>
      <SimpleNavbar title="Planilha de transações" />
      <h1>Lista de transações</h1>
      <Table>
	      <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
	        <TableRow>
	          <TableHeaderColumn>Hora</TableHeaderColumn>
	          <TableHeaderColumn>Valor</TableHeaderColumn>
	          <TableHeaderColumn>Usuário</TableHeaderColumn>
	          <TableHeaderColumn>Método</TableHeaderColumn>
	        </TableRow>
	        <TableBody displayRowCheckbox={false}>
            {loading && <div className={styles.loading}><CircularProgress color={red} size={1.5} /></div>}
	        	{items.map((item, key) => <TransactionsItem key={key} {...item} />)}
	        </TableBody>
	      </TableHeader>
	    </Table>
      <TransactionsItem />
    </div>
  );
}

export default TransactionsList;
