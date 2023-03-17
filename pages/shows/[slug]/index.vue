<template lang="pug">
.container-fluid
    div(v-for="i in data.shows")
        div(v-if="i.slug === namee")
            .containImg
                img(:src="'https://board.humm.world/assets/' + i.translations[0].cover.id ")
            .content
                h1 {{ i.translations[0].title }}
                h4 {{ i.translations[0].description  }}
                .botm 
                  .logo
                    LogosPlay/ 
                  .txt 
                    h6 {{ i.all_episodes_func.count }} episodes
            .episodes 
                div(v-for="item in i.all_episodes")
                  NuxtLink.card(:to="'/shows/' + i.slug + '/' + item.slug")  
                    img(:src="'https://board.humm.world/assets/' + item.translations[0].cover.id") 
                    .cardcontent(v-if="item.translations[0]")
                      .button
                        p {{ i.translations[0].title }}
                      h4 {{ item.translations[0]?.title }}
                      .date
                        p {{ item.date_created_func.day }} / {{ item.date_created_func.month }} / {{ item.date_created_func.year }}
                        .datelogo
                          LogosClock/
                
              
</template>

<script setup lang="ts">
const route = useRoute();
const namee = route.params.slug;
const { data } = await useAsyncGql({
  operation: "shows",
});
</script>

<style lang="scss" scoped>
.container-fluid {
  margin-top: 3em;
  color: rgb(22, 22, 22);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  .containImg {
    width: 90vw;
    height: 80vh;
    margin: 0 auto;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
  .content {
    margin-top: 3em;
    h1,
    h4 {
      color: rgb(51, 51, 51);
      font-weight: 900;
    }
    .botm {
      font-size: 16px;
      gap: 0.3em;
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgb(12, 12, 12);

      .logo {
        font-size: 35px;
        color: rgb(85, 85, 85);
        margin: 0;
        padding: 0;
      }

      .txt {
        margin-top: 7px;
        h6 {
          font-weight: 400;
          margin: 0;
          padding: 0;
        }
      }
    }
  }
  .episodes {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
    .card {
      color: inherit;
      text-decoration: none;
      padding: 1em;
      align-items: center;
      display: grid;
      grid-template-columns: 1fr 1fr;
      direction: rtl;
      text-align: right;
      gap: 1em;
      transition: 350ms;
      border: 1px solid black;
      border-radius: 0;
      .cardcontent {
        display: flex;
        flex-direction: column;
        .button{
          border: 1px black solid;
          border-radius: 5em;
          width: 7em;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: .3em;
          p{
            margin: 0;
            padding: 0;
          }
        }
        h4 {
          font-weight: 900;
        }
        .date {
          display: flex;
          align-items: center;
          gap: 0.4em;

          .datelogo {
            font-size: 25px;
          }
          p {
            margin: 0;
            padding: 0;
            margin-top: 0.25em;
          }
        }
      }
      img {
        width: 100%;
      }
      &:hover{
        box-shadow: 5px 5px black;
      }
    }
  }
}
@media (max-width: 768px) {
  .container-fluid {
    font-size: small;
    
    .containImg {
      width: 90vw;
      height: 40vh;
      margin: 0 auto;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    .episodes {
      display: grid;
      grid-template-columns: 1fr;
      .card {
        padding: 0;
        padding-right: 5px;
        display: grid;
        height: 40vh;
        grid-template-columns: 1fr 1.5fr;
        .cardcontent{
          height: 70%;
          display: flex;
          justify-content: space-around;
        }
        img {
          width: 100%;
          height: 80%;
          
          object-fit: cover;
        }
      }
    }
  }
}
</style>
