<template lang="pug">
.container 
    .left 
        img(src="../.././assets/images/blackcon.png")
        .wrld 
            img(src="../.././assets/images/world.png")
        .text
            h2 we are ready to lesten to our food lovers
            h6 hi.humm.world
            h6 0100100203
    .right
        .items 
            .item
                label(for="full") full name
                input#full(type="text", placeholder="full name")

            .item
                label(for="phone") phone number
                input#phone(type="number", placeholder="phone number")
            .item
                label(for="email") email
                input#email(type="email", placeholder="email")
            .item
                label(for="country") country
                input#country(type="text", placeholder="country")
        .area
            label(for="message") message
            textarea#message(placeholder="message")
        button.btn submit

</template>

<style  lang="scss" scoped>
.container {
    
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 2em;
  .left {
    font-size: 12px;
    position: relative;
    img {
      width: 100%;
    }
    .wrld {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(100%, 100%);
      img {
        width: 150px;
      }
    }
    .text {
      position: absolute;
      color: white;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      gap: 2em;
    }
  }
  .right {
    .items {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1em;
      .item {
        display: flex;
        flex-direction: column;
        input, textarea{
          padding: 5px;
          border: #00000075 1px solid;
        }
      }
    }
    .area {
      margin-top: 1em;
      #message {
        width: 100%;
        height: 5em;
      }
    }
    .btn {
      border: black solid 1px;
      box-shadow: 5px 5px #000;
      margin-top: 2em;
      border-radius: 0px;
      padding: 5px 20px;
      transition: 300ms;
      &:hover {
        background-color: #000;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
@media (max-width: 992px) {
  .container {
    display: grid;
    grid-template-columns: 1fr;
    .left {
      width: 100%;
      
      .wrld {
        top: 90%;
        left: 80%;
        transform: translate(-50%, -50%);
        img {
            width: 8em;
          }
      }
    }
    .right {
      padding: 2em;
        .items {
            display: grid;
            grid-template-columns: 1fr;
            
            gap: 1em;
          }
          .area {
            margin-top: 1em;
            display: flex;
            
            flex-direction: column;
            #message {
              
              height: 5em;
            }
          }
          .btn {
            width: 50%;
           
          }
    }
  }
}
</style>
