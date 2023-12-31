const URL = "https://kpax-backend.herokuapp.com";
import colors from "vuetify/es5/util/colors";
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "kpax",
    htmlAttrs: {
      lang: "pt-br",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700%7CMaterial+Icons",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Poppins:400,700,900&display=swap",
      },
    ],
  },

  css: [
    "~/assets/css/style.css",
    "~/assets/css/typography.css",
    "~/assets/css/animations.css",
    "slick-carousel/slick/slick.css",
    "slick-carousel/slick/slick-theme.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/mixins/user",
    { src: "~/plugins/localStorage.js", mode: "client" },
    { src: "~/plugins/slick", mode: "client" },
    { src: "~/plugins/AOS", mode: "client" },
    { src: "~/plugins/vue2SmoothScroll", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/vuetify", "@aceforth/nuxt-optimized-images"],
  optimizedImages: {
    optimizeImages: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/pwa",
    "@nuxtjs/robots",
    // '@nuxtjs/sitemap',
    [
      "vue-sweetalert2/nuxt",
      {
        confirmButtonColor: "#363855",
        cancelButtonColor: "#ff7674",
      },
    ],
  ],
  pwa: {
    icon: false, // disables the icon module
  },
  robots: {
    UserAgent: "Googlebot",
    Disallow: "/users",
    UserAgent: "Bingbot",
    Disallow: "/admin",
  },

  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      light: true,
      themes: {
        light: {
          primary: "#91B5F4",
          accent: colors.grey.darken3,
          secondary: "#2e2e2d",
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: "#D15252",
          success: colors.green.accent3,
        },
      },
    },
  },
  build: {
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? "source-map" : "inline-source-map";
      }
    },
  },
};
