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
            .cont 
              h4 {{ i.translations[0].title}}
            .btm
              p
                  LogosPerson/ {{ i.user_updated.first_name  }} {{ i.user_updated.last_name }}
              p
                  LogosClock/ {{ i.date_created_func.day }} / {{ i.date_created_func.month }} / {{ i.date_created_func.year }}
</template>
<script lang="ts" setup>
const route = useRoute();
const namee = route.params.slug;
const { data } = await useAsyncGql({
  operation: "read",
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
