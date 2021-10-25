<template>
  <div class="home wrapper">
    <div class="title_header">
      <h2 class="title">Мероприятия</h2>
    </div>
    <div class="events">
      <div class="events_inner">
        <div class="events_items">
          <h4 class="events_title">Ближайшие</h4>
          <div class="events_first">
          <Events :post="post" v-for="(post, index) in SampleEvents" :key="index"/>
          </div>  
        </div>

        <div class="event-card-wrap">
          <div class="events_items">
            <h4 class="event-card_title">Другие</h4>
            <div class="events_card">
            <EventCard :post="post" v-for="(post, index) in SampleEventCard" :key="index"/>
            </div>
          </div>  
        </div>
      </div>
    </div>

    <div class="allEvents">
      <div class="container">
        <h2>Увидеть все мероприятия</h2>
        <router-link class="btn btn--grad" :to="{name: `Events`}"> Посмотреть все </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Events from '../components/Events.vue'
import EventCard from '../components/EventCard.vue'

export default {
  name: "Home",
  components: {
    Events, EventCard,
  },
  data() {
    return {
      SampleEvents:[
      {
        title: "Title",
        EventsHTML: "",
        EventsCoverPhoto:"stock-1",
      },

      {
        title: "Title2",
        EventsHTML: "",
        EventsCoverPhoto:"stock-2",
      },

      ],
    };
  },

  computed:{
    SampleEventCard() {
      return this.$store.state.SampleEventCard
    }
  }
};
</script>

<style lang="scss" scoped>
  .title_header{
    display:flex;
    
    margin-bottom: 50px;
    padding: 20px;
    width: 100%;
    height: auto;
    border-radius: 10px;
    background-color: white;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.15);

    
    .title {
      font-size: 35px;
      color: #007AFF;
      line-height: 30px;

      &::after{
        content: "";
        display: block;

        width: 235px;
        height: 3px;
        margin: 5px auto;
        

        background: linear-gradient(rgba(151, 25, 224, 1),rgba(0, 98, 204, 1));
      }
    }
  }

  .events {
    width: 100%;
    height: auto;
    padding: 20px;
    margin-top: 20px;

    .events_inner{
       display: flex;
       width: 100%;
       flex-direction: column;
      
      .events_items{

        margin-bottom: 30px;

        .events_title{
        font-size: 24px;
        color: #007AFF;
        text-transform: uppercase;
        position: relative;
        margin-bottom: 30px;
        

        &::after{
        content: "";
        display: block;
        width: 15%;
        height: 3px;
        margin: 2px auto;
        position: absolute;
        

        background: linear-gradient(rgba(151, 25, 224, 1),rgba(0, 98, 204, 1));
        }
       }

       .event-card_title{
         
         color: #007AFF;
         font-size: 18px;
         font-weight: 600;
         text-transform: uppercase;
         position: relative;
         margin-bottom: 30px;

         &::after{
          content: "";
          display: block;
          width: 7%;
          height: 3px;
          margin: 2px auto;
          position: absolute;
          

          background: linear-gradient(rgba(151, 25, 224, 1),rgba(0, 98, 204, 1));
          }
       }

       .events_first{
        display:flex;
        justify-content: center;
        margin-top: 30px;
        
        gap: 100px;
        }
      } 
    }
  }
  .allEvents{
    width: 100%;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    
    .container{
    
      padding: 70px 25px;
      padding-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;


      @media(min-width:800px) {
        
        padding: 80px 25px;
        padding-top: 25px;
        flex-direction: row;
      }

      .btn {
        display: flex;
        font-size: 14px;
        text-decoration: none;
        @media (min-width: 800px){
          margin-left: auto;
        }
      }

      h2{
        font-weight: 300;
        font-size: 32px;
        max-width: 425px;
        width: 100%;
        text-align: center;
        text-transform: uppercase;

        @media (min-width: 800px) {
          text-align: initial;
          font-size: 40px;
        }
      }
    }
  }
</style>
