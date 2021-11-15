//cs-ecommerce/src/store/account/index.js
/*
importamos getters, mutações, ações e estado.
*/
import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}