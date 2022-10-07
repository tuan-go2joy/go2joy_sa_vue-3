import axios from 'axios';
import { AxiosRequestConfig } from 'axios';
import { getLocalStorageWithExpiry } from '@/utils/localStorage';
import  i18n  from '@/plugins/i18n';
import { ElMessage, ElMessageBox } from 'element-plus'
import type { Action } from 'element-plus'
const Localization = (i18n.global.locale as any) ?? 'en';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_DOMAIN as string,
  // timeout: 5000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    const token = getLocalStorageWithExpiry('access_token');
    if (token) {
      // (config.headers as AxiosRequestHeaders)['Authorization'] = `Bearer ${token}`;
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
        Localization: Localization.value === 'vi-VN' ? 'vi' : 'en',
      };
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  async function (response) {
    const { data }: any = response;
    if (data.error && data.error.length) {
      if (data.error[0].code === 51 || data.error[0].code === 3) {
        await localStorage.removeItem('access_token');
        await localStorage.removeItem('profile');
        ElMessage({
          type: 'error',
          message: 'Session expired please login again',
        });
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        ElMessage({
          type: 'error',
          message: data.error[0].message || data.error,
        });
      }
    }

    return response;
  },
  async function (error) {
    if (error.response.data?.code === 3) {
      forceLogOut()
      return false
    } else if (error.response.status === 401) {
      ElMessageBox.alert(i18n.t('expiredToken'), 'Title', {
        // if you want to disable its autofocus
        // autofocus: false,
        confirmButtonText: 'OK',
        callback: (action: Action) => {
          forceLogOut()
          ElMessage({
            type: 'info',
            message: `action: ${action}`,
          })
        },
      })
      return false
    }
    return Promise.reject(error);
  },
);
async function forceLogOut () {
  localStorage.removeItem('access_token')
  localStorage.removeItem('profile')
  window.location.href = 'sign-in'
}
export default axiosInstance;
