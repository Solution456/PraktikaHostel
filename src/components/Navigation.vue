<template>
  <header>
      <nav>

        <div class="User_logo">

        </div>
        
        <ul>
            <li><router-link class="link" :to="{ name: 'Home'}">Мероприятия</router-link></li>
            <li><router-link class="link" to="#">Мои этаж</router-link></li>
            <li><router-link class="link" to="#">Заявки на баллы</router-link></li>
        </ul>

    </nav>
  </header>
  
</template>

<script>
export default {
    
    name: "navigation",
    
    data() {
        return{

        };
    }

}
</script>


<style lang="scss" scoped>

    header{
        width: 200px;
        position: fixed;
        background-color: #1F8AFF;
        height: 100vh;
        overflow: hidden;
        z-index: 99;
        display: flex;


        

        nav {
            width: 100%;
            padding: 12px 0 12px 10px;
            text-align: end;
            color: #1F8AFF;

            ul{
                list-style: none;
                text-decoration: none;

                li{
                    
                    text-transform: uppercase;
                    padding: 16px;
                    margin-top: 20px;
                    line-height: 1.2;
                    

                    .link {
                        
                        font-weight: 600;
                        padding: 0 8px;
                        color: #fff;

                        
                    }
                    &:hover{
                        background-color: #fff;
                        border-radius: 20px 0 0 20px;
                        .link {
                            color: #1F8AFF;
                        }
                    }                    
                }
            }
        }
    }


</style>


