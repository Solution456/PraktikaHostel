<template>
  <div class="Events-wrapper">
      <div class="events-title">
          <h2>{{post.title}}</h2>
      </div>
      <div class="events-icon">
          <img :src="require(`../assets/blogCards/${post.EventsCoverPhoto}.jpg`)" alt="">
          
      </div>
      
      <div class="events-content">
          <router-link class="btn btn--grad" to="#">Узнать больше</router-link>
      </div>
  </div>
</template>

<script>
export default {
    name:"Events",
    props: ["post"],
}
</script>


<style lang="scss" scoped>
    .Events-wrapper{
        position: relative;
        width: 350px;
        height: 200px;
        background-color: #fff;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.15);

        .events-title{
            position: absolute;
            z-index: 3;
            width: 100%;
            cursor: default;
            text-align: center;
            top: 45%;
            color: #fff;
            opacity: 1;
            transition: 0.3s;

            h2{
                line-height: 30px;
                font-size: 25px;
            }
           
        }

         &:hover .events-title{
                display: none;
                opacity: 0;
        }

        .events-icon{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(115.09deg, rgba(0, 122, 255, 0.75) 22.67%, rgba(20, 120, 230, 0.6) 86.68%);


            transition: 0.5s;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            z-index: 2;
            
            img{
                opacity: 0.7;
                width: 100%;
                height: 100%;
                display: block;
                object-fit: cover;
            }

            
        }

        &:hover .events-icon{
                
                left: calc(50% - 40px);
                width: 80px;
                height: 80px;
                border-radius: 50%;
        }
        .events-content{
            position: relative;
            padding: 20px;
            color: #000;
            text-align: center;
            margin-top: 100px;
            z-index: 1;
            transition: 0.5s;
            transform: scale(0);
            transition-delay: 0s;
        }

        &:hover .events-content{
            transform: scale(1);
            transition-delay: 0.20s;
        }
    }
</style>