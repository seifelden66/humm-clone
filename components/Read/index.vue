<template lang="pug">
.container
    .nav 
      h1 Read
      NuxtLink(to="/read" class="lin")
        .more 
          h3 more
    .articles
        ReadCard(:data="data" class="article")
</template>
<script lang="ts" setup>
const { data } = await useAsyncGql({
  operation: 'read',
  variables: { limit: 3 },
});
</script>
<style lang="scss" scoped>
.container{
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
    
        &-exact-active,
        &-active {
          text-decoration: none;
          color: inherit;
        }
      
      .more{
        border: black solid 1px;
        box-shadow: 5px 5px #000;
        border-radius: 0px;
        padding: 5px 20px;
        transition: 300ms;
        &:hover{
            background-color: #000;
            color: #fff;
            cursor: pointer;
        }
        
      }
    }
    }
    margin-top: 2rem;
    .articles{
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
        gap: 20px; 
      }
    }
  }
  @media (max-width:768px) {
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