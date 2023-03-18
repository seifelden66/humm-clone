<template lang="pug">
.container-fluid
    
  .overlay 
      
      NuxtLink(to="/about" class="lin")
        .contBut 
            p Know more
</template>

<style lang="scss" scoped>
.container-fluid {
  width: 90%;
  margin: 0 auto;
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

    position: absolute;
    margin-top: 30vh;
    margin-bottom: 5vh;
    background: #fff;
    width: 400px;
    left: 4vw;
    padding: 2.5em 3em;
    
    &::before {
      content: "A world for  food and its lovers.";
      font-size: 2rem; 
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
    height: 70vh;
    width: 100%;
    .overlay {
      font-size: 8px;
      width: 280px;
      margin-top: 19vh;
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
    height: 50vh;
    .overlay {
      font-size: 8px;
      width: 280px;
      margin-top: 19vh;
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
