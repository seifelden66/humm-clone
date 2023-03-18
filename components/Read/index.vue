<template lang="pug">
.container
    .nav 
      h1 Read
      NuxtLink(:to="localePath('/read')" class="lin")
        .more 
          h6 more &rarr;
    .articles
        ReadCard(:data="data" class="article")
</template>
<script lang="ts" setup>
const { data } = await useAsyncGql({
  operation: 'read',
  variables: { limit: 2 },
});
</script>
<style lang="scss" scoped>
.container{
  margin-top: 3em;
    color: #000;
    .nav{
      margin-bottom: 1em;
      display: flex;
      justify-content: space-between;
      .lin {
        text-decoration: none;
        color: inherit;
    
        &:hover {
          text-decoration: none;
          color: inherit;
        }
    

      
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
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px; 
    }
  }
  

  @media (max-width:768px) {
    .container{
      .articles{
        display: grid;
        grid-template-columns:  1fr;
        gap: 10px; 
      }
    }
  }
  
</style>