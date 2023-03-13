<template lang="pug">
nuxt-link(to="/advertise" class="lin")
  .container 
      .overlay 
          h1 A world for  food and its lovers.
          .contBut 
              h3 a banner for ads
      .miidle
          LogosSoTasty/
      .right
          .ite
              LogosSayCheese/
          .ite
              LogosBomb/
          .ite
              LogosDelecious/
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

  &-exact-active,
  &-active {
    text-decoration: none;
    color: inherit;
  }
}
.container {
  min-height: 60vh;
  gap: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5em;
  margin-top: 1em;
  background: #000;
  color: #fff;
  .right {
    display: flex;
    align-items: flex-end;
    .ite {
      margin: -30px;
    }
    .ite:nth-child(odd){
        z-index: 999;
    }
  }
  .overlay {
    font-size: 8px;
    display: grid;
    height: fit-content;
    border: #fff 1px solid;
    
    width: 45em;
    padding: 1em;
    .contBut {
      border: black solid 1px;
      background-color: #fff;
      color: #000;
      box-shadow: 5px 5px #000;
      padding: 0.25em 0.75em;
      width: fit-content;
      display: flex;
      justify-content: center;
      justify-self: flex-end;
      transition: 300ms;
     
    }
  }
}
@media (max-width:992px) {
    .container{
        .right {
            display: flex;
            align-items: flex-end;
            .ite {
              margin: -40px;
            }
            .ite:nth-child(odd){
                z-index: 999;
            }
          }
        display: grid;
        grid-template-columns: 1fr 1fr;
        .overlay {
            font-size: 8px;
            display: grid;
            height: fit-content;
            border: #fff 1px solid;
            width: 25em;
            padding: 1em;
            .contBut {
              border: black solid 1px;
              background-color: #fff;
              color: #000;
              box-shadow: 5px 5px #000;
              padding: 0.25em 0.75em;
              width: fit-content;
              display: flex;
              justify-content: center;
              justify-self: flex-end;
              transition: 300ms;
             
            }
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
