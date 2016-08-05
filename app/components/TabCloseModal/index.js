/**
*
* TabCloseModal
*
*/

import React from 'react';
import { parseMoney, discountCalc } from 'utils/parsers';
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
import Slider from 'material-ui/Slider';

import styles from './styles.css';

class TabCloseModal extends React.Component {
  static propTypes = {
    closeTab: React.PropTypes.func.isRequired,
    cancel: React.PropTypes.func.isRequired,
    id: React.PropTypes.string.isRequired,
    total: React.PropTypes.number,
  }

  static defaultProps = {
    total: 1000,
  }

  constructor(props) {
    super(props);
    const { total } = this.props;
    this.state = {
      discountValue: 0.15,
      discount: false,
      error: false,
      open: false,
      input: total,
      total,
      parcels: [
        {
          id: 1,
          value: total,
          method: 'money',
        },
      ],
    };
  }

  handleOpen = () => {
    this.setState({ open: true, input: this.state.total });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleDiscountMenu = () => {
    const { discount, discountValue } = this.state;
    if (!discount) {
      this.setState({
        total: discountCalc(this.props.total, discountValue),
        discount: !discount,
        parcels: [
          {
            id: 1,
            value: discountCalc(this.props.total, discountValue),
            method: 'money',
          },
        ],
      });
    } else {
      this.setState({
        discount: !discount,
        total: this.props.total,
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  }

  handleDiscountChange = (e, value) => {
    this.setState({
      discountValue: value,
      total: discountCalc(this.props.total, value),
    });
  }

  handleRadioChange = (id, value) => {
    /* PAREI AQUI */
    const newArray = this.state.parcels;
    newArray.forEach((item) => {
      if (item.id === id) {
        /* eslint no-param-reassign: ["error", { "props": false }] */
        item.method = value;
      }
    });
    this.setState({
      parcels: newArray,
    });
    console.log('this.state:', this.state);
  }

  handleParcel = () => {
    const { parcels, input } = this.state;
    const parsedInput = parseInt(input, 10);
    const mulArray = parcels.slice();
    const lastItem = mulArray.pop();
    const subValue = lastItem.value - parsedInput;
    if (subValue <= 0 || isNaN(parsedInput)) {
      this.setState({
        error: true,
      });
    } else {
      lastItem.value = subValue;
      const newArray = mulArray.concat(
        lastItem,
        {
          id: parcels.length + 1,
          value: parsedInput,
          method: 'money',
        }
      );
      this.setState({
        parcels: newArray,
      });
      this.handleClose();
    }
  }

  render() {
    const { id, closeTab, cancel } = this.props;
    const { total, parcels, input, open, error, discount, discountValue } = this.state;
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

    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon color={red} /></IconButton>}
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          >
            <MenuItem
              onTouchTap={this.handleDiscountMenu}
              primaryText={discount ? 'Fechar desconto' : 'Adicionar desconto'}
            />
          </IconMenu>
          <p>Total: <span>R$ {parseMoney(total)}</span></p>
        </div>
        {discount &&
          <div>
            <p>{`${discountValue * 100}%`}</p>
            <Slider step={0.05} value={discountValue} onChange={this.handleDiscountChange} />
          </div>
        }
        {parcels.map((parcel, key) => {
          return (
            <div key={key}>
              <div className={styles.parcel}>
                <span>Parcela</span>
                <span>R$ {parseMoney(parcel.value)}</span>
                {(parcel.id === parcels.length && !discount) && <IconButton onTouchTap={this.handleOpen}><Split color={red} /></IconButton>}
              </div>
              <RadioButtonGroup
                name="payment"
                defaultSelected={parcel.method}
                onChange={(e, value) => this.handleRadioChange(parcel.id, value)}
              >
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
        <FlatButton
          label="Cancelar"
          primary
          onTouchTap={cancel}
        />
        <FlatButton
          label="Finalizar"
          primary
          keyboardFocused
          onTouchTap={() => closeTab(id, parcels)}
        />
        <Dialog
          title="Valor da nova parcela"
          actions={actions}
          open={open}
          modal={false}
          onRequestClose={this.handleClose}
          contentStyle={{ width: '100%' }}
        >
          <TextField
            style={{ width: '90%' }}
            hintText={total}
            floatingLabelText="Valor da parcela"
            onChange={this.handleChange}
            value={input}
            errorText={error ? 'O valor deve ser menor que o valor dessa parcela' : ''}
          />
        </Dialog>
      </div>
    );
  }
}

export default TabCloseModal;
