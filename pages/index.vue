<template lang="pug">
Transition(name="fade")
  div(v-if="show")
    Hero/
    Food/
    AdsAd1/
    Read/
    Shows/
    AdsAd3/
    Form1/
    Press/
    Brands/
    AdsAd5/
</template>

<script setup lang="ts">
const show = ref(false)
onMounted(() => {
      show.value = true;
    });
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  font-family: "Hanken Grotesk", sans-serif;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-family: "Roboto", sans-serif;
}


</style>
