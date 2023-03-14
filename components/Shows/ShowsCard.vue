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
            h3 {{ i.slug }}
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
    padding:0 1em ;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1em;
    
    
    .cont{
      display: flex;
      flex-direction: column;
      justify-content: center;
      .plays{
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
    height: auto;
    display: flex;
    flex-direction: column;

    .lin {
      grid-template-columns: 1fr;
      padding: 1em;
    }

    .cont {
      margin-top: 1em;
    }

    .image {
      height: 200px;
    }
  }
}


</style>
