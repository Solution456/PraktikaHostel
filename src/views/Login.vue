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
              <div v-show="error" class="error">{{ this.errorMsg }}</div>
          </div>
          <button @click.prevent="signIn" class="btn btn--logIn">Log In</button>
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


export default {
    components:{
       password,
       email,
       Loading,
    },

    data() {
        return {
            PhoneNumber: null,
            email: '',
            password: '',
            loading: null,
            error: null,
            errorMsg: null
        };
    },

    methods: {
        signIn() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() =>{
                this.$router.push({name: "Home"});
                this.error = false;
                this.errorMsg = "";
            }).catch(err =>{
                this.error = true;
                this.errorMsg = err.message;
            });
            
        }
    }
}
</script>

<style lang="scss">
    .form-wrap{
        overflow: hidden;
        position: relative;
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        width: 90%;
        
        @media (min-width: 900px){
            width: 100%;
        }

        form {
            padding: 0 10px;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex: 1;
            z-index: 2;
            @media (min-width: 900px){
                padding: 0 50px;
            }

            .inputs {
                width: 100%;
                max-width: 210px;

                .input{
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 20px;

                    input {
                        width: 100%;
                        border: none;
                        background-color: #fff;
                        padding: 4px 4px 4px 20px;
                        height: 35px;
                        border-radius: 25px;

                        &:focus {
                            outline: none;
                        }
                    }

                    .icon {
                        width: 15px;
                        position: absolute;
                        right: 15px;

                        path {
                            fill:rgba(31, 138, 255, 1);
                        }
                    }
                }
            }

            .logo {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                
                position: relative;
                width: 150px;
                height: 150px;
                
                box-sizing: border-box;
                background: linear-gradient(133.61deg, rgba(0, 122, 255, 0.8) 40.89%, #0062CC 94.56%);;
                $border: 2px;
                color: #fff;
                background-clip: padding-box;
                border: solid $border transparent;
                border-radius: 25px;
                margin-bottom: 50px;
               
                &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    z-index: -1;
                    margin: -$border;
                    border-radius: inherit;
                    background: linear-gradient(127.98deg, #FFFFFF 9.62%, #6447F5 81.5%);

                }
                
                h3{
                    padding-top: 45px;
                }

                h4{
                    
                    text-align: center;
                    font-weight: 300;
                    font-size: 20px;
                    line-height: 20px;
                    display: flex;
                    align-items: center;
                    letter-spacing: 0.18em;
                    padding-bottom: 5px;
                    
                }

            }
        }

        .background {
            position: absolute;
            top: 0;
            z-index: 1;
            background-size: cover;
            background: linear-gradient(133.61deg, rgba(0, 122, 255, 0.8) 40.89%, #0062CC 94.56%);
            width: 100%;
            height: 430px;
            border-radius: 0px 0px 20px 20px;;


        }
    }


</style>