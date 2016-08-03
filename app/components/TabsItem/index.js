/**
*
* TabsItem
*
*/

import React from 'react';
import { parseMoney } from 'utils/parsers';
import { red } from 'utils/colors';

import TabModal from 'components/TabModal';
import TabNameModal from 'components/TabNameModal';
import TabCloseModal from 'components/TabCloseModal';

import AddCircle from 'material-ui/svg-icons/content/add-circle';
import AlignBottom from 'material-ui/svg-icons/editor/vertical-align-bottom';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import TimeAgo from 'react-timeago';
import ptStrings from 'react-timeago/lib/language-strings/pt-br';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

import styles from './styles.css';

const formatter = buildFormatter(ptStrings);

function TabsItem({
  updateTab, cancelTab, closeTab,
  toggleCloseModal, toggleShowTabModal, toggleNameTabModal,
  tabs: { modals },
  id, name, created, items, products,
  }) {
  // Map over all products, return the ones that are in the items list
  // add prices of products according to quantity in items list
  const productsPrice = items.map((item) => {
    const prodInfo = products.filter((prod) => prod.id === item.id);
    if (prodInfo[0]) {
      return prodInfo[0].price * item.quantity;
    }
    return 'produto não encontrado';
  });

  const total = productsPrice.reduce((prev, curr) => (prev + curr), 0);
  return (
    <div className={styles.container}>
      <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon color={red} /></IconButton>}
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem onTouchTap={toggleShowTabModal} primaryText="Ver comanda" />
        <MenuItem onTouchTap={toggleNameTabModal} primaryText="Mudar nome" />
        <MenuItem onTouchTap={() => cancelTab(id)} primaryText="Cancelar comanda" />
      </IconMenu>
      <div className={styles.name}>
        <span>{name || 'Balcão'}</span>
        <span className={styles.time}><TimeAgo date={created} formatter={formatter} /></span>
      </div>
      <IconButton
        iconStyle={{ width: 36, height: 36, color: red }}
        style={{ width: 72, height: 72, padding: 12, textAlign: 'center' }}
        onTouchTap={() => updateTab(id)}
      >
        <AddCircle />
      </IconButton>
      <span className={styles.total}>{parseMoney(total)}</span>
      <IconButton
        iconStyle={{ width: 36, height: 36, color: red }}
        style={{ width: 72, height: 72, padding: 12, textAlign: 'center' }}
        onTouchTap={toggleCloseModal}
      >
        <AlignBottom />
      </IconButton>
      <Dialog
        modal={false}
        onRequestClose={toggleShowTabModal}
        open={modals.showTab}
      >
        <TabModal />
      </Dialog>
      <Dialog
        modal={false}
        onRequestClose={toggleNameTabModal}
        open={modals.nameTab}
      >
        <TabNameModal />
      </Dialog>
      <Dialog
        open={modals.closeTab}
      >
        <TabCloseModal closeTab={closeTab} />
      </Dialog>
    </div>
  );
}

TabsItem.propTypes = {
  closeTab: React.PropTypes.func.isRequired,
  cancelTab: React.PropTypes.func.isRequired,
  updateTab: React.PropTypes.func.isRequired,
  toggleShowTabModal: React.PropTypes.func.isRequired,
  toggleCloseModal: React.PropTypes.func.isRequired,
  toggleNameTabModal: React.PropTypes.func.isRequired,
  tabs: React.PropTypes.object.isRequired,
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string,
  created: React.PropTypes.number.isRequired,
  items: React.PropTypes.array.isRequired,
  products: React.PropTypes.array.isRequired,
};

export default TabsItem;
