<template lang="pug">
.container-fluid
    .nav 
      h1 shows
      NuxtLink(to="/shows" class="lin")
        .more 
          h3 show more
    .articles
        ShowsCard(:data="data" class="article")
</template>

<script setup lang="ts">
const { data } = await useAsyncGql({
  operation: 'shows',
  variables: { limit: 2 },
});

</script>

<style scoped lang="scss">

.container-fluid{
    padding: 0;
    color: #fff;
    background-color: #000;
    .nav{
      padding:1em 4em;
      margin-bottom: 1em;
      margin-top: 2em;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .lin {
        text-decoration: none;
        color: inherit;
    
        &:hover {
          text-decoration: none;
          color: inherit;
        }
       

      
      .more{
        border: white solid 1px;
        box-shadow: 5px 5px #fff;
        border-radius: 0px;
        padding: 5px 20px;
        transition: 300ms;
        &:hover{
          border: black solid 1px;
            background-color: #fff;
            color: #000;
            cursor: pointer;
        }
        
      }
    }
   
    }
    margin-top: 2em;
    margin-bottom: 2em;
    .articles{
      margin:0 4em;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px; 
    }
  }
  

 
  @media (max-width:768px) {
    .container-fluid{
      .articles{
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px; 
      }
    }
  }
</style>