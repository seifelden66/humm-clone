<template lang="pug">
.containeer
    img(src=".././assets/image2.jpeg" class="image")
    .overlay 
        h1 A world for  food and its lovers.
        NuxtLink(to="/about" class="lin")
          .contBut 
              h3 Know more
</template>



<style lang="scss" scoped>
.containeer {
    width: 99%;
  color: #000;
  margin-top: 0.2em;
  .image {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
  .overlay {
    position: absolute;
    background: #fff;
    display: grid;
    width: 450px;
    left: 15%;
    top: 65%;
    padding: 1em;
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
    .contBut {
      border: black solid 1px;
      box-shadow: 5px 5px #000;
      padding: 0.25em 0.75em;
      width: 190px;
      display: flex;
      justify-content: center;
      justify-self: flex-end;
      transition: 300ms;
      &:hover {
        background: #000;
        color: #fff;
        cursor: pointer;
      }
    }
  }
  }
}
@media (max-width: 768px) {
  .containeer {
    max-width: fit-content;
    width: 100vw;
    .overlay {
      font-size: 12px;
      width: 70%;
      left: 5%;
      top: 65%;
      padding: 1em;
      .contBut{
        width: 70%;
      }
    }
  }
}
</style>
