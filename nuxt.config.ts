// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({



    css: ["bootstrap/dist/css/bootstrap.min.css"],
    runtimeConfig: {
        public: {
            GQL_HOST: 'https://board.humm.world/graphql',
        }
    },
    modules: [
        'nuxt-graphql-client', '@nuxtjs/i18n'
    ],

    i18n: {
        locales: [
            {
              code: 'en',
              name: 'English',
              iso: 'en-US',
              file: 'en.js',
            },
            {
              code: 'ar',
              name: 'Arabic',
              iso: 'ar-AR',
              file: 'ar.js',
            },
          ],
          defaultLocale: 'en',
          vueI18n: {
            fallbackLocale: 'en',
          },
          lazy: true,
          langDir: 'lang/',
      
    },



    app: {
        head: {
            link: [
                { rel: 'stylesheet', href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" }
            ]
        }
    },



})
