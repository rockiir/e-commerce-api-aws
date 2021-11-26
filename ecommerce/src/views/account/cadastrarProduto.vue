<template>
  <div class="background">           
            <h4 class="titulo font-weight-bold text-secondary text-left text-uppercase">Cadastre o seu produto</h4>
            <form class="form-group" id ="formProduct" @submit="CriarProduct" >
  <Message :msg="msg" v-show="msg" />
              <label for="exampleProduto" class=" font-weight-bold text-secondary">Digite o nome do produto</label>
              <input type="text" class="form-control" id="name" name="name" v-model="name" placeholder="Morangos frescos da tazania" required/>
              <p></p>
              <label for="exampleInputPassword1" class="font-weight-bold text-secondary">Descrição do produto</label>
              <input type="text" class="form-control" id="content" name="content" v-model="content" placeholder="O morango é uma fruta carnosa e suculenta de coloração vermelha com sabor agridoce...." required />
              <label for="exampleInputPassword1" class="font-weight-bold text-secondary">Imagem do produto</label>
              <div class="input-group mb-3">
              <div class="input-group-prepend">
              <span class="input-group-text" id="imageUrl">https://exampleImagemUrl.com</span>
              </div>
              <input type="link" class="form-control" aria-describedby="basic-addon3" id="imageUrl" name="imageUrl" v-model="imageUrl" required>
              </div>
              <label for="exampleInputPassword1" class="font-weight-bold text-secondary">Valor do produto (separado por virgula)</label>
              <div class="input-group mb-3">
             <div class="input-group-prepend">
              <span class="input-group-text">R$</span>
              </div>
              <input id="price" type="number" class="form-control" name="price" v-model="price" step="0.01" required>
              <div class="input-group-append">
              </div>
              </div>
            <button type="submit" class="btn btn-primary btn-block">Cadastrar</button>
            <routter-link type="button" class="btn btn-danger btn-block" to="/">voltar</routter-link>
          </form>

          </div>
</template>

<script>
import Message from '../../components/details/message.vue';
//import axios from 'axios';
export default{
  name:"formProduct",
  data(){
    return{
      name:null,
      content:null,
      imageUrl:null,
      price:null,
    }
},
 methods:{
   async CriarProduct(e){
     e.preventDefault();
    const data = {
      name:this.name,
      content: this.content,
      imageUrl: this.imageUrl,
      price: this.price
    }
const dataJson = JSON.stringify(data) ; 

const req = await fetch("http://ec2-18-215-185-41.compute-1.amazonaws.com:5000/cadastrar" ,{
  method: "POST",
  headers: {"content-type": "application/json"},
  body: dataJson

});
this.msg = "produto cadastrado com sucesso!!"
      // clear message
      setTimeout(() => this.msg = "", 3000)
      // limpar campos
      this.name = ""
      this.content = ""
      this.imageUrl = ""
      this.price = []
      
await req.json();

//console.log(res);

 }


    },
    components: {
    Message
  }
}
 
</script>

<style>

.form-group{
      background-color: white;

  text-align: left !important;
  margin-left: 2vh;
}
.background{
    background-color: white;

  margin-top:10vh;
}
.titulo{

  font-family:'Roboto';
  color:rgb(121, 121, 121) !important;
  font-size:5vh;
  text-align:center !important;
}

</style>