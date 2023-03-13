<template lang="pug">
.card(v-for="i in data.Article")
    NuxtLink(:to="'/read/'+i.slug" class="lin")
        .image
            img(:src="'https://board.humm.world/assets/'+i.translations[0].cover.id")
        h3 {{ i.slug }}
        .cont 
            h4 {{ i.translations[0].title}}
        .btm
            p
                LogosPerson/ {{ i.user_updated.first_name  }} {{ i.user_updated.last_name }}
            p
                LogosClock/ {{ i.date_created_func.day }} / {{ i.date_created_func.month }} / {{ i.date_created_func.year }}
</template>
    
    <script setup lang="ts">
    const props = defineProps(["data"]);
   
    </script>
    
    <style lang="scss" scoped>
    * {
      p {
        color: #202020;
      }
    }
    .card {
      
      display: grid;
      position: relative;
      min-height: max-content;
      height: 400px;
      margin-top: 0.5em;
      padding: 1em;
      border: 1px solid black;
      transition: 300ms;
      text-decoration: none;
      .image {
        width: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .cat {
        margin-top: .5em;
        border: #000 solid 1px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-content: center;
        text-align: center;
        width: fit-content;
    
        .but{
          width: 100%;
          margin: 0;
          border-radius: 20px;
          padding: 0px 10px;
          text-decoration: none;
          color: inherit;
          transition: 300ms;
        &:hover {
          text-decoration: none;
          color: white;
          background: #000;
        }
    
        &-exact-active,
        &-active {
          text-decoration: none;
          color: inherit;
        }
        }
        h6 {
          display: flex;
          align-self: center;
          margin-top: 5px;
        }
      }
      .btm {
        position: absolute;
        bottom: 0;
        p{
          display: flex;
          align-items: center;
          gap: .2em;
        }
      }
      .lin {
        text-decoration: none;
        color: inherit;
    
        &:hover {
          text-decoration: none;
          color: inherit;
        }
    
        &-exact-active,
        &-active {
          text-decoration: none;
          color: inherit;
        }
      }
      &:hover {
        text-decoration: none;
        box-shadow: 5px 5px #000;
      }
    }
    @media (max-width:768px) {
        .card{
            min-height: max-content;
            height: 420px;
    
        }
    }
    
    </style>
    