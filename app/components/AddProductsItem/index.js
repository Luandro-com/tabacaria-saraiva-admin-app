/**
*
* AddProductsItem
*
*/

import React from 'react';
import { parseMoney } from 'utils/parsers';
import { black, white } from 'utils/colors';

import RaisedButton from 'material-ui/RaisedButton';

import styles from './styles.css';

function AddProductsItem({ add, remove, id, name, price, counter, stockCount }) {
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <div className={styles.add}>
          <RaisedButton
            fullWidth
            onTouchTap={() => add(id, price)}
            label="+"
            backgroundColor={black}
            labelColor={white}
            labelStyle={{ fontSize: '1.4em' }}
          />
        </div>
        <div className={styles.remove}>
          <RaisedButton
            fullWidth
            onTouchTap={() => remove(id, price)}
            label="-"
            backgroundColor={white}
            labelColor={black}
            labelStyle={{ fontSize: '1.4em' }}
            style={{ border: `1px solid ${black}` }}
          />
        </div>
      </div>
      <span className={styles.counter}>{counter}</span>
      <span className={styles.name}>{name}</span>
      <span className={styles.stock}>{stockCount}</span>
      <span className={styles.price}>{parseMoney(price)}</span>
    </div>
  );
}

AddProductsItem.propTypes = {
  add: React.PropTypes.func.isRequired,
  remove: React.PropTypes.func.isRequired,
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired,
  stockCount: React.PropTypes.number,
  counter: React.PropTypes.number,
};

export default AddProductsItem;
