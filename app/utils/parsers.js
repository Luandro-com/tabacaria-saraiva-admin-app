import each from 'lodash/each';

export const parseMoney = (value) => `R$ ${value.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ',')}`;

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
