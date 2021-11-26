//cs-ecommerce/src/Layout/Base.html
//Menu inicial
<template>
  <div>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <router-link class="navbar-brand" to="/"><img src="https://i.imgur.com/3WdM02G.png" width="180vh" alt="Companhia dos organicos" class="Logo">
</router-link>

        <div class="ml-auto">
          <div v-if="user.photoURL">
            <router-link class="teste btn btn-primary " to="/">VERDURAS</router-link>
            <router-link class="teste btn btn-primary " to="/">LEGUMES</router-link>
            <router-link class="teste btn btn-primary " to="/">FRUTAS</router-link>
            <router-link class="teste btn btn-primary " to="/">VARIADOS</router-link>
            <router-link class="cadastrar btn btn-secondary my-2 my-sm-0" to="/Cadastrar">CadastrarProduto</router-link>
             
            <img
              :src="user.photoURL"
              class="img-thumbnail profile-image"
              alt
            />
           <router-link class="btn btn-primary my-2 my-sm-0" to="/">
              <img
                src="https://i.imgur.com/mD2jN2T.png"
                width="50"
                alt
              />
              <span class="badge badge-danger badge-pill">2</span>
            </router-link>

            <router-link class="btn btn-secondary my-2 my-sm-0" to="/cart">
              <img
                src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png"
                width="60"
                alt
              />
              <span class="badge badge-danger badge-pill">{{ cart.length }}</span>
            </router-link>
          </div>
          <router-link v-else class="btn btn-primary my-2 my-sm-0" to="/login">Entrar</router-link>
        </div>
      </nav>
    </div>
    <div class="page-container">
      <router-view />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Base",
  computed: {
    ...mapGetters("account", ["user"]),
    ...mapGetters("product", ["cart"]),
  }
};
</script>

<style>
nav {
  background-color:#378842;
}
.btn-primary{
  background:#378842 !important;
}
.btn-danger{
  background:#e00044 !important;
}

.teste{
  margin-right:10vh !important;
    text-align: left !important;

}

.navbar-brand {
  font-weight: bold;
  font-size: 25px;
  color: #ffffff !important;
    font-family:Roboto;

}
.profile-image {
  width: 50px;
  border-radius: 100% !important;
}
.page-container {
  padding-top: 81px;
}
.btn {
  border-radius: 0%;
  font-weight: bold;
  background: #378842;
  border: teal;
}
.btn:hover {
  background: #00b4b4;
}
input {
  border-radius: 0%;
}
.btn:focus {
  background: #378842;
}
</style>