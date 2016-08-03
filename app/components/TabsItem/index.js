/**
*
* TabsItem
*
*/

import React from 'react';
import { parseMoney } from 'utils/parsers';
import { red } from 'utils/colors';

import AddCircle from 'material-ui/svg-icons/content/add-circle';
import AlignBottom from 'material-ui/svg-icons/editor/vertical-align-bottom';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import TimeAgo from 'react-timeago';
import ptStrings from 'react-timeago/lib/language-strings/pt-br';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

import styles from './styles.css';

const formatter = buildFormatter(ptStrings);

function TabsItem({ updateTab, closeTab, id, name, created, items, products }) {
  // Map over all products, return the ones that are in the items list
  // add prices of products according to quantity in items list
  const productsPrice = items.map((item) => {
    const prodInfo = products.filter((prod) => prod.id === item.id);
    return prodInfo[0].price * item.quantity;
  });
  const total = productsPrice.reduce((prev, curr) => (prev + curr), 0);
  return (
    <div className={styles.container}>
      <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon color={red} /></IconButton>}
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem onClick={() => console.log('ver comanda')} primaryText="Ver comanda" />
        <MenuItem onClick={() => console.log('mudar nome da comanda')} primaryText="Mudar nome" />
        <MenuItem onClick={() => console.log('cancelar comanda')} primaryText="Cancelar comanda" />
      </IconMenu>
      <div className={styles.name}>
        <span>{name || 'Balcão'}</span>
        <span className={styles.time}><TimeAgo date={created} formatter={formatter} /></span>
      </div>
      <IconButton
        iconStyle={{ width: 36, height: 36, color: red }}
        style={{ width: 72, height: 72, padding: 12, textAlign: 'center' }}
        onClick={() => updateTab(id)}
      >
        <AddCircle />
      </IconButton>
      <span className={styles.total}>{parseMoney(total)}</span>
      <IconButton
        iconStyle={{ width: 36, height: 36, color: red }}
        style={{ width: 72, height: 72, padding: 12, textAlign: 'center' }}
        onClick={() => closeTab(id)}
      >
        <AlignBottom />
      </IconButton>
    </div>
  );
}

TabsItem.propTypes = {
  closeTab: React.PropTypes.func.isRequired,
  updateTab: React.PropTypes.func.isRequired,
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string,
  created: React.PropTypes.number.isRequired,
  items: React.PropTypes.array.isRequired,
  products: React.PropTypes.array.isRequired,
};

export default TabsItem;
