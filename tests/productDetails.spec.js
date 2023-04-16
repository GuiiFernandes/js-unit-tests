const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    expect(productDetails()).toBeInstanceOf(Array);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails().length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    const isObject = (value) => typeof value === 'object' && value !== null && !Array.isArray(value);
    const arrayProducts = productDetails('Alcool gel', 'Máscara');
    for (let index = 0; index < arrayProducts.length; index+= 1) {
      expect(isObject(arrayProducts[index])).toBe(true);
    }
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    for (let index = 0; index < arrayProducts.length - 1; index += 1) {
      for (let indexSecond = 1; indexSecond < arrayProducts.length; indexSecond += 1) {
        expect(arrayProducts[index]).not.toEqual(arrayProducts[indexSecond]);
      }
    }
    // Teste se os dois productIds terminam com 123.
    for (let index = 0; index < arrayProducts.length; index += 1) {
      expect(arrayProducts[index].details.productId).toMatch(/123$/);
    }
  });
});
