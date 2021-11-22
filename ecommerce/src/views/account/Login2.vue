<template>
  <div class="background">
    <div class="container" style="padding-top: 5%">
      <div class="row d-flex justify-content-center">
        <div class="col-5 text-left login-form-container">
          <div class="d-flex justify-content-center">
            <img src="https://logodownload.org/wp-content/uploads/2016/09/Spotify-logo.png" width="180vh" alt="Nome da marca" class="Logo-login">
          </div>
          <div>
            <h4 class="seja font-weight-bold text-secondary text-center">Seja um fornecedor, se cadastre é rápido e facil</h4>
            <div class="form-group form-floating mb-3">
              <label for="exampleInputEmail1" class="font-weight-bold text-secondary" >Digite o seu endereço de e-mail</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Josesantos@email.com"
                
              />
              <small
                id="emailHelp"
                class="form-text text-muted"
              >Nos nunca compartilhamos seu e-mail externamente</small>
            </div>
            <div class="form-group">
              <label for="exampleNome" class="font-weight-bold text-secondary">Digite seu nome</label>
              <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Jodelle dos santos"
/>
              <label for="exampleInputPassword1" class="font-weight-bold text-secondary">Escolha uma senha</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Joseane dos santos"
/>
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <p class="form-check-label text-secondary">Concordo com os <a href="#">Termos e condições</a></p>
            </div>
            <button @click="login()" type="submit" class="btn btn-primary btn-block" >Cadastrar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  methods: {
    ...mapActions("account", ["login"]),
  },
};
</script>

<style>

.form-control {
  border-radius: 0%;
  height: 40px;
  border:none;
  border-bottom: 1px solid;
  margin-bottom:2vh;
}
.login-form-container {
  padding: 20px;
  box-shadow: 0px 2px 5px 2px #888888;
}
.btn {
  border-radius: 0%;
  font-weight: bold;
  background: teal;
  border: teal;
}
.btn:hover {
  background: #00b4b4;
}
.btn:focus {
  background: teal;
}
.login-form-container{
  background-color: #ffff;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
-webkit-box-shadow: 1px 3px 14px 0px rgba(50, 50, 50, 1);
-moz-box-shadow:    1px 3px 14px 0px rgba(50, 50, 50, 1);
box-shadow:         1px 3px 14px 0px rgba(50, 50, 50, 1);
}
.Logo-login{
  margin:5vh;
}
.background{
background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);  
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  height: 150vh;
  width: 100vw;     
}
.seja{
  padding:2vh;
}
</style>