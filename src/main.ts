import { createApp } from 'vue';
import  i18n  from '@/plugins/i18n';
import  { ElementPlus }  from '@/plugins/element-plus';

import emit from './plugins/emit'
import '@/modules';
import App from '@/App.vue';
import router from '@/router';
import '@/assets/styles/index.styl';
import SAComponents from '@/components';

const app = createApp(App);
app.use(SAComponents);
app.use(router);
app.use(i18n);
app.use(emit)
app.use(ElementPlus, { size: 'large', zIndex: 3000 });
app.mount('#app');
