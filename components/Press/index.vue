<template lang="pug">
.container 
  .nav 
    h1 press
    NuxtLink(:to="localePath('/press')" class="lin")
        .more 
            h6 show more
  .articles
    PressCard(:data="data" class="article")
</template>

<script setup lang="ts">
const limit = ref(2);
const { data } =await useAsyncGql({
    operation: "press",
    variables: { limit },
});


</script>
<style lang="scss" scoped>
.container{
  margin: 0px auto;
  margin-top: 50px;
  color: #000;
  .nav{
    margin: 0;
    display: flex;
    justify-content: space-between;
    .lin {
      text-decoration: none;
      color: inherit;

    .more{
      border: black solid 1px;
      box-shadow: 5px 5px #000;
      border-radius: 0px;
      padding: 5px 20px;
      h6{
        margin: 0;
      }
      transition: 300ms;
      &:hover{
          background-color: #000;
          color: #fff;
          cursor: pointer;
      }
      
    }
  }
  }
 
  .articles{
    margin: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px; 
  }
}


@media (max-width:992px) {
  .container{
    .articles{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px; 
    }
  }
}
@media (max-width:576px) {
  .container{
    .articles{
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px; 
    }
  }
}
</style>