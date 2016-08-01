/**
*
* SideMenu
*
*/

import React from 'react';
import { Link } from 'react-router';

import {List, ListItem} from 'material-ui/List';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

import styles from './styles.css';

function SideMenu({ toggle, logout }) {
  return (
    <div className={styles.sideMenu}>
      <AppBar
        title="Menu"
        iconElementLeft={<IconButton onClick={toggle}><NavigationClose /></IconButton>}
      />
      <List>
        <Link to="/"><ListItem>Comandas</ListItem></Link>
        <Link to="/estoque"><ListItem>Gerenciamento de estoque</ListItem></Link>
        <Link to="/"><ListItem>Planilha de transações</ListItem></Link>
        {/*<Link to="/cadastrar-gerente"><ListItem>Cadastrar gerente</ListItem></Link>*/}
        <Link to="/cadastrar-administrador"><ListItem>Cadastrar administrador</ListItem></Link>
        <Link to="/"><ListItem>Sobre</ListItem></Link>
        <ListItem onClick={logout}>Sair</ListItem>
        <div className={styles.footer}><a target="_blank" href="http://luandro.com">por luandro</a></div>
      </List>    
    </div>
  );
}

SideMenu.propTypes = {
  logout: React.PropTypes.func.isRequired,
};

export default SideMenu;
