<template lang="pug">
.container 
  div(v-for="i in data.Article")
    div(v-if="i.slug === namee")
      .video
        iframe.frame(:src="'https://www.youtube.com/embed/'+i.video")
      .contentfood
        
        .right
          .cat(v-for="item in i.category")
              NuxtLink(:to="'/food/'+item" class="but")
                p {{ item }}
          .cont 
            h2 {{ i.translations[0].title}}
            .htm(v-html="i.translations[0].content")
            
          .btm
            p
                LogosPerson/ {{ i.user_updated.first_name  }} {{ i.user_updated.last_name }}
            p
                LogosClock/ {{ i.date_created_func.day }} / {{ i.date_created_func.month }} / {{ i.date_created_func.year }}
        .left
          NuxtLink.images(to="/advertise") 
            img(src="../.././assets/images/ad1.png")
            img(src="../.././assets/images/ad2.png")  
      
</template>

<script setup lang="ts">
const route = useRoute();
const namee = route.params.slug;
const { data } = await useAsyncGql({
  operation: "humm",
});
</script>
<style lang="scss">
.container {
  margin-top: 3em;
  margin-bottom: 10em;
  .video {
    .frame {
      height: 450px;
      width: 100%;
    }
  }
  .contentfood {
    margin-top: 2em;
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 2em;
    .right {
      direction: rtl;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.5em;
      text-align: right;
      .htm{
        text-align: right;
        font-size: 20px;
      }
      .cat {
        border: 1px black solid;
        border-radius: 5em;
        width: 10em;
        display: flex;
        justify-content: center;
        padding: 5px 1em;
        transition: 400ms;
        .but {
          color: inherit;
          text-decoration: none;
          p {
            margin: 0;
          }
        }
        &:hover {
          background: #000;
          color: #fff;
        }
      }
    }
    .left {
      
      height: 200px;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }

}
@media (max-width: 992px) {
  .container {
    .contentfood {
      display: grid;
      grid-template-columns: 1fr;
      .left{
        height: auto;
        width: 80vw !important;
        margin: 0 auto;
        .images{
          display: grid;
          grid-template-columns: 1fr;
        img{
          width: 100%;
          margin: 0;
        }}
      }
    }
  }

}
</style>
