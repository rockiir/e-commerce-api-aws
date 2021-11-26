//cs-ecommerce/src/store/product/actions.js
/**
 *  criar uma função para recuperar todos os produtos com Axios, 
 * uma função para recuperar detalhes de um produto, 
 * uma função para adicionar o produto ao carrinho, 
 * uma função para remover o produto do carrinho
 */
import axios from "axios"

//adiciona os produtos
export function getProducts({ commit }) {
    let url = "http://ec2-18-215-185-41.compute-1.amazonaws.com:5000/listar";
    axios.get(url).then((response) => {
        commit("setProducts", response.data);
    }).catch(error => {
         console.log(error);
    });
}
//detalhes do produto
export function productDetails({ commit }, id) {
    let url = "http://ec2-18-215-185-41.compute-1.amazonaws.com:5000/listar";
    axios.get(url, { params: { id: id } }).then((response) => {
        commit("setProduct", response.data[id]);
        //console.log(id);
        console.log(response.data)
    }).catch(function (error) {
        console.log(error);
    });
}
//detalhes do produto
/*export function productDetails({ commit }, id) {
    let url = "http://ec2-44-198-188-49.compute-1.amazonaws.com:5000/listar";
    axios.get(url, { params: { id: id } }).then((response) => {
        response.data.find(id)
        /*for (let index = 0; index < response.data.find; index++){
            if (response.data.find === id);
            index == id;
        
        }
        console.log(response.data.indexOf(elem.id));
        commit("setProduct",response.data );


         console.log(response.data[])
         console.log(id)
    }).catch(function (error) {
        console.log(error);
    });
}*/

//Adiciona ao carrinho
export function addCart({ commit, getters }, payload) {
    let cart = getters.cart //receberá como parâmetro um objeto de produto e o adicionará ao array cart.
    let data = payload.product
    data["quantity"] = payload.quantity
    cart.push(data)//pega o que está no carrinho e coloca em uma variável temporária
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
            console.log(element.id);
            console.log(id)
        }
      
    }
    commit("setCart", cart)
}

