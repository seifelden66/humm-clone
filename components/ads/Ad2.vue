<template lang="pug">
NuxtLink(to="/advertise" class="lin")
    .container
        LogosBomb/
        LogosSayCheese/
        LogosSoTasty/
        h3 ad banner 
        LogosBomb/
        LogosSayCheese/
        LogosSoTasty/

</template>
<style lang="scss" scoped>

.lin {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: none;
      color: inherit;
    }

    &-exact-active,
    &-active {
      text-decoration: none;
      color: inherit;
    }
  }

.container{
    display: flex;
    color: #fff;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    margin-top: 1em;
    background: #000;
    
}
</style>