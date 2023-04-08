<template lang="pug">
div(ref="main")
  Hero/
  .box
    Food/
  .box
    AdsAd1/
  .box
    Read/
  .box
    Shows/
  .box
    AdsAd3/
  .box
    Form1/
  .box
    Press/
  .box
    Brands/
  .box
    AdsAd5/
</template>

<script setup lang="ts">
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const main = ref();
const ctx = ref();
onMounted(()=>{
  const boxes = document.querySelectorAll('.box');
  boxes.forEach((box) => {
    gsap.from(box, {
      autoAlpha:0,
      ease: "Power2.easeOut",
      stagger: 0.2,
      duration: 0.5,
      reversed:false,
      scrollTrigger: {
        trigger: box,
        scrub: true,
        
      },
    });
  });
}, main.value)


</script>

<style lang="scss">

* {
  padding: 0;
  margin: 0;
  font-family: "Hanken Grotesk", sans-serif;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-family: "Roboto", sans-serif;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}


</style>
