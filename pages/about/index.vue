<template lang="pug">
.container-fluid 
    .ele
        .text 
            h1 welcome to humm !
        .overlay
            img(src="../.././assets/magic.png") 
            h5 HUMM is a world for all things food and lifestyle — here, you’ll find everything you need to make amazing food, to find incredible gifts, to pamper yourself, and to uplift your home. A lot of our products and bundles are imported, so you won’t find them anywhere else — stay tuned as more and more 
Brands/           
</template>
<style lang="scss" scoped>
.container-fluid {
  background-image: url(../../assets/aboutimage.png);
  width: 100%;
  height: 80vh;
  background-size: cover;
  position: relative;
h1{
  font-size: 42px;
  margin: 0;
  padding: 0;
  font-weight: 700;
}
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
    gap: 12em;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .overlay {
        img{
            position: absolute;
            left: 0;
            top: 0;
            transform: translate(-50%, -50%);
            width: 50px;
            height: 50px;
        }
        text-align: left;
        width: 32em;
        font-weight: 600;
      font-size: 16px;
      position: relative;
      padding: 2em ;
      background-color: white;
      height:fit-content;
    }
    .text {
      text-align: center;
      color: white;
    }
  }
}
@media (max-width: 992px) {
  .container-fluid {
    height: 110vh;
    .ele {

      
      display: grid;
      gap: 2em;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      h1{
        font-size: 34px;
        text-align: left;
      }
      .overlay {

        h5{
          font-size: 16px;
        }
        height: fit-content;
        width: 320px;
        padding: 1em;
      }
    }
  }
}
@media (max-width: 576px) {
  .container-fluid {
    height: 60vh;
    .ele {

      
      display: grid;
      gap: 2em;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      h1{
        font-size: 34px;
        text-align: left;
      }
      .overlay {

        h5{
          font-size: 16px;
        }
        height: fit-content;
        width: 320px;
        padding: 2em;
      }
    }
  }
}
</style>
