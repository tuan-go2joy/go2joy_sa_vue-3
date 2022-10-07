import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueI18n from '@intlify/vite-plugin-vue-i18n';

// import styleImport from 'vite-plugin-style-import';
import { resolve } from 'path';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      stylus: {
        imports: [resolve(__dirname, 'src/assets/styles/variables.styl')],
      },
    },
  },
});
