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

import styles from './styles.css';

class TabCloseModal extends React.Component {
	render() {
		const { cancel, id, total } = this.props;
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
	    	<p>Parcela 1: {parseMoney(total)}</p>
	    	<RadioButtonGroup name="payment" defaultSelected="money">
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
		    <div className={styles.footer}>
		    	<div className={styles.finish} onTouchTap={() => closeTab(id)}>Finalizar</div>
		    	<div className={styles.cancel} onTouchTap={cancel}>Cancelar</div>
		    </div>
	    </div>
	  );
	}
}

TabCloseModal.defaultProps = {
	total: 10000
}

export default TabCloseModal;
