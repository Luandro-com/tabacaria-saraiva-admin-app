/*
 *
 * SearchNavBar
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { logout } from 'containers/LoginPage/actions';

import SideMenu from 'components/SideMenu';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import Shield from 'material-ui/svg-icons/hardware/security';
import Drawer from 'material-ui/Drawer';

import styles from './styles.css';

export class SearchNavBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    userLogout: React.PropTypes.func.isRequired,
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
    const { userLogout } = this.props;
    const { open } = this.state;
    return (
      <div className={styles.container}>
        <AppBar
          title="Tabacaria Saraiva"
          iconElementRight={<IconButton><MenuIcon /></IconButton>}
          iconElementLeft={<IconButton><Shield /></IconButton>}
          onTouchTap={this.handleToggle}
        />
        <Drawer className={styles.sideMenu} openSecondary open={open}>
          <SideMenu logout={userLogout} toggle={this.handleToggle} />
        </Drawer>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(logout()),
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(SearchNavBar);
