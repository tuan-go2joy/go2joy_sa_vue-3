// ============================================
// The keys of the localstorage
// ============================================

// export const LS_ACCESS_TOKEN = 'h-access';


export const LS_ACCESS_TOKEN = 'access_token';

export const LS_PROFILE = 'profile';

export const LS_HOTEL_NAME = 'hotel_name';
// =============================
// URL addresses
// =============================

// Server api address (development).
export const DEV_API_URL = 'https://staging-api.gopms.io/api/v1';

// =============================
// Regular Expressions
// =============================

export const VN_TEL_REGEX = /^\d+$/;

export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//-----------------------------------Globals -----------------------------------
export const FORMAT_DATE_TIME_UI = 'DD/MM/YYYY HH:mm';
export const FORMAT_DATE_UI = 'DD/MM/YYYY';
export const FORMAT_DATE_PICKER = 'YYYY/MM/DD';
export const FORMAT_DATE_TIME_PICKER = 'YYYY/MM/DD HH:mm';
export enum GUESTS_ACTIONS {
  NEW_GUEST = 'New guest',
  AVAILABLE_GUEST = 'Available guest',
}
