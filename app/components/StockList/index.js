/**
*
* StockList
*
*/

import React from 'react';
import { red } from 'utils/colors';

import StockItem from 'components/StockItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router';
import CircularProgress from 'material-ui/CircularProgress';

import styles from './styles.css';

function StockList({ remove, loading, items }) {
  return (
    <div className={styles.stockList}>
      {items.map((item, key) => <StockItem remove={remove} key={key} {...item} />)}
      {loading && <div className={styles.loading}><CircularProgress color={red} size={1.5} /></div>}
      <Link to="/estoque/adicionar">
        <FloatingActionButton className={styles.addButton} secondary>
          <ContentAdd />
        </FloatingActionButton>
      </Link>
    </div>
  );
}

StockList.defaultProps = {
  items: [],
};

StockList.propTypes = {
  remove: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool.isRequired,
  items: React.PropTypes.array,
};

export default StockList;
