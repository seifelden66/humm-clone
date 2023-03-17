<template lang="pug">
.card(v-for="i in data.Article")
    NuxtLink(:to="'/read/'+i.slug" class="lin")
        .image
            img(:src="'https://board.humm.world/assets/'+i.translations[0].cover.id")
       
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

.card {
  
  .lin {
    position: relative;
    text-decoration: none;
    color: inherit;
    padding: 1em;
    height: 50vh;
    &:hover {
      text-decoration: none;
      box-shadow: 5px 5px #000;
    }
    border: #000 solid 1px;

    .image {
      width: 100%;
      height: 35vh;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    
      .but {
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
      gap: 1em;
      bottom: 5%;
      p {
        font-size: 12px;
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
      height: 60vh;
      .image {
        width: 100%;
        height: 35vh;
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
    