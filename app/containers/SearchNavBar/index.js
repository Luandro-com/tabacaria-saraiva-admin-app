/*
 *
 * SearchNavBar
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { logout } from 'containers/LoginPage/actions';
import { black } from 'utils/colors';

import SideMenu from 'components/SideMenu';
import Searchbar from 'components/Searchbar';

import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import Shield from '../../favicon.png';
import Drawer from 'material-ui/Drawer';

import styles from './styles.css';

export class SearchNavBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    userLogout: React.PropTypes.func.isRequired,
    changeRoute: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const { userLogout, changeRoute } = this.props;
    const { open } = this.state;
    return (
      <div className={styles.container}>
        <Toolbar style={{ background: black }}>
          <ToolbarGroup firstChild>
            <IconButton onTouchTap={changeRoute}>
              <img className={styles.icon} height={40} alt="Comandas" src={Shield} />
            </IconButton>
          </ToolbarGroup>
          <ToolbarGroup style={{ width: '60%', display: 'flex', alignItems: 'center' }}>
            <Searchbar />
          </ToolbarGroup>
          <ToolbarGroup>
            <IconButton onTouchTap={this.handleToggle}>
              <MenuIcon />
            </IconButton>
          </ToolbarGroup>
        </Toolbar>
        <Drawer className={styles.sideMenu} openSecondary open={open}>
          <SideMenu logout={userLogout} toggle={this.handleToggle} />
        </Drawer>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: () => dispatch(push('/')),
    userLogout: () => dispatch(logout()),
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(SearchNavBar);
