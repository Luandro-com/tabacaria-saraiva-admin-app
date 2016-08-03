/**
*
* Searchbar
*
*/

import React from 'react';

import Search from 'material-ui/svg-icons/action/search';

import styles from './styles.css';

function Searchbar() {
  return (
    <div className={styles.container}>
      <Search className={styles.icon} />
      <input className={styles.input} />
    </div>
  );
}

export default Searchbar;
