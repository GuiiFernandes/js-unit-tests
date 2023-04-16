const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    // Escreva todos os testes aqui.
    const object = {
      food: { coxinha: 3.90, sanduiche: 9.90 },
      drinks: { agua: 3.90, cerveja: 6.90 },
    };
    const menu = createMenu(object);
    // Verifica se a função createMenu() retorna um objeto que possui a chave fetchMenu
    expect(createMenu()).toHaveProperty('fetchMenu');
    expect(createMenu().fetchMenu).toBeInstanceOf(Function);
    // Verifica se o objeto retornado pela função createMenu({ food: {}, drinks: {} }).fetchMenu() retorna um objeto cujas chaves são somente food e drinks
    expect(menu.fetchMenu()).toEqual(object);
    // verifica se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função createMenu({ food: {}, drinks: {} }).fetchMenu().
    expect(createMenu({ food: {}, drinks: {} }).fetchMenu()).toEqual({ food: {}, drinks: {} });
    // verifica se a propriedade consumption do objeto retornado pela função createMenu({ food: {}, drinks: {} }), após a criação do menu, retorna um array vazio.
    expect(menu.consumption).toEqual([]);
    expect(menu.order('picanha')).toBe('Item indisponível');
    menu.order('coxinha');
    expect(menu.consumption).toEqual(['coxinha']);
    menu.order('sanduiche');
    menu.order('coxinha');
    menu.order('cerveja');
    expect(menu.consumption).toEqual(['coxinha', 'sanduiche', 'coxinha', 'cerveja']);
    menu.order('cerveja');
    expect(menu.consumption).toEqual(['coxinha', 'sanduiche', 'coxinha', 'cerveja', 'cerveja']);
    expect(menu.pay()).toBe(34.65);
  });
});
