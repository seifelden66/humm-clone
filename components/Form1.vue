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

<style scoped lang="scss">
.container {
  width: 86%;
  margin: 0px auto;
  margin-top: 50px;
  gap: 5em;
  padding:4em 20px ;
  align-items: center;
  color: black;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  box-shadow: 10px 10px #000;
  border: 1px solid black;
  .left {
    margin: 0;
    h1{font-weight: 800}
  }
  .right {
    margin: 0;
    h3{
      font-weight: 600;
    }
    .frm {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1em;
      align-items: center;
      input {
        height: 1em;
        padding: 1em;
        border: #0000008e solid 1px;
      }
      .more {
        border: black solid 1px;
        box-shadow: 2px 2px #000;
        border-radius: 0px;
        display: flex;
        justify-content: center;
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
@media (max-width: 992px) {
  .container {
    width: 90%;
    gap: 1em;
    font-size: 12px;
    display: grid;
    grid-template-columns: 1fr;
    .left{
      h1{
        font-weight: 600;
        font-size: 30px;
      }
    }
    
    
    .right {
      h3{
        font-weight: 400;
        font-size: 25px;
      }
      .frm {
        display: grid;
        grid-template-columns: 2fr;
      }
    }
  }
}
</style>
