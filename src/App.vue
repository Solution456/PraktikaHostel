<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation v-if="!navigation"/>
      <router-view />
    </div>
  </div>
</template>


<script>
import Navigation from './components/Navigation.vue';

import "firebase/auth";


export default {
  name: "app",
  components: {
    Navigation,
  },
  data() {
    return {
      navigation: null,
    };
  },
  created() {
    this.checkRoute();
  },
  mounted() {},
  methods: {
    checkRoute(){
      if (this.$route.name === "Login" || this.$route.name ==="Register"){
        this.navigation = true;
        return;
      }
      this.navigation = false;
    }
  },
  watch: {
    $route(){
      this.checkRoute();
    }
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

body{
  background-color: #f5f5f5;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
}

.wrapper {
  position: absolute;
  width: calc(100% - 200px);
  left: 200px;
  padding: 20px;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.btn {
  display: inline-block;
  vertical-align: top;
  padding: 15px 40px;
  border-radius: 2px;
  border: 0;
  cursor: pointer;
  font-family: inherit;
  font-size: 13px;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  transition: background .1s linear;
}

.btn--logIn {
  padding: 12px 60px;
  border-radius: 25px;
  background: linear-gradient(93.68deg, #007AFF 4.78%, #6447F5 89.93%);
}

.btn--grad{
  background: linear-gradient(93.68deg, #007AFF 4.78%, #6447F5 89.93%);
}

.arrow {
  margin-left: 8px;
  width: 12px;
  path{
    fill: 000;
  }
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;

}

.link-light {
  color: #fff;
}


.event-card-wrap{
  position: relative;
  padding: 80px 16px;
  padding-bottom: 20px;

  @media(min-width: 500px){
    padding: 100px 16px;
    padding-bottom: 20px;
  }

  .events_card{
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr;

    @media(min-width: 500px){
     grid-template-columns: repeat(1,1fr);
    }
    @media(min-width: 900px){
     grid-template-columns: repeat(2,1fr);
    }
    @media(min-width: 1200px){
     grid-template-columns: repeat(3,1fr);
    }
  }
}
</style>
