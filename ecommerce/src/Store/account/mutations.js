//cs-ecommerce/src/store/account/mutations.js
/*recebe o  userData estado como um parâmetro e um valor que 
será atribuído a ele no  actions.js momento em que alguma função
 o comprometer. 
A função de mutação atribuirá o valor recebido ao  userData estado.
*/
//mutations.js é usado para definir dados no estado
export function setUserData(state, val) {
    state.userData = val
}