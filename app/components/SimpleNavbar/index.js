/**
*
* SimpleNavbar
*
*/

import React from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import { Link } from 'react-router';

import styles from './styles.css';

function SimpleNavbar({ title, back }) {
  return (
    <AppBar
      className={styles.container}
      title={<span>{title}</span>}
      iconElementLeft={<Link to={back || '/'}><IconButton><ArrowBack color="white" /></IconButton></Link>}
    />
  );
}

SimpleNavbar.propTypes = {
  title: React.PropTypes.string,
  back: React.PropTypes.string,
};

export default SimpleNavbar;
