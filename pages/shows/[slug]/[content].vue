<template lang="pug">
.container 
  div(v-for="i in data.shows")
    div(v-if="i.slug === namee")
      div(v-for="item in i.all_episodes")
        div(v-if="item.slug === content")
          .video
            iframe.frame(:src="'https://www.youtube.com/embed/'+item.video")
          .contentfood
            
            .right
              .cat
                NuxtLink(:to="localePath('/food/'+i.slug)"  class="but")
                  p {{ i.slug }}
              .cont 
                h1 {{ item.translations[0].title}}
              .btm
                p
                    LogosPerson/ {{ item.user_created.first_name  }} {{ item.user_created.last_name }}
                p
                    LogosClock/ {{ item.date_created_func.day }} / {{ item.date_created_func.month }} / {{ item.date_created_func.year }}
            .left
              NuxtLink.images(to="/advertise") 
                img(src="../../../assets/images/ad1.png")
                img(src="../../../assets/images/ad2.png")
</template>

<script setup lang="ts">
const route = useRoute();
const namee = route.params.slug;
const content = route.params.content;
const { data } = await useAsyncGql({
  operation: "shows",
});
</script>

<style lang="scss">
.container {
  margin-top: 3em;
  margin-bottom: 2em;
  .video {
    .frame {
      height: 500px;
      width: 100%;
    }
  }
  .contentfood {
    margin-top: 2em;
    display: grid;
    grid-template-columns: 3fr 1fr;
    height: 300px;
    gap: 2em;
    .right {
      direction: rtl;
      display: flex;
      flex-direction: column;
      align-items: right;
      align-self: right;
      text-align: right;
      .btm{
        display: flex;
        gap: 15px;
        align-items: center;
        p{
          display: flex;
          align-items: center;
        }
      }
      .cat {
        border: 1px black solid;
        border-radius: 5em;
        width: 8em;
        display: flex;
        justify-content: center;
        padding:5px 1em;
        transition: 400ms;
        .but {
          color: inherit;
          text-decoration: none;
          p {
            margin: 0;
          }
        }
        &:hover {
          background: #000;
          color: #fff;
        }
      }
    }
    .left {

      img {
        width: 100%;
      }
    }
  }
}
@media (max-width: 992px) {
  .container {
    .contentfood {
      height: auto;
      display: grid;
      grid-template-columns: 1fr;
      .left{
        width: 90vw !important;
        margin: 0 auto;
        .images{
          display: grid;
          grid-template-columns: 1fr 1fr;
        img{
          width: 50%;
          margin: 0;
        }}
      }
    }
  }
}
</style>
