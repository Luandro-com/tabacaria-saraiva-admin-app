/**
*
* TabsItem
*
*/

import React from 'react';
import { parseMoney } from 'utils/parsers';

import TimeAgo from 'react-timeago';
import ptStrings from 'react-timeago/lib/language-strings/pt-br';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

import styles from './styles.css';

const formatter = buildFormatter(ptStrings);

function TabsItem({ id, created, items, products }) {
  let total = 0;
  products
    .filter((prod) => items
      .map((item) => item)
      .filter((item) => item.id === prod.id))
    .map((item) => (total = item.price += total));

  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <span>Balcão</span>
        <span className={styles.time}><TimeAgo date={created} formatter={formatter} /></span>
      </div>
      <h1>{parseMoney(total)}</h1>
    </div>
  );
}

TabsItem.propTypes = {
  id: React.PropTypes.string.isRequired,
  created: React.PropTypes.number.isRequired,
  items: React.PropTypes.array.isRequired,
  products: React.PropTypes.array.isRequired,
};

export default TabsItem;
