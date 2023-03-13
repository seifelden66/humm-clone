<template lang="pug">
.container 
  div(v-for="i in data.Article")
    div(v-if="i.slug === namee")
      .video
        iframe.frame(:src="'https://www.youtube.com/embed/'+i.video")
      .content
        .left
          NuxtLink.images(to="/advertise") 
            img(src="../.././assets/images/ad1.png")
            img(src="../.././assets/images/ad2.png")
        .right
          h1 {{ i.slug }}
          .cat(v-for="item in i.category")
              NuxtLink(:to="'/food/category/'+item" class="but")
                h6 {{ item }}
          .cont 
            h4 {{ i.translations[0].title}}
          .btm
            p
                LogosPerson/ {{ i.user_updated.first_name  }} {{ i.user_updated.last_name }}
            p
                LogosClock/ {{ i.date_created_func.day }} / {{ i.date_created_func.month }} / {{ i.date_created_func.year }}
        
</template>

<script setup lang="ts">
const route = useRoute();
const namee = route.params.slug;
const { data } = await useAsyncGql({
  operation: "humm",
});
</script>
<style lang="scss" scoped>
.container {
  .video{
    .frame{
      height: 500px;
      width: 100%;
    }
  }
  .content {
    margin-top: 2em;
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 2em;
    .right {
      align-items: center;
      align-self: center;
      text-align: end;
      .cat {
        .but {
          margin: 0;
          border-radius: 20px;
          text-decoration: none;
          color: inherit;
          transition: 300ms;
          &:hover {
            text-decoration: none;
            color: rgb(143, 141, 141);
          }
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
@media (max-width: 768px) {
  .container {
    .content {
      display: grid;
      grid-template-columns: 1fr;
      .images {
        display: flex;
        width: 50%;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
