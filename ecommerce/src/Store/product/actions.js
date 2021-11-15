//cs-ecommerce/src/store/product/actions.js
/**
 *  criar uma função para recuperar todos os produtos com Axios, 
 * uma função para recuperar detalhes de um produto, 
 * uma função para adicionar o produto ao carrinho, 
 * uma função para remover o produto do carrinho
 */
import axios from "axios"

//Action to get products list

//adiciona os produtos
export function getProducts({ commit }) {
    let url = "https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products";
    axios.get(url).then((response) => {
        commit("setProducts", response.data);
    }).catch(error => {
         console.log(error);
    });
}

//detalhes do produto
export function productDetails({ commit }, id) {
    let url = "https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products";
    axios.get(url, { params: { id: id } }).then((response) => {
        commit("setProduct", response.data[0]);
    }).catch(function (error) {
        console.log(error);
    });
}

//Adiciona ao carrinho
export function addCart({ commit, getters }, payload) {
    let cart = getters.cart //receberá como parâmetro um objeto de produto e o adicionará ao array cart.
    cart.push(payload)//pega o que está no carrinho e coloca em uma variável temporária
    commit("setCart", cart)//produto permanece temporariamente
}

//Adiciona a matriz do carrinho ao estado do carrinho.
export function removeCart({ commit, getters }, id) {
    let cart = []
    if (id) {
        for (let index = 0; index < getters.cart.length; index++) {
            const element = getters.cart[index];
            if (element.id !== id) {
                cart.push(element)
            }
        }
    }
    commit("setCart", cart)
}

