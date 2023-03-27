<template lang="pug">
.card(v-for="i in data.Article")
    NuxtLink(:to="localePath('/food/'+i.slug)" class="lin")
        .image
            img(:src="'https://board.humm.world/assets/'+i.translations[0].cover.id")
            .cat
              NuxtLink(:to="'/food/'+i.category.slug" class="but")
                    p {{ i.category.slug }}
            h5 {{ i.translations[0].title.substr(0, 60) + "..." }}
            .btm
                h6(v-if="i.user_updated !== null")
                    LogosPerson/ {{ i.user_updated.first_name  }} {{ i.user_updated.last_name }}
                h6
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
    h5{
      margin: 0;
      font-weight: 800;
      direction: rtl;
      font-size: 18px;
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
      margin-top: 5px;
      margin-bottom: 5px;
      .but {
        width: fit-content;
        padding: 7px;
        
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

        p {
          margin: 0;
          font-size: 14px;
          display: flex;
          align-self: center;
        }
      }
    }

    .btm {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin-top: 1em;
      
      h6 {
        
        font-size: 15px;
        margin: 0;
        display: flex;
        align-items: center;
        color: #7c7c7c;
        gap: 0.2em;
      }
    }
  }
}

@media (max-width: 768px) {
  .card {
    .lin {
      min-height: max-content;
      height: 300px !important;
      h5{
        margin: 0;
        font-weight: 800;
        direction: rtl;
        font-size: 17px;
      }
      .image {
        width: 100%;
        height: 120px;
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
      height: 390px !important;
      
      .image {
        width: 100%;
        height: 220px;
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
