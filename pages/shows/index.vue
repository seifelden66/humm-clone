<template lang="pug">
.container
    .articles
        ShowsCard(:data="data" class="article")

        
    
    </template>

<script lang="ts" setup>
const limit = ref(4);
const { data } = await useAsyncGql({
  operation: "shows",
  variables: { limit },
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .articles {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    
  }
  .btn {
    border: black solid 1px;
    box-shadow: 5px 5px #000;
    margin-top: 2em;
    border-radius: 0px;
    padding: 5px 20px;
    transition: 300ms;
    &:hover {
      background-color: #000;
      color: #fff;
      cursor: pointer;
    }
  }
}
@media (max-width:768px) {
  .container{
    .articles{
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px; 
    }
  }
}
</style>
