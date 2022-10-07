import { createI18n } from 'vue-i18n';
import enUSMessages from '@/locales/en-file.json';
import viVNMessages from '@/locales/vn-file.json';

export type TMessageSchema = typeof enUSMessages;

export type TLocale = 'en-US' | 'vi-VN';

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') ?? 'en-US',
  fallbackLocale: 'en-US',
  messages: {
    'en-US': enUSMessages,
    'vi-VN': viVNMessages,
  },
});
export default i18n;
