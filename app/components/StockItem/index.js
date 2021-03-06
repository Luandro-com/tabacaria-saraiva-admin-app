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
        {/* <MenuItem primaryText="Editar nome" />
        <MenuItem primaryText="Editar preço" />
        <MenuItem primaryText="Editar estoque" />
        <MenuItem primaryText="Editar aviso de estoque" />
        <MenuItem primaryText="Editar promoção" /> */}
        <MenuItem
          onTouchTap={() => {
            const confirmation = confirm('Esse item será removido permanentemente do estoque. Tem certeza que deseja continuar?');
            (confirmation ? remove(id) : console.log('canceled:', c));
          }}
          primaryText="Remover produto"
        />
      </IconMenu>
      <span className={styles.name}>{name}</span>
      <span className={styles.stock} style={{ color: red }}>{stock}</span>
      <span className={styles.price}>R$ {parseMoney(price)}</span>
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
