<template lang="pug">
.container
    .left 
        h1 get your apdates for food
    .right 
        h3 Humm for new sletters
        .frm 
            input(type="text" placeholder="full name")
            input(type="email" placeholder="email")
            .more 
                h5 subscribe
            

</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  gap: 5em;
  padding: 2em;
  align-items: center;
  color: black;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 2em;
  box-shadow: 5px 5px #000;
  border: 1px solid black;
  .left{
    margin: 0;
  }
  .right {
    margin: 0;
    .frm {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1em;
      align-items: center;
      input{
        height: 1em;
        padding: 1em;
        border: #000 solid 1px;
      }
      .more {
        border: black solid 1px;
        box-shadow: 2px 2px #000;
        border-radius: 0px;
        padding: 2px 20px;
        h5 {
          margin: 0;
        }
        transition: 300ms;
        &:hover {
          background-color: #000;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
}
@media (max-width:992px) {
.container{
    font-size: 12px;
    display: grid;
    grid-template-columns: 1fr;
    width: 70%;
    justify-items: center;
    .right{
       .frm{
        display: grid;
        grid-template-columns: 2fr ;
       }
    }
}

}
</style>
