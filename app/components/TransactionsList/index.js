/**
*
* TransactionsList
*
*/

import React from 'react';
import { red, gold } from 'utils/colors';

import SimpleNavbar from 'components/SimpleNavbar';
import TransactionsItem from 'components/TransactionsItem';
import CircularProgress from 'material-ui/CircularProgress';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import styles from './styles.css';

function TransactionsList({ handleTabChange, tab, loading, items }) {
  console.log('items:', items);
  return (
    <div className={styles.transactionsList}>
      <SimpleNavbar title="Planilha de transações" />
      <Tabs
        value={tab}
        onChange={handleTabChange}
        tabItemContainerStyle={{ background: red }}
        inkBarStyle={{ background: gold }}
      >
        <Tab label="Diário" value={1}>
          <Table>
            <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
              <TableRow>
                <TableHeaderColumn>Hora</TableHeaderColumn>
                <TableHeaderColumn>Valor</TableHeaderColumn>
                <TableHeaderColumn>Usuário</TableHeaderColumn>
                <TableHeaderColumn>Método</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {loading && <TableRow><TableRowColumn style={{ textAlign: 'center' }}><CircularProgress color={red} size={1.5} /></TableRowColumn></TableRow>}
              {items.map((item, key) => <TransactionsItem key={key} {...item} />)}
            </TableBody>
          </Table>
        </Tab>
        <Tab label="Semanal" value={2}>
          <Table>
            <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
              <TableRow>
                <TableHeaderColumn>Hora</TableHeaderColumn>
                <TableHeaderColumn>Valor</TableHeaderColumn>
                <TableHeaderColumn>Usuário</TableHeaderColumn>
                <TableHeaderColumn>Método</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {loading && <TableRow><TableRowColumn style={{ textAlign: 'center' }}><CircularProgress color={red} size={1.5} /></TableRowColumn></TableRow>}
            </TableBody>
          </Table>
        </Tab>
      </Tabs>
    </div>
  );
}

TransactionsList.propTypes = {
  handleTabChange: React.PropTypes.func,
  tab: React.PropTypes.number,
  loading: React.PropTypes.bool,
  items: React.PropTypes.array,
};

export default TransactionsList;
