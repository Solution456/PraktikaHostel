<template>
  <div class="event-card-wrap">
      <div class="events_card wrapper">
          <div class="toggle-edit">
              <span>Toggle edit events</span>
              <input type="checkbox" v-model="editEvent">
          </div>
          <EventCard :post="post" v-for="(post, index) in SampleEventCard" :key="index"/>
      </div>

  </div>
</template>

<script>
import EventCard from '../components/EventCard.vue'

export default {
    name: "eventsView",

    components: {
        EventCard,
    },

    computed: {
        SampleEventCard() {
            return this.$store.state.SampleEventCard;
        },
        editEvent: {
            get(){
                return this.$store.state.editEvent;
            },
            set(payload) {
                this.$store.commit("toggleEditEvent", payload);
            }
        }
    },

    beforeDestroy(){
        this.$store.commit("toggleEditEvent", false);
    }
}
</script>

<style lang="scss" scoped>
    .events_card{
        position: relative;

        .toggle-edit{
            display: flex;
            align-items: center;
            position: absolute;
            top: -70px;
            right: 0;

            span{
                margin-right: 20px;
            }

            input[type='checkbox']{
                position: relative;
                border: none;
                -webkit-appearance: none;
                background: #fff;
                outline: none;
                width: 80px;
                height: 30px;
                border-radius: 20px;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }

            input[type='checkbox']:before{
                content: "";
                position: absolute;
                width: 30px;
                height: 30px;
                border-radius: 20px;
                top: 0;
                left: 0;
                background: #1F8AFF;
                transform: scale(1.1);
                transition: .75s ease all;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }

            input:checked[type='checkbox']:before{
                background: #fff;
                left: 52px;
            }
        }
    }

    
</style>