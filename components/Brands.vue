<template lang="pug">
.container
    .nav 
        h1 Brands with us
        NuxtLink(:to="localePath('/advertise')" class="lin")
            .more 
                h6 show more
    
    .articles
        .card(v-for="i in data.homepage_translations[1].brands_list ")
             img(:src="'https://board.humm.world/assets/'+i.directus_files_id.id")


        
</template>
<script lang="ts" setup>
const {data}= await useAsyncGql({
    operation:"brands"
})

</script>
<style lang="scss" scoped>
.container {
  margin: 0 auto;
  margin-top: 50px;
  color: #000;
  .nav {

    display: flex;
    justify-content: space-between;
    .lin {
      text-decoration: none;
      color: inherit;

      &:hover {
        text-decoration: none;
        color: inherit;
      }


      .more {
        border: black solid 1px;
        box-shadow: 5px 5px #000;
        border-radius: 0px;
        padding: 5px 20px;
        transition: 300ms;
        h6{
          margin: 0;
        }
        &:hover {
          background-color: #000;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }

  .articles {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    border: #000 solid black;
    .card{
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 100%;
        }
    }
  }
}


@media (max-width: 992px) {
  .container {
    .articles {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

</style>
