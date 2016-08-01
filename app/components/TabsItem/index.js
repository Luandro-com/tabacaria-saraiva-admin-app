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

import TimeAgo from 'react-timeago';
import ptStrings from 'react-timeago/lib/language-strings/pt-br';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

import styles from './styles.css';

const formatter = buildFormatter(ptStrings);

function TabsItem({ id, created, items, products }) {
  // Map over all products, return the ones that are in the items list
  // add prices of products according to quantity in items list
  products.map((prod) => console.log('prod:', prod));
  items.map((item) => console.log('item:', item));
  const total = 16000;
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <span>Balcão</span>
        <span className={styles.time}><TimeAgo date={created} formatter={formatter} /></span>
      </div>
      <IconButton
        iconStyle={{ width: 48, height: 48, color: red }}
        style={{ width: 96, height: 96, padding: 24, textAlign: 'center' }}
      >
        <AddCircle />
      </IconButton>
      <h1>{parseMoney(total)}</h1>
      <IconButton
        iconStyle={{ width: 48, height: 48, color: red }}
        style={{ width: 96, height: 96, padding: 24, textAlign: 'center' }}
      >
        <AlignBottom />
      </IconButton>
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
