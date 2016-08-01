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
        <RaisedButton
          onClick={() => add(id, price)}
          label="+"
          backgroundColor={black}
          labelColor={white}
          labelStyle={{ fontSize: '1.4em' }}
        />
        <RaisedButton
          onClick={() => remove(id, price)}
          label="-"
          backgroundColor={white}
          labelColor={black}
          labelStyle={{ fontSize: '1.4em' }}
          style={{ border: `1px solid ${black}` }}
        />
      </div>
      <h4>{counter}</h4>
      <h3>{name}</h3>
      <h3>{stockCount}</h3>
      <h3>{parseMoney(price)}</h3>
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
