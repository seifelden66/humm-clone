<template lang="pug">
.container
  nuxt-link(:to="localePath('/advertise')" class="lin")
    .container 
        img(src="https://board.humm.world/assets/c9d0ed92-faaf-4984-afb0-85283ddbb14e?fit=cover&width=1364&height=372&quality=80")
</template>

<style lang="scss" scoped>
.container{
  margin: 0 auto;
  margin-top: 20px;
  padding: 8px;

  .lin {
    margin: 0;
    text-decoration: none;
    color: inherit;
  
    &:hover {
      text-decoration: none;
      color: inherit;
    }
  
  .container {
    img{
      width: 100%;
    }
  }
  }
}


@media (max-width: 992px) {
  .container{
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>
