import each from 'lodash/each';

export const discountCalc = (total, disc) => total - (total * disc);

export const removeCommas = (value) => parseFloat(value.replace(/,/g, ''));

export const methodParser = (method) => {
  switch (method) {
    case 'money':
      return 'Dinheiro';
    case 'credit':
      return 'Crédito';
    case 'debit':
      return 'Débito';
    case 'promo':
      return 'Fidelidade';
    default:
      return 'Nenhum';
  }
};

export const parseMoney = (value) => {
  let tmp = `${value}`;
  tmp = tmp.replace(/([0-9]{2})$/g, ',$1');
  if (tmp.length > 6) {
    tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');
  }
  return tmp;
};

export const parseImmutableObject = (payload) => {
  const itemsList = [];
  each(payload, (itemValue, itemId) => {
    const obj = {
      id: itemId,
    };
    each(itemValue, (value, key) => {
      obj[key] = value;
    });
    itemsList.push(obj);
  });
  return itemsList;
};

export const sumQuantity = (array1, array2) => {
  function inArray(arr, obj) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === obj.id) {
        return i;
      }
    }
    return -1;
  }

  const newArray = array1.slice(0); // clone array1
  for (let i = 0; i < array2.length; i++) {
    const obj = array2[i];
    const index = inArray(array1, obj);
    if (index === -1) {
      newArray.push(obj);
    } else {
      newArray[index] = { id: newArray[index].id, quantity: newArray[index].quantity + obj.quantity };
    }
  }

  return newArray;
};
