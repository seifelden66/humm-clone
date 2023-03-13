<template lang="pug">
.container 
    PressCard(:data="data" class="article")
</template>

<script setup lang="ts">
const limit = ref(2);
const { data } =await useAsyncGql({
    operation: "press",
    variables: { limit },
});

provide('limit', limit);
const incrementLimit = () => {
      limit.value++;
    };

</script>
<style lang="scss" scoped>
.container{
    display: flex;
    align-items: center;
    gap: 1em;
  }
  @media (max-width:768px) {
    .container{
      display: grid;
      grid-template-columns: 1fr;
      gap: 1em;
    }
  }
</style>