/**
*
* TransactionsList
*
*/

import React from 'react';

import SimpleNavbar from 'components/SimpleNavbar';
import TransactionsItem from 'components/TransactionsItem';

import styles from './styles.css';

function TransactionsList() {
  return (
    <div className={styles.transactionsList}>
      <SimpleNavbar title="Planilha de transações" />
      <h1>Lista de transações</h1>
      <TransactionsItem />
    </div>
  );
}

export default TransactionsList;
