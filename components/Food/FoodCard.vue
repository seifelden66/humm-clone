<template lang="pug">
.card(v-for="i in data.Article")
    NuxtLink(:to="localePath('/food/'+i.slug)" class="lin")
        .image
            img(:src="'https://board.humm.world/assets/'+i.translations[0].cover.id")
        h4 {{ i.slug }}
      
          
        
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
.card {
  .lin {
    position: relative;
    text-decoration: none;
    color: inherit;
    padding: 10px;
    height: 300px;
    transition: 350ms;
    &:hover {
      text-decoration: none;
      box-shadow: 5px 5px #000;
    }
    border: #000 solid 1px;

    .image {
      width: 100%;
      height: 20vh;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .cat {
      margin-top: 0.5em;
      border: #000 solid 1px;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-content: center;
      text-align: center;
      width: 8em;

      padding: 0px 10px;

      color: inherit;
      transition: 300ms;
      &:hover {
        color: white;
        background: #000;
      }

      h6 {
        font-size: 14px;
        display: flex;
        align-self: center;
        margin-top: 5px;
      }
    }
    .btm {
      position: absolute;
      display: flex;
      justify-content: center;
      flex-direction: column;
      bottom: 5%;
      p {
        margin: 0;
        display: flex;
        align-items: center;
        color: #585858;
        gap: 0.2em;
      }
    }
  }
}

@media (max-width: 992px) {
  .card {
    
    .lin {
      min-height: max-content;
      height: 300px;
      .image {
        width: 100%;
        height: 20vh;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .btm {
        margin-top: 1em;
        position: absolute;
        display: flex;
        justify-content: center;
        flex-direction: column;
        
        p {
          margin: 0;
          display: flex;
          align-items: center;
          color: #585858;
          gap: 0.2em;
        }
      }
    }
    
  }
}
@media (max-width: 576px) {
  .card {
    .lin {
      min-height: max-content;
      height: 60vh;
      .image {
        width: 100%;
        height: 33vh;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
