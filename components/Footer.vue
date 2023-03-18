<template lang="pug">
.container 
    .up
        .left
            .item 
                LogosYoutube/
            .item
                LogosTwitter/
            .item
                LogosInsta/
            .item
                LogosFacebook/
        .middle
            NuxtLink(:to="localePath('/about')" class="lin") {{$t('about_us')}}
            NuxtLink(:to="localePath('/press')" class="lin") {{$t('press')}}
            NuxtLink(:to="localePath('/advertise')" class="lin") {{$t('advertise')}} 
            NuxtLink(:to="localePath('/contact')" class="lin") {{$t('contact_us')}}
        .right
            NuxtLink(:to="localePath('/contact')" class="lin")
                .more 
                    h6 {{$t('subscribe')}}
    .center 
        NuxtLink(to="/" class="lin")
            LogosLogo/
    .thrd
        .item
            p shipping policy
        .item
            p returning policy
        .item
            p privacy policy
        .item
            p Rules

</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
<style lang="scss" scoped>
.container {
  border-top: #000 1px solid;
  margin-top: 3em;
  margin-bottom: 1em;
  .up {
    color: black;
    display: flex;
    justify-content: space-between;
    .left {
      font-size: 20px;
      display: flex;
      align-items: center;
      gap: 0.3em;
      .item {
        color: #000;
        &:hover {
          color: rgb(233, 32, 65);
          cursor: pointer;
        }
      }
    }
    .middle {
      display: flex;
      gap: 1.25em;
      text-align: center;
      align-items: center;
      .lin {
        font-size: large;
        text-decoration: none;
        color: inherit;

        &:hover {
          text-decoration: none;
          color: rgb(233, 32, 65);
        }
      }
    }
    .right {
      
      .lin {
        text-decoration: none;
        color: inherit;

        &:hover {
          text-decoration: none;
          color: inherit;
        }


        .more {
          margin-top: 0.5em;
          border: black solid 1px;
          box-shadow: 5px 5px #000;
          border-radius: 0px;
          padding: 5px 7px;
          h6{
            
            margin: 0;
          }
          transition: 300ms;
          &:hover {
            background-color: #000;
            color: #fff;
            cursor: pointer;
          }
        }
      }
    }
  }
  .center {
    text-align: center;
    display: flex;
    justify-content: center;
  }
  .thrd {
    display: flex;
    justify-content: center;
    text-align: center;
    gap: 1em;
    .item {
      color: #000;
      &:hover {
        color: rgb(233, 32, 65);
        cursor: pointer;
      }
    }
  }
}
@media (max-width: 992px) {
  .container {
    .up {
      
      font-size: 6px;
      gap: 1em;
      display: grid;
      grid-template-columns: 1fr;
      place-items: center;
      margin-top: 1em;
      margin-bottom: 3em;
      .middle{
        display: flex;
        flex-wrap: nowrap;
        gap: 3em;
        margin-bottom: 2em;
        .lin{
            flex: 1;
        }
        .lin:nth-child(1){
            flex: 2;
        }
        
    
        
      }
      
    }
  }
  .thrd {
    font-size: 8px;
  }
}
</style>
