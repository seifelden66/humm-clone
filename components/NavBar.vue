<template lang="pug">
.container 
    .upper 
        NuxtLink(to="/")
            LogosLogo/ 
        .content
            .upitem
              .logo 
                LogosEmail/ 
              .text
                p subscribe
            .upitem
              .logo
                LogosCart/ 
              .text
                p cart
            .upitem
              .logo
                LogosLang/
        .contBut 
            NuxtLink.lin(to="contact") contact us
    .lower 
        .items 
            .item(@click="open") 
                LogosMenu/
                h3 Menu
            .item 
                NuxtLink.link(to="/food")
                    LogosFork/
                    h3 Food 
            .item 
                NuxtLink.link(to="/shows")
                    LogosShows/
                    h3 Shows 
            .item 
                NuxtLink.link(to="/read")
                    LogosSixLines/
                    h3 Read
            .item 
                NuxtLink.link(to="/shop")
                    LogosShop4/
                    h3 Shop
        .srch
            input(placeholder="search")
            LogosSearch/
              
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.container {
  color: #000;
  display: grid;
  align-items: center;
  min-width: fit-content;
  grid-template-rows: 3fr 1fr;
  .upper {
    display: flex;
    place-items: center;
    justify-content: space-between;
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
    grid-template-columns: 2.5fr 1fr;
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
    width: 99%;
    padding: 0;
    font-size: 12px;
    .upper {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .upitem {
        font-size: 20px;
        .text {
          display: none;
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
