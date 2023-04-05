<template lang="pug">

Transition(name="fade")
    h1(v-if="show") hello there

        
</template>

<script setup lang="ts">
const show = ref(false)
onMounted(() => {
      show.value = true;
    });
</script>

<style lang="scss">
.fade-enter-from{
    opacity:0
}

.fade-enter-active{
    transition: all 1s ease;
}
</style>