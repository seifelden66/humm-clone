<template lang="pug">
nuxt-link(to="/advertise" class="lin")
  .container 
      img(src="../../assets/ad2.png")
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
.lin {
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
    color: inherit;
  }

  

.container {
  margin-top: 2em;
  img{
    width: 100%;
  }
}
}

@media (max-width: 768px) {
  .container{
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>
