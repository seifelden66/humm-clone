<template lang="pug">
.card(v-for="i in data.shows")
    NuxtLink(:to="'/shows/'+i.slug" class="lin")
        .image(v-if="i.translations[0].cover")
          img(:src="'https://board.humm.world/assets/'+i.translations[0].cover.id")
        .image(v-else-if="i.translations[1].cover") 
          img(:src="'https://board.humm.world/assets/'+i.translations[1].cover.id")
        .image(v-else)
          p no image
            
        .cont
            h4 {{ i.slug }}
            p(v-if="i.translations[0].description") {{ i.translations[0].description}}
            p(v-else-if="i.translations[1].description") {{ i.translations[1].description}} 
            p(v-else) no content

            .plays 
                LogosPlay/ {{ i.all_episodes_func.count }}

</template>

<script setup lang="ts">
const props = defineProps(["data"]);
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid rgb(146, 146, 146);
  background-color: inherit;
  height: 12em;
  margin-bottom: 1em;
  border-radius: 0px;
  transition: 350ms;
  .lin {
    text-decoration: none;
    color: inherit;
    height: 100%;
    padding: 0 1em;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1em;

    .cont {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .plays {
        color: rgb(160, 160, 160);
        display: flex;
        align-items: center;
        font-size: 14px;
      }
    }

    .image {
      width: 100%;
      height: 80%;
      margin: auto 0;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  &:hover {
    box-shadow: 4px 4px white;
  }

  @media only screen and (max-width: 768px) {
    
    display: flex;
    flex-direction: column;
    font-size: 12px;
    height: 15em;
    .lin {
      padding: 0 1em;
      display: grid;
      grid-template-columns: 1.5fr 2fr;
      gap: 1em;

      .cont {
        margin: 0;
        padding: 0;
        display: flex;

        .plays {
          color: rgb(160, 160, 160);
          display: flex;
          align-items: center;
          font-size: 12px;
        }
      }

      .image {
        padding: 2em 0; 
        margin: 0;
        height: 100%;
        width: 100% !important;
        
      }
    }
  }
}
</style>
