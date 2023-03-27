<template lang="pug">
.container-fluid
  .container
    .nav 
      h1 shows
      NuxtLink(:to="localePath('/shows')" class="lin")
        .more 
          h6 show more
    .articles
        ShowsCard(:data="data" class="article")
</template>

<script setup lang="ts">
const { data } = await useAsyncGql({
  operation: "shows",
  variables: { limit: 2 },
});
</script>

<style lang="scss" scoped>
.container-fluid {
  color: #fff;
  background-color: #000;
  .container {
    margin: 0 auto;
    margin-top: 50px;
    .nav {
      padding: 1.25em 0;
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

        .more {
          border: white solid 1px;
          box-shadow: 5px 5px #fff;
          border-radius: 0px;
          padding: 5px 20px;
          transition: 300ms;
          h6 {
            margin: 0;
          }
          &:hover {
            border: black solid 1px;
            background-color: #fff;
            color: #000;
            cursor: pointer;
          }
        }
      }
    }

    .articles {
      margin: 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
  }
}
@media (max-width: 992px) {
  .container-fluid {
    .container {
      .articles {
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
      }
    }
  }
}
</style>
