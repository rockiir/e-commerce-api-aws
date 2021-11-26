<template>
  <div class="background bgb">
    <div class="container" style="padding-top: 5%">
      <div class="row d-flex justify-content-center">
        <div class="col-5 text-left login-form-container">
          <div class="d-flex justify-content-center">
            <img src="https://i.imgur.com/TbMfks6.png" width="180vh" alt="Nome da marca" class="Logo-login">
          </div>
          <div>
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
              <label for="exampleInputPassword1" class="font-weight-bold text-secondary">Digite sua senha</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="*********"
/>
              <a href="#" class="text-secondary">Esqueci a senha</a>
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label text-secondary" for="exampleCheck1">Lembrar minha senha</label>
            </div>
            <button @click="login()" type="submit" class="btn btn-primary btn-block">Login</button>
            <p class="message text-secondary">Não registrada? <a href="#">Crie sua conta</a></p>

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
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  height: 100vh;
  width: 100vw;     
}
.bgb{
  background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);  

}
</style>