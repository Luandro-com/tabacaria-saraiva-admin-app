import each from 'lodash/each';

export const parseMoney = (value) => {
  let tmp = `${value}`;
  tmp = tmp.replace(/([0-9]{2})$/g, ',$1');
  if (tmp.length > 6) {
    tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');
  }
  return `R$${tmp}`;
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
