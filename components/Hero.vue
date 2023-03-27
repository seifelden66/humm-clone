<template lang="pug">
.container-fluid
    
  .overlay 
      
      NuxtLink(:to="localePath('/about')" class="lin")
        .contBut 
            p Know more
</template>

<style lang="scss" scoped>
.container-fluid {
  margin: 0 auto;
  background-image: url("https://board.humm.world/assets/ac08abd1-d24d-4d1b-aa18-dc5911920b02?fit=cover&width=1550&height=550&quality=80&format=webp");
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  background-size: cover;
  height: 85vh;
  color: #000;
  margin-top: 0.2em;
  position: relative;
  display: flex;
  .overlay {

    position: absolute;
    margin-top: 35vh;
    margin-bottom: 5vh;
    background: #fff;
    width: 500px;
    left: 7vw;
    padding: 2.5em 1.5em;
    
    &::before {
      content: "A world for  food and its lovers.";
      font-size: 2.75rem; 
      font-weight: 550;
      margin: 0.5rem;
    }
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
        padding: .25em;
        width: 100px;
        
        p{
          font-weight: 550;
          margin: 0;
        }
        
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
@media (max-width: 992px) {
  .container-fluid {
    height: 350px;
    width: 100%;
    .overlay {
      
      width: 340px;
      padding: 1em;
      margin-top: 23vh;
      margin-bottom: 2vh;
      background: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      &::before {
        content: "A world for  food and its lovers.";
        font-size: 34px; 
        font-weight: 550;
        margin-left: 0.5rem;
      }
      .contBut {
        margin-left:10px ;
        border: black solid 1px;
        box-shadow: 5px 5px #000;
        padding: .5em;
        width: 90px !important;
        
        p{
          font-size: 14px;
          font-weight: 550;
          margin: 0;
        }
        
        
      }
      
      
    }
  }
}
@media (max-width: 576px) {
  .container-fluid {
    height: 280px;
    .overlay {
      font-size: 8px;
      width: 280px;
      margin-top: 17vh;
      margin-bottom: 2vh;
      background: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      &::before {
        content: "A world for  food and its lovers.";
        font-size: 1.5rem; 
        font-weight: 550;
        margin-left: 0.5rem;
      }
      .contBut {
        margin-left: 10px;
        margin-bottom: 5px;
        border: black solid 1px;
        box-shadow: 5px 5px #000;
        padding: .5em;
        width: 90px !important;
        
        p{
          font-size: 14px;
          font-weight: 550;
          margin: 0;
        }
        
        
      }
      
      
    }
  }
}
</style>
