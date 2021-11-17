//cs-ecommerce/src/views/home/Products.vue
<template>

  <div style="padding: 20px;">
    <div class="container">
      <div class="imagem-banner" >  
        <img src="https://i.imgur.com/rh25f6O.png" alt="Italian Trulli ">
</div>
      <div class="row">
        <div class="col-md-3" v-for="product in products" :key="product.id">
          <ProductCard :product="product" />

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
//import Slide from "../components/products/ProductCard";
import ProductCard from "../../components/products/ProductCard";
export default {

  computed: {
    ...mapGetters("product", ["products"]),
  },
  components: { ProductCard },
  methods: {
    ...mapActions("product", ["getProducts", "addCart", "removeCart"]),
  },
  mounted() {
    this.getProducts();
  }
 
};
</script>

<style>
.imagem-banner{
  height: 70vh;
}
</style>