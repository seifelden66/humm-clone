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
  operation: "read",
  variables: { limit: 2 },
});
</script>
<style lang="scss" scoped>
.container{
  margin: 0 auto;
  margin-top: 50px;
  .nav{
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    .lin{
      text-decoration: none;
      
      .more{
        background: #000;
        color: white;
        width: 100px;
        padding: 5px;
        text-align: center;
        box-shadow: #000 5px 5px;
        border:1px solid white;
        transition: 350ms;
        
        h6{
          margin: 0;
        }
        &:hover{
          background: #fff;
          color: #000;
          border: #000 1px solid;
          
        }
      }
    }
  }
  .articles{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
}
@media (max-width: 786px) {
  .container {
 .nav{
  margin: 0 auto;
 }
    .articles {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
    }
  }
}
</style>
