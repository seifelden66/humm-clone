<template lang="pug">
.container 
    .upper 
        NuxtLink(:to="localePath('/')")
            LogosLogo/ 
        .content
            NuxtLink.lin(:to="localePath('/contact')" class="upitem")
              .logo 
                LogosEmail/ 
              .text
                p {{$t('subscribe')}}
            .upitem
              .logo
                LogosCart/ 
              .text
                p {{ $t('cart') }}
            button.upitem(@click="changeLanguageEN") 
              .logo
                LogosLang/
            button.upitem(@click="changeLanguageAR") 
                .logo
                  LogosLang2/
        .contBut 
            NuxtLink.lin(:to="localePath('/contact')") {{$t('contact_us')}}
    .lower 
        .items 
            .item(@click="open") 
                LogosMenu/
                h5 {{$t('menu')}}
            .item 
                NuxtLink.link(:to="localePath('/food')")
                    LogosFork/
                    h5 {{$t('food')}} 
            .item 
                NuxtLink.link(:to="localePath('/shows')")
                    LogosShows/
                    h5 {{$t('shows')}} 
            .item 
                NuxtLink.link(:to="localePath('/read')")
                    LogosSixLines/
                    h5 {{$t('read')}}
            .item 
                NuxtLink.link(:to="localePath('/shop')")
                    LogosShop4/
                    h5 {{$t('shop')}}
        .srch
          button(@click="showModal = true")
            h5 {{$t('search')}}
             LogosSearch/
          div(v-if="showModal")
            .modal
              .con
                .in
                  LogosSearch/
                  input(v-model="searchQuery" placeholder="Search...")
                .bttn
                  button(@click="hideModal") 
                    LogosCross/
              
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t, locale, setLocale } = useI18n();
const localePath = useLocalePath()

const changeLanguageEN = () => {
  const newLocale = locale.value === 'en' ? 'ar' : 'en'; 
  setLocale(newLocale); 
};
const changeLanguageAR = () => {
  const newLocale = locale.value === 'ar' ? 'en' : 'ar'; 
  setLocale(newLocale); 
};
const showModal = ref(false);
  const searchQuery = ref('');

  function hideModal() {
    showModal.value = false;
  }
</script>
<style lang="scss" scoped>
.container {
  font-size: large;
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
    button{
      border: none;
      background: inherit;
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
      button{
        border: none;
        background-color: inherit;
      }
      
      .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        .con{
          border: #000 solid 2px;
          display: flex;
          background: #fff;
          height: 35px;
          width: 50vw;
          padding: 5px;
          align-items: center;
          input{
            align-items: center;
            border: none;
            width:45vw;
          }
          button{
            padding: 3px;
            padding-left: 30%;
            border: none;
            border-left: 2px  solid rgba(0, 0, 0);
            height: 100%;
            background-color: inherit;
          }
        }
        
        
      }
    
      .modal-content {
        display: flex;
        width: 50%;
        background-color: white;
        padding: 1rem;
        border-radius: 4px;
      }}
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
        button{
          display: flex;
          align-items: center;
        }
        .modal{
          
          .con{
            font-size: 16px;
            height: 40px;
            width: 80vw;
            input{
              width: 60vw;
            }
            button{
              font-size: 20px;
              margin: 0;
              padding: 5px;
              padding-left: 50%;
              border: none;
              border-left: 2px  solid rgba(0, 0, 0);
              height: 100%;
              background-color: inherit;
            }
          }
          
        }

      }
      .items {
        margin-top: 5px;
        font-size: 18px;
        .item:nth-child(1){
          display: flex;
          align-items: center;
          h5{
            font-size: 16px;
            
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
