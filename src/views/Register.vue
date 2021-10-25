<template>
  <div class="form-wrap">
      <Loading v-if="loading"/>  
      <form class="login">
          <div class="logo">
              <h3>Logo</h3>
              <h4>Student hostel App</h4>
          </div>
          <div class="inputs">
              <div class="input">
                  <input type="text" placeholder="Почта" v-model="email" />
                  <email class="icon" />
              </div>
              <div class="input">
                  <input type="password" placeholder="Пароль" v-model="password" />
                  <password class="icon" />
              </div>
              <div class="input">
                  <input type="text" placeholder="Имя" v-model="Name" />
                  <password class="icon" />
              </div>
              <div class="input">
                  <input type="text" placeholder="Фамилия" v-model="SecondName" />
                  <password class="icon" />
              </div>
              <div class="input">
                  <input type="text" placeholder="этаж" v-model="Elve" />
                  <password class="icon" />
              </div>
              <div class="input">
                  <input type="text" placeholder="квартира" v-model="home" />
                  <password class="icon" />
              </div>
              <div v-show="error" class="error">{{ this.errorMsg }}</div>
          </div>
          <button @click.prevent="register" class="btn btn--logIn">Sign Up</button>
      </form>
      <div class="background"></div>
  </div>
</template>

<script>
import password from "../assets/Icons/lock-alt-solid.svg"
import email from "../assets/Icons/envelope-regular.svg"
import Loading from "../components/Loading.vue";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit.js";


export default {
    name: "Register",
    components: {
        password,
        email,
        Loading,
    },
    data() {
        return {
            Name: null,
            SecondName: null,
            Elve:null,
            home:null,
            password:null,
            email: null,
            loading: null,
            error: null,
            errorMsg: null
        }
    },

    methods: {
        async register(){
            if (
                this.Name !== "" &&
                this.SecondName !== "" &&
                this.Elve !== "" &&
                this.home !== "" &&
                this.email !== "" &&
                this.password !== ""
            ){
                this.error = false;
                this.errorMsg = "";
                const firebaseAuth = await firebase.auth();
                const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password);
                const result = await createUser;
                const dataBase = db.collection("users").doc(result.user.uid);
                await dataBase.set({
                    Name: this.Name,
                    SecondName: this.SecondName,
                    Elve: this.Elve,
                    Home: this.home,
                });
                return;
            }
            this.error = true;
            this.errorMsg = "Error!"
        },
    },
}
</script>

<style>

</style>