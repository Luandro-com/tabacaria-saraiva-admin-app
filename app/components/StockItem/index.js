/**
*
* StockItem
*
*/

import React from 'react';

import { parseMoney } from 'utils/parsers';
import { red } from 'utils/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';


import styles from './styles.css';

function StockItem({ remove, name, created, notification, price, stock, id }) {
  return (
    <div className={styles.container}>
      <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon color={red} /></IconButton>}
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        {/*<MenuItem primaryText="Editar nome" />
        <MenuItem primaryText="Editar preço" />
        <MenuItem primaryText="Editar estoque" />
        <MenuItem primaryText="Editar aviso de estoque" />
        <MenuItem primaryText="Editar promoção" />*/}
        <MenuItem onClick={() => remove(id)} primaryText="Remover produto" />
      </IconMenu>
      <h3>{name}</h3>
      <h3 style={{ color: red }}>{stock}</h3>
      <h3>{parseMoney(price)}</h3>
    </div>
  );
}

StockItem.propTypes = {
  remove: React.PropTypes.func.isRequired,
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  created: React.PropTypes.number.isRequired,
  notification: React.PropTypes.number.isRequired,
  price: React.PropTypes.number.isRequired,
  stock: React.PropTypes.number.isRequired,
};

export default StockItem;
