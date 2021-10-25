<template>
  <div class="event-card">
      <div v-show="editEvent" class="icons">
          <div class="icon">
              <Edit class="edit" />
          </div>
          <div class="icon">
              <Delete class="delete" />
          </div>
      </div>
      <img :src="require(`../assets/blogCards/${post.CoverPhoto}.jpg`)" alt="">
      <div class="info">
          <h4>{{post.EventTitle}}</h4>
          <h6>Date: {{post.EventDate}}</h6>
          <router-link class="link" to="#"> Посмотерть <Arrow class="arrow"/></router-link>

      </div>
  </div>
</template>

<script>

import Arrow from '../assets/Icons/arrow-right-light.svg';
import Edit from '../assets/Icons/edit-regular.svg';
import Delete from '../assets/Icons/trash-regular.svg';



export default {
    name: "EventCard",

    props: ['post'],
    components:{
        Arrow,
        Edit,
        Delete,
    },
    
    computed: {
        editEvent() {
            return this.$store.state.editEvent
        }
    }
}
</script>

<style lang="scss" scoped>
    .event-card{
        position: relative;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        background-color: #fff;
        min-height: 300px;
        transition: .5s ease all;

        &:hover {
            transform: scale(1.05);
            box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.15);
        }

        .icons {
            display: flex;
            position: absolute;
            top: 10px;
            right: 10px;
            z-index: 99;

            .icon{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 35px;
                height: 35px;
                border-radius: 50%;
                background-color: #fff;
                transition: .5s ease all;

                &:hover {
                    background-color: #303030;

                    .edit,
                    .delete{
                        path {
                            fill: #fff;
                        }
                    }
                }

                &:nth-child(1){

                    margin-right: 8px;
                }

                .edit,
                .delete{
                    pointer-events: none;
                    height: 15px;
                    width: auto;
                }
            }
        }

        img{
            display: block;
            border-radius: 8px 8px 0 0;
            z-index: 1;
            width: 100%;
            min-height: 150px;
            object-fit: cover;
        }

        .info{
            display: flex;
            flex-direction: column;
            height: 100%;
            z-index: 3;
            padding: 32px 16px;
            color: #000;

            h4{
                margin-bottom: 8px;
                font-size: 28px;
                font-weight: 300;
            }

            h6{
                font-weight: 400;
                font-size: 12px;
                padding-bottom: 16px;
            }

            .link{
                display: inline-flex;
                align-items: center;
                margin-top: auto;
                font-weight: 500;
                padding-top: 28px;
                font-size: 12px;
                padding-bottom: 4px;
                transition: .5s ease-in all;

                &:hover{
                    color: rgba(48, 48, 48, 0.8)
                }

                .arrow{
                    width: 10px;
                }
            }
        }
    }


</style>

