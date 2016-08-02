/**
*
* TabsList
*
*/

import React from 'react';
import { Link } from 'react-router';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TabsItem from 'components/TabsItem';
import CircularProgress from 'material-ui/CircularProgress';

import styles from './styles.css';

function TabsList({ closeTab, tabs: { loading, items }, stock }) {
  return (
    <div className={styles.tabsList}>
      {loading && <div className={styles.loading}><CircularProgress size={1.5} /></div>}
      {items.map((item, key) => <TabsItem key={key} {...item} closeTab={closeTab} products={stock.items} />)}
      <Link to="/comandas/nova">
        <FloatingActionButton className={styles.addButton} secondary>
          <ContentAdd />
        </FloatingActionButton>
      </Link>
    </div>
  );
}

TabsList.propTypes = {
  closeTab: React.PropTypes.func.isRequired,
  tabs: React.PropTypes.object.isRequired,
  stock: React.PropTypes.object.isRequired,
};

export default TabsList;
