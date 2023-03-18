<template lang="pug">
div
  aside
    transition(
      enter-to-class="animate__animated animate__slideInLeft",
      leave-to-class="animate__animated animate__slideOutLeft"
    )
      div.side(v-show="side")
        button(@click="close")
          LogosCross
        ul.list
          li.listItem
            nuxt-link(:to="localePath('/')" class="lin" ) {{$t('home')}}
          li.listItem
            nuxt-link(:to="localePath('/food')" class="lin" ) {{$t('food')}}
          li.listItem
            nuxt-link(:to="localePath('/shows')" class="lin" ) {{$t('shows')}}
          li.listItem
            nuxt-link(:to="localePath('/read')" class="lin" ) {{$t('read')}}
          li.listItem
            nuxt-link(:to="localePath('/press')" class="lin" ) {{$t('press')}}
          li.listItem
            nuxt-link(:to="localePath('/about')" class="lin" ) {{$t('about_us')}}
          li.listItem
            nuxt-link(:to="localePath('/contact')" class="lin" ) {{$t('contact_us')}}

</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
<style lang="scss" scoped>
.animate__animated.animate__slideInLeft,
.animate__animated.animate__slideOutLeft{
    animation-duration: 600ms;
  }
.side {
  background: #000;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  z-index: 999;
  padding: 1em;
  
  button {
    font-size:30px;
    border: none;
    background: #000;
    color: #fff;
    transform: translatex(130px);
  }
  .list {
    list-style: none;
    padding: 1em;
    text-decoration: none;
    color: #fff;

    .listItem {
      color: #fff;
      margin-top: 1em;
      .lin {
        text-decoration: none;
        color: inherit;
        
        &:hover {
          text-decoration: none;
          color: rgb(221, 59, 86);
        }
      }
    
      
    }
  }
}
</style>
