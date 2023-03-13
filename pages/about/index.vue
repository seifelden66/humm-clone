<template lang="pug">
.container-fluid 
    .ele
        .text 
            h1 welcome to humm
        .overlay
            img(src="../.././assets/magic.png") 
            p HUMM is a world for all things food and lifestyle — here, you’ll find everything you need to make amazing food, to find incredible gifts, to pamper yourself, and to uplift your home. A lot of our products and bundles are imported, so you won’t find them anywhere else — stay tuned as more and more 
Brands/           
</template>
<style lang="scss" scoped>
.container-fluid {
  background-image: url(../../assets/aboutimage.png);
  width: 100%;
  height: 80vh;
  background-size: cover;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .ele {
    text-align: center;
    align-items: center;
    display: flex;
    position: absolute;
    gap: 8em;
    top: 50%;
    left: 50%;
    transform: translate(-60%, -50%);

    .overlay {
        img{
            position: absolute;
            left: 0;
            top: 0;
            transform: translate(-50%, -50%);
            width: 50px;
            height: 50px;
        }
      font-size: 14px;
      position: relative;
      padding: 1em;
      background-color: white;
      height:16em;
    }
    .text {
      text-align: center;
      color: white;
    }
  }
}
@media (max-width: 992px) {
  .container-fluid {
    .ele {
      font-size: 12px;
      display: grid;
      gap: 2em;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .overlay {
        height: 19em;
        width: 20em;
      }
    }
  }
}
</style>
