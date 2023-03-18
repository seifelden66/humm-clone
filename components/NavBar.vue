<template lang="pug">
.container 
    .upper 
        NuxtLink(to="/")
            LogosLogo/ 
        .content
            NuxtLink.lin(to="/contact" class="upitem")
              .logo 
                LogosEmail/ 
              .text
                p subscribe
            .upitem
              .logo
                LogosCart/ 
              .text
                p cart
            button.upitem
              .logo
                LogosLang/
        .contBut 
            NuxtLink.lin(to="contact") contact us
    .lower 
        .items 
            .item(@click="open") 
                LogosMenu/
                h5 Menu
            .item 
                NuxtLink.link(to="/food")
                    LogosFork/
                    h5 Food 
            .item 
                NuxtLink.link(to="/shows")
                    LogosShows/
                    h5 Shows 
            .item 
                NuxtLink.link(to="/read")
                    LogosSixLines/
                    h5 Read
            .item 
                NuxtLink.link(to="/shop")
                    LogosShop4/
                    h5 Shop
        .srch
            input(placeholder="search")
            LogosSearch/
              
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.container {
  width: 95%;
  margin: 0 auto;
  color: #000;
  display: grid;
  align-items: center;
  min-width: fit-content;
  grid-template-rows: 2fr 1fr;
  .upper {
    display: flex;
    place-items: center;
    justify-content: space-between;
    .lin{
      text-decoration: none;
      color: inherit;
    }
    .contBut {
      border: black solid 1px;
      box-shadow: 5px 5px #000;
      padding: 0.25em 1em;
      transition: 300ms;
      &:hover {
        background: #000;
        color: #fff;
        cursor: pointer;
      }
      .lin{
        text-decoration: none;
        color: inherit;
      }
    }
    .upitem {
      display: flex;
      margin-top: 1em;
      gap: 0.25em;

      .text {
        align-self: center;
      }
      &:hover {
        color: #ff0045;
        cursor: pointer;
      }
    }
    .content {
      display: flex;
      gap: 1rem;
    }
    padding: 1em;
    border-bottom: black solid 1px;
  }
  .lower {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 1em;
    border-bottom: black solid 1px;
    .items {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5em;
      .item {
        .link {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: #000;
          h3 {
            &:hover {
              color: #ff0045;
              cursor: pointer;
            }
          }
          &:hover {
            color: #ff0045;
            cursor: pointer;
          }
        }

        text-decoration: none;
        color: #000;
        display: flex;
        align-items: center;
        gap: 0.25em;
        &:hover {
          color: #ff0045;
          cursor: pointer;
        }
      }
    }
    .srch {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      right: 0;
      margin-left: auto;
      input {
        padding: 5px;
        border: none;
        display: flex;
        justify-content: flex-end;
        justify-items: flex-end;
        text-align: right;
      }
    }
  }
}
@media (max-width: 768px) {
  .container {
    width: 90%;
    margin: 0 auto;
    padding: 0;
    font-size: 10px;
    .upper {
      width: 100%;
      display: flex;
      gap: 3em;
      .content{
        
        gap:5px;
      .upitem {
        margin: 0;
        font-size: 20px;
        .text {
          display: none;
        }
      }
    }

      .contBut {
        display: none;
      }
    }
    .lower {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .srch {
        margin-right: 1em;
      }
      .items {
        .item:nth-child(1){
          display: flex;
          align-items: center;
          h5{
            font-size: 15px;
            
          }
        }
        .item:nth-child(2),
        .item:nth-child(3),
        .item:nth-child(4),
        .item:nth-child(5) {
          display: none;
        }
      }
    }
  }
}
</style>
