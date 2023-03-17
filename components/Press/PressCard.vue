<template lang="pug">
.card(v-for="i in data.Article")
    NuxtLink(:to="i.press_link" class="lin")
        .image
            img(:src="'https://board.humm.world/assets/'+i.translations[1].cover.id")
            .overlay
                .cont
                    h3 {{i.translations[1]?.description}}
                    h3 {{i.translations[1]?.title}}
                .date
                    h4 {{ i.date_created_func.day }}/{{ i.date_created_func.month }}/{{ i.date_created_func.year }}
                    LogosClock/ 
                
            

</template>

<script setup lang="ts">
const props = defineProps(["data", "limit"]);
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  margin-top: 1em;
  
  .lin {
    width: 100%;
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: none;
      color: inherit;
    }
    .image {
      transition: 400ms;
      width: 100%;
      border: #fff 1px solid;
      color: #000;
      img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
      }

      .overlay {
        padding: 1em;
        margin: 10px;
        background: white;
        color: black;
        font-size: 12px;
        position: absolute;
        width: fit-content;
        left: 0%;
        bottom: 0%;
        .cont {
          text-align: center;
        }
        .date {
          color: rgb(104, 104, 104);
          h4 {
            font-size: 15px;
          }
          display: flex;
          justify-content: flex-end;
          align-items: baseline;
          gap: 0.5em;
        }
        
      }
      &:hover{
        box-shadow: 3px 3px black;
      }
    }
  }
  
}
@media (max-width:992px) {
  .container{
    width: 90%;
  }
}
</style>
