<template lang="pug">
.card(v-for="i in data.Article")
  NuxtLink(:to="localePath('/read/'+i.slug)" class="lin")
      .image
          img(:src="'https://board.humm.world/assets/'+i.translations[0].cover.id")
      
      .cont 
          h4 {{ i.translations[0].title}}
      .btm
          p(v-if="i.user_updated !== null")
              LogosPerson/ {{ i.user_updated.first_name  }} {{ i.user_updated.last_name }}
          p
              LogosClock/ {{ i.date_created_func.day }} / {{ i.date_created_func.month }} / {{ i.date_created_func.year }}

</template>

<script setup lang="ts">
const props = defineProps(["data"]);
</script>

<style lang="scss" scoped>
.card {
  direction: rtl;
  margin: 0 auto;
  border: 1px black solid;
  padding: 10px;
  height: 370px;
  width: 100%;
  border-radius: 0;
  transition: 350ms;
  .lin {
    color: black;
    text-decoration: none;
    .cont{
      text-align: right;
      margin-top: 4px;
      padding: 0;
      h4{
        font-size: 25px;
        margin-top: 5px;
        font-weight: 800;
      }
    }
    .image {
      width: 100%;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .btm {
      position: absolute;
      display: flex;
      gap: 1em;
      bottom: 5%;
      p {
        font-weight: 550;
        font-size: 14px;
        margin: 0;
        display: flex;
        align-items: center;
        color: #585858;
        gap: 0.2em;
      }
    }
  }
  &:hover {
    box-shadow: 5px 5px black;
  }
}
@media (max-width: 992px) {
  .card {
    height: 320px;
    width: 100%;
    .lin {
      width: 100%;
      .image {
        height: 200px;
        width: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
@media (max-width: 769px) {
  .card {
   height: 300px !important;
    .lin {
      .image {
        width: 100%;
        height: 180px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}

@media (max-width: 576px) {
  .card {
    
    font-size: small;
    height: 320px !important;
    .lin {
     .cont{
      h4{
        font-size: 22px;
      }
     }
      
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



