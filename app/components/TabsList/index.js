/**
*
* TabsList
*
*/

import React from 'react';
import { Link } from 'react-router';
import { red } from 'utils/colors';

import TabModal from 'components/TabModal';
import TabNameModal from 'components/TabNameModal';
import TabCloseModal from 'components/TabCloseModal';
import Dialog from 'material-ui/Dialog';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TabsItem from 'components/TabsItem';
import CircularProgress from 'material-ui/CircularProgress';

import styles from './styles.css';

function TabsList(props) {
  const { closeTab, toggleCloseModal, toggleShowTabModal, toggleNameTabModal, tabs: { loading, items, modals }, stock } = props;
  return (
    <div className={styles.tabsList}>
      {loading && <div className={styles.loading}><CircularProgress color={red} size={1.5} /></div>}
      {items.map((item, key) => <TabsItem
        key={key}
        {...props}
        {...item}
        products={stock.items}
      />)}
      <Link to="/comandas/nova">
        <FloatingActionButton className={styles.addButton} secondary>
          <ContentAdd />
        </FloatingActionButton>
      </Link>
      <Dialog
        modal={false}
        onRequestClose={toggleShowTabModal}
        open={modals.showTab}
      >
        <TabModal
          products={stock.items}
          items={items}
          id={modals.selectedTabId}
        />
      </Dialog>
      <Dialog
        modal={false}
        onRequestClose={toggleNameTabModal}
        open={modals.nameTab}
      >
        <TabNameModal />
      </Dialog>
      <Dialog open={modals.closeTab} autoScrollBodyContent>
        <TabCloseModal
          id={modals.selectedTabId}
          closeTab={closeTab}
          cancel={toggleCloseModal} 
        />
      </Dialog>
    </div>
  );
}

TabsList.propTypes = {
  closeTab: React.PropTypes.func.isRequired,
  toggleShowTabModal: React.PropTypes.func.isRequired,
  toggleCloseModal: React.PropTypes.func.isRequired,
  toggleNameTabModal: React.PropTypes.func.isRequired,
  tabs: React.PropTypes.object.isRequired,
  stock: React.PropTypes.object.isRequired,
};

export default TabsList;
