<template lang="pug">
.card(v-for="i in data.shows")
    NuxtLink(:to="'/shows/'+i.slug" class="lin")
        .image(v-if="i.translations[0].cover")
          img(:src="'https://board.humm.world/assets/'+i.translations[0].cover.id")
        .image(v-else-if="i.translations[1].cover") 
          img(:src="'https://board.humm.world/assets/'+i.translations[1].cover.id")
        .image(v-else)
          p no image
        h3 {{ i.slug }}
        .cont
            h4(v-if="i.translations[0].title") {{ i.translations[0].title}} 
            h4(v-else-if="i.translations[1].title") {{ i.translations[1].title}} 
            h4(v-else) content
            h4(v-if="i.translations[0].description") {{ i.translations[0].description}}
            h4(v-else-if="i.translations[1].description") {{ i.translations[1].description}} 
            h4(v-else) no content

        .plays 
            LogosPlay/ {{ i.all_episodes_func.count }}

</template>

<script setup lang="ts">
const props = defineProps(["data"]);


</script>

<style lang="scss" scoped>

.card {
  height: 400px;
  color: inherit;
  background: inherit;
  display: grid;
  position: relative;
  min-height: max-content;
  margin-top: 0.5em;
  margin-bottom: 1em;
  padding: 1em;
  border: 1px solid rgb(146, 146, 146);
  transition: 350ms;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: inherit;
    box-shadow: 5px 5px rgb(146, 146, 146);
  }
  .lin {
    text-decoration: none;
    color: inherit;

    &-exact-active,
    &-active {
      text-decoration: none;
      color: inherit;
    }


    .image {
      width: 100%;
      height: 180px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .plays{
      font-size: 14px;
      display: flex;
      align-items: center;
      color: rgb(177, 177, 177);
      gap: .3em;
    }
  }
}
@media (max-width: 768px) {
  .card {
    min-height: fit-content;
    height: 456px;

  }
}
</style>
