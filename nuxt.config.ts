// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ✅ Modules
  modules: [
    '@nuxt/eslint',       // Dev linting
    '@nuxt/image',        // Optimized images
    '@nuxt/content',      // Markdown/content support
    '@vueuse/nuxt',       // Composition utilities
    'motion-v/nuxt',      // Animations
    '@nuxt/ui'
  ],

  // ✅ Enable Nuxt devtools
  devtools: {
    enabled: true
  },

  // ✅ Global CSS
  css: ['~/assets/css/main.css'],

  // ✅ Nuxt compatibility date
  compatibilityDate: '2024-11-01',

  // ✅ Nitro & Firebase optimized for deployment
  nitro: {
    preset: 'firebase',   // Ensures Firebase Hosting + Functions compatibility
    prerender: {
      routes: ['/'],      // Pre-render the homepage
      crawlLinks: true    // Auto-discover other static routes
    },
    firebase: {
      gen: 2              // Use new Firebase Nitro integration
    }
  },

  // ✅ ESLint stylistic rules
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  // ✅ Disable OG Image module since it's not used
  ogImage: {
    enabled: false,
  },

  // ✅ Optional: enforce SSR for SEO
  ssr: true
})
