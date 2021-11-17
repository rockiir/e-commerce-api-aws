//cs-ecommerce/src/views/home/ProductCard.vue
/**Cartão de produtos
 * 
 */
<template>
  <div class="card mb-3 shadow-sm">
    <img :src="product.imageUrl" class="card-img-top product-image " />
    <div class="card-body">
      <h5 class="nome card-title text-center">{{ product.name }}</h5>
      <div class="row">
        <div class=""><p class="h4 preco-produto font-weight-bold ">R$: {{ product.price }}</p></div>
        <router-link
          type="button"
          class="text-center btn btn-primary btn-lg btn-block"
          :to="'/details/' + product.id"
        >Detalhes</router-link> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "ProductCard",
    props: ["product"]
};
</script>

<style>
.card .product-image {
  height: 200px;
  width:auto;
}
.preco-produto{
  text-align:center;
}

img {
  padding:2vh;
  
}
.card-title{
  margin:2px;
}
.card-body{
  padding-top:0px;
}
</style>