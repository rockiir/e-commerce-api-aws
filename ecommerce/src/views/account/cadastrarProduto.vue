<template>
  <div class="background">           
            <h4 class="seja font-weight-bold text-secondary text-left">Cadastre o seu produto</h4>
  
            <div class="form-group">
              <label for="exampleProduto" class="font-weight-bold text-secondary">Digite o nome do produto</label>
              <input type="text" class="form-control" id="" placeholder="Morangos frescos da tazania" required/>
              <p></p>
              <label for="exampleInputPassword1" class="font-weight-bold text-secondary">Descrição do produto</label>
              <input type="text" class="form-control" id="" placeholder="O morango é uma fruta carnosa e suculenta de coloração vermelha com sabor agridoce...." required />
              <label for="exampleInputPassword1" class="font-weight-bold text-secondary">Imagem do produto</label>
              <div class="input-group mb-3">
              <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon3">https://exampleImagemUrl.com</span>
              </div>
              <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" required>
              </div>
              <label for="exampleInputPassword1" class="font-weight-bold text-secondary">Valor do produto (separado por virgula)</label>
              <div class="input-group mb-3">
             <div class="input-group-prepend">
              <span class="input-group-text">R$</span>
              </div>
              <input type="number" class="form-control"  step="0.01" required>
              <div class="input-group-append">
              </div>
              </div>
              </div>
            <button @click="login()" type="submit" class="btn btn-primary btn-block" >Cadastrar</button>
          </div>
</template>

<script>
//import { mapActions } from "vuex";
import axios from 'axios';
export default{
  name:"form",
  data(){
    return{
      name:null,
      content:null,
      imageUrl:null,
      price:null,
    }
},
 methods:{
        submitForm(){
            axios.post('/contact', this.form)
                 .then(() => {
                     //Perform Success Action
                 })
                 .catch(() => {
                     // error.response.status Check status code
                 }).finally(() => {
                     //Perform action in always
                 });
        }
    }
}
</script>

<style>

.background{
  background-color:white;
  margin-left: 200px;
  margin-right: 200px;
}
.form-group{
  background-color: white;
}


</style>