import { useAuth } from '@/composable/useAuth';
import { DEV_API_URL } from '../../constants';
import axios from 'axios';
const { accessToken, signOut } = useAuth();
import  i18n  from '@/plugins/i18n';
// const { t } = useI18n();

const Localization = (i18n.global.locale as any) ?? 'en';
export const axiosClient = axios.create({
  baseURL: DEV_API_URL,
  headers: { Accept: 'application/json' },
});
// ***** IMPORTANT *****
// Dynamically setting a header every time request is sent.
axiosClient.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${accessToken.value}`,
    Localization: Localization.value === 'vi-VN' ? 'vi' : 'en',
  };
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    const { data }: object | any = response;
    if (data.error && data.error[0].message) {
     
    }
    return response;
  },
  function (error) {
    if (error?.response?.status === 500) {
      
    } else if (error.response.data.error[0].code === 103) {
      signOut();
     
    } else if (error.response.data.error[0]) {
     
    } else {
      
    }
    return error;
  },
);
