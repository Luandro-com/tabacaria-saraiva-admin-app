/**
*
* AddProductsList
*
*/

import React from 'react';
import { parseMoney } from 'utils/parsers';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import Check from 'material-ui/svg-icons/navigation/check';
import AddProductsItem from 'components/AddProductsItem';
import SimpleNavbar from 'components/SimpleNavbar';

import styles from './styles.css';

class AddProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      listOfItems: [],
    };
  }

  componentDidMount() {
    const { items } = this.props;
    items.map((item) => this.setState({
      [`stockCount${item.id}`]: item.stock,
      [`counter${item.id}`]: 0,
    }));
  }

  componentDidUpdate(nextProps) {
    const { items } = this.props;
    if (nextProps.items.length === items.length) {
      return;
    }
    items.map((item) => this.setState({
      [`stockCount${item.id}`]: item.stock,
      [`counter${item.id}`]: 0,
    }));
  }

  handleAdd = (id, price) => {
    const { total, listOfItems } = this.state;

    if (this.state[`stockCount${id}`] - 1 >= 0) {
      this.setState({
        [`stockCount${id}`]: this.state[`stockCount${id}`] - 1,
        [`counter${id}`]: this.state[`counter${id}`] + 1,
        total: total + price,
      });
      const inList = listOfItems.filter((item) => item.id === id);
      if (inList[0]) {
        const index = listOfItems.findIndex(i => i.id === inList[0].id);
        const stateCopy = Object.assign({}, this.state);
        stateCopy.listOfItems[index].quantity += 1;
      } else {
        this.setState({
          listOfItems: listOfItems.concat({
            id,
            quantity: 1,
          }),
        });
      }
    }
  }

  handleRemove = (id, price) => {
    const { total, listOfItems } = this.state;
    const stock = this.props.items
      .filter((item) => item.id === id)
      .map((item) => item.stock);

    if (this.state[`stockCount${id}`] + 1 <= stock) {
      this.setState({
        [`stockCount${id}`]: this.state[`stockCount${id}`] + 1,
        [`counter${id}`]: this.state[`counter${id}`] - 1,
        total: total - price,
      });
      const inList = listOfItems.filter((item) => item.id === id);
      if (inList[0]) {
        const index = listOfItems.findIndex(i => i.id === inList[0].id);
        const stateCopy = Object.assign({}, this.state);
        // If quantity will be equal 0, remove item from array
        if (inList[0].quantity - 1 <= 0) {
          stateCopy.listOfItems.splice(index, 1);
        } else {
          stateCopy.listOfItems[index].quantity -= 1;
        }
      }
    }
  }

  render() {
    const { update, items } = this.props;
    const { total, listOfItems } = this.state;
    return (
      <div className={styles.container}>
        <SimpleNavbar title="Adiconar a comanda" />
        {items.map((item, key) => <AddProductsItem
          key={key} add={this.handleAdd}
          remove={this.handleRemove}
          stockCount={this.state[`stockCount${item.id}`]}
          counter={this.state[`counter${item.id}`]}
          {...item}
        />)}
        <FloatingActionButton
          className={styles.addButton}
          onClick={() => update(listOfItems)}
          secondary
        >
          <Check />
        </FloatingActionButton>
        <div className={styles.total}>
          Total: {parseMoney(total)}
        </div>
      </div>
    );
  }
}

AddProductsList.propTypes = {
  update: React.PropTypes.func.isRequired,
  items: React.PropTypes.array.isRequired,
};

export default AddProductsList;
