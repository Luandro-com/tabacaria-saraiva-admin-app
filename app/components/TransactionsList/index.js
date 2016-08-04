/**
*
* TransactionsList
*
*/

import React from 'react';

import SimpleNavbar from 'components/SimpleNavbar';
import TransactionsItem from 'components/TransactionsItem';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import styles from './styles.css';

function TransactionsList() {
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
	        	<TransactionsItem />
	        </TableBody>
	      </TableHeader>
	    </Table>
      <TransactionsItem />
    </div>
  );
}

export default TransactionsList;
