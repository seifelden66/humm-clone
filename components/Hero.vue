<template lang="pug">
.container-fluid
    
  .overlay 
      h2 A world for  food and its lovers.
      NuxtLink(to="/about" class="lin")
        .contBut 
            h3 Know more
</template>

<style lang="scss" scoped>
.container-fluid {
  background-image: url("../assets/image2.jpeg");
  background-color: rgba(0, 0, 0, 0.5);
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  background-size: cover;
  height: 70vh;
  color: #000;
  margin-top: 0.2em;
  position: relative;
  display: flex;
  .overlay {
    
    margin-top: 30vh;
    margin-bottom: 5vh;
    background: #fff;
    width: 300px;

    padding: 1em;
    .lin {
      text-decoration: none;
      color: inherit;

      &:hover {
        text-decoration: none;
        color: inherit;
      }

      .contBut {
        border: black solid 1px;
        box-shadow: 5px 5px #000;
        padding: 0.25em 0.75em;
        width: 170px;
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
  .container-fluid {
    height: 50vh;
    .overlay {
      font-size: 10px;
        margin-top: 15vh;
        margin-bottom: 2vh;
        background: #fff;
       
        display: flex;
        flex-direction: column;
        justify-content: center;
    
    }
  }
}
</style>
