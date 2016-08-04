/**
*
* TabCloseModal
*
*/

import React from 'react';
import { parseMoney } from 'utils/parsers';
import { red } from 'utils/colors';

import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Split from 'material-ui/svg-icons/communication/call-split';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import styles from './styles.css';

class TabCloseModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      input: parseMoney(this.props.total),
      parcels: [
        {
          value: this.props.total,
          method: 'money',
        },
      ],
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (e) => {
    this.setState({
      input: parseInt(e.target.value, 10),
    });
  }

  handleParcel = () => {
    const { parcels, input } = this.state;
    const newArray = parcels.concat({
      value: parseInt(input, 10),
      method: 'money',
    });
    this.setState({
        parcels: newArray,
    });
    this.handleClose();
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancelar"
        primary
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Dividir"
        primary
        keyboardFocused
        onTouchTap={this.handleParcel}
      />,
    ];
    const { cancel, id, total } = this.props;
    const { parcels, input, open } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon color={red} /></IconButton>}
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          >
            <MenuItem onTouchTap={() => console.log('aplicar desconto:')} primaryText="Desconto" />
          </IconMenu>
          <p>Total: <span>{parseMoney(total)}</span></p>
        </div>
        {parcels.map((parcel, key) => {
          return (
            <div key={key}>
              <div className={styles.parcel}>
                <span>Parcela</span>
                <span>{parseMoney(parcel.value)}</span>
                <IconButton onTouchTap={this.handleOpen}><Split color={red} /></IconButton>
              </div>
              <RadioButtonGroup name="payment" defaultSelected={parcel.method}>
                <RadioButton
                  value="money"
                  label="Dinheiro"
                />
                <RadioButton
                  value="debit"
                  label="Débito"
                />
                <RadioButton
                  value="credit"
                  label="Crédito"
                />
                <RadioButton
                  value="promo"
                  label="Cartão fidelidade"
                />
              </RadioButtonGroup>
            </div>
          );
        })}
        <div className={styles.footer}>
          <div className={styles.finish} onTouchTap={() => closeTab(id)}>Finalizar</div>
          <div className={styles.cancel} onTouchTap={cancel}>Cancelar</div>
        </div>
        <Dialog
          title="Valor da nova parcela"
          actions={actions}
          open={open}
          modal={false}
          onRequestClose={this.handleClose}
        >
          <TextField
            style={{ width: '90%' }}
            hintText={total}
            floatingLabelText="Valor da parcela"
            onChange={this.handleChange}
            value={input}
          />
        </Dialog>
      </div>
    );
  }
}

TabCloseModal.defaultProps = {
  total: 10000,
};

export default TabCloseModal;
