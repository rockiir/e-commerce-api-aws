//cs-ecommerce/src/store/product/state.js
/*
products estado - armazenará a lista de produtos
product estado - irá armazenar um produto específico
cart estado - armazenará a lista de produtos no carrinho
*/
export default function () {
    return {
      products: [],
      product: {},
      cart: []
    }
  }