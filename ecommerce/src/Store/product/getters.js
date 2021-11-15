//cs-ecommerce/src/store/product/getters.js

/**
 * products função - Retorna o estado que armazena a lista de produtos
product - Retorna o estado que armazena um produto específico quando o usuário deseja ver os detalhes do produto
cart - Retorna o estado que armazena os produtos no carrinho
 */
export function products (state) {
    return state.products
}
export function product (state) {
    return state.product
}
export function cart (state) {
    return state.cart
}