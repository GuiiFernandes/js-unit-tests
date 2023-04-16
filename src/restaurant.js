/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (object) => ({ 
  fetchMenu: () => object,
  consumption: [],
  order(string) {
    const products = { ...object.food, ...object.drinks };
    const existProduct = products[string];
    if (!existProduct) return 'Item indisponível';
    this.consumption.push(string);
  },
  pay() {
    const products = { ...object.food, ...object.drinks };
    let sum = 0;
    for (let item of this.consumption) {
      sum += products[item];
    }
    return Number.parseFloat((sum * 1.1).toFixed(2));
  },
});

module.exports = createMenu;
