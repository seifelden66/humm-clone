<template lang="pug">
.container
    .articles
        ReadCard(:data="data" class="article")
    button(@click="inc" class="btn") show more
</template>

<script lang="ts" setup>
const limit = ref(6);
const inc = () => (limit.value = limit.value + 6);
const { data } = await useAsyncGql({
  operation: "read",
  variables: { limit },
});
</script>

<style lang="scss" scoped>
.container {
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  margin-top: 2rem;
  .articles {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .btn {
    margin: 0 auto;
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

@media (max-width: 768px) {
  .container {
    .articles {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
    }
  }
}
</style>
