//cs-ecommerce/src/views/home/Details.vue
<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-6">
        <div class="card text-left shadow-md">
          <img class="card-img-top" :src="product.imageUrl" alt />
        </div>
      </div>
      <div class="col-6 text-left text-justify">
        <div>
        <div class="display-3 text-uppercase">{{ product.name }}</div>

        <div class="preco">
          <p class="h3">Preço</p>
          <p class="h2 text-danger">R$: {{ product.price }}</p>
        </div>
        <p class="lead text-justify">{{ product.content }}</p>
      </div>
      <div>
      <AddToCart :product="product" v-if="user.uid" />
      
      </div>
          <img class="" src="https://i.imgur.com/mD2jN2T.png" width="50" alt/>
    </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddToCart from "../../components/details/AddToCart"
export default {
  data () {
    return {
      isInCardProp: false,
    }
  },
  computed: {
    ...mapGetters("account", ["user"]),
    ...mapGetters("product", ["product"])
  },
  components: { AddToCart },
  methods: {
    ...mapActions("product", ["productDetails"]),
  },
  mounted() {
    this.productDetails(this.$route.params.idProduct);
  }
};
</script>

<style>
.display-3{
  margin-bottom:3vh;
  font-family: 'Roboto';
}
.container-fluid {
  padding: 30px;
}
.image-product {
  width: 100%;
}
.card * {
  max-height: 85vh;
}
.preco{
  text-align: left;
  margin-top:2vh;
  margin-bottom:10vh;
  
}
.lead{
  margin-bottom:10vh;
}

</style>