<template lang="pug">
.card(v-for="i in data.Article")
    NuxtLink(:to="localePath('/food/'+i.slug)" class="lin")
        .image
            img(:src="'https://board.humm.world/assets/'+i.translations[0].cover.id")
        h4 {{ i.translations[0].title.substr(0, 40) + "..." }}
        .cat
          NuxtLink(:to="'/food/'+i.category.slug" class="but")
                h6 {{ i.category.slug }}
          
        
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
    direction: rtl;
    text-align: right;
    position: relative;
    text-decoration: none;
    color: inherit;
    padding: 10px;
    height: 320px;
    transition: 350ms;
    &:hover {
      text-decoration: none;
      box-shadow: 5px 5px #000;
    }
    border: #000 solid 1px;
    h4{
      direction: rtl;

    }
    .image {
      width: 100%;
      height: 140px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .cat {
      
      .but {
        width: fit-content;
        padding: 7px;
        margin-top: 5px;
        border: #000 solid 1px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-content: center;
        text-align: center;
        color: inherit;
        transition: 300ms;
        &:hover {
          color: white;
          background: #000;
          text-decoration: none;
        }

        h6 {
          margin: 0;
          font-size: 14px;
          display: flex;
          align-self: center;
        }
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

@media (max-width: 768px) {
  .card {
    .lin {
      min-height: max-content;
      height: 400px !important;
      .image {
        width: 100%;
        height: fit-content !important;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      h4 {
        margin: 0.25em;
        font-size: 22px;
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
    height: 420px;
    .lin {
      min-height: max-content;
      
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
