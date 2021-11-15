//cs-ecommerce/src/store/product/mutations.js
/***
 * setProducts - Atribuir lista de produtos para declarar produtos
 * setProduct - Atribuir um objeto com um produto específico ao estado do produto
 * setCart - Atribui uma lista de produtos adicionados ao carrinho ao estado do carrinho
*/
export function setProducts(state, val) {
    state.products = val
}
export function setProduct(state, val) {
    state.product = val
}
export function setLoad(state, val) {
    state.uploadingData = val
}
export function setCart(state, val) {
    state.cart = val
}