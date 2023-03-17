<template lang="pug">
.container
    div(v-for="i in data.Article")
      div(v-if="i.slug === namee")
        .video
          img(:src="'https://board.humm.world/assets/' + i.translations[0].cover.id")
        .readContent
          .right
            .cont 
              h1 {{ i.translations[0].title}}
              .con(v-html="i.translations[0].content")
          .left 
            NuxtLink.images(to="/advertise") 
              img(src="../.././assets/images/ad1.png")
              img(src="../.././assets/images/ad2.png")
    AdsAd1/
            
</template>

<script lang="ts" setup>
const route = useRoute();
const namee = route.params.slug;
const { data } = await useAsyncGql({
  operation: "read",
});
</script>

<style lang="scss">
.container {
  .video {
    height: 80vh;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  
  .readContent {
    
    direction: rtl;
    margin-top: 2em;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1em;

    .left {
      img {
        display: grid;
        width: 100%;
      }
    }

    .right {
      margin: 0;
      width: 100% !important;

      .cont {
        margin-bottom: 2rem;
        text-align: right;

        .con {
          width: 50vw !important;
          
        
          img {
            width: 100% !important;
            height: auto !important;
            object-fit: contain !important;
          }
        }
      }
    }
  }

}
@media (max-width: 768px) {
  .container {
    .video {
      height: 35vh !important;
      img {
        height: 100% !important;
        width: 100%;
      }
    }
    .readContent {
      
      display: grid;
      grid-template-columns: 1fr !important;
      .left {
        display: flex;
        align-items: center;
        width: 45vw;
        .images {
          display: flex;
          width: 100%;
          margin: 0 auto;
          img {
            width: 100%;
          }
        }
      }
      .right {
        .cont {
          .con {
            margin: 0 auto !important;
            width: 80vw !important;
          }
        }
      }
    }
  }
}
</style>
