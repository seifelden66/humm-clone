<template lang="pug">
.container
    .right
        h1 A world for food and its lovers
        p HUMM is a world for all things food and food-here you will find every thing you need to make an amazing food, to find incredible gifts 
        NuxtLink(:to="localePath('/about')" class="lin")
            .more 
                h6 about HUMM
    .left 
        img(src="../../assets/1.png")
      
</template>
<style lang="scss" scoped>
.container {
  margin: 0 auto;
  margin-top: 50px;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2em;
  color: black;
  .right {
    .lin {
        text-decoration: none;
        color: inherit;
    
        &:hover {
          text-decoration: none;
          color: inherit;
        }
    .more {
        border: #000 solid 1px;
        box-shadow: 5px 5px #000;
        width: 8em;
        border-radius: 0px;
        color: #000;
        padding: 5px 10px;
        transition: 300ms;
        h6{
          margin: 0;
        }
        &:hover {
          border: #fff solid 1px;
          background-color: #000;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
  .left {
    position: relative;
    img {
      width: 100%;
    }
    .logos {
      display: flex;
      justify-content: space-between;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
@media (max-width: 992px) {
  .container {
    display: grid;
    grid-template-columns: 1fr;
    .logos {
      display: flex;
      justify-content: space-between;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .delecious {
        transform: translatey(-20%);
      }
      .bomb {
        transform: translate(5%, 30%);
      }
    }
  }
}
</style>
