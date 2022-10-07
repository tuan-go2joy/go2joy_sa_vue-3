export declare type Nullable<T> = T | null;
export declare type RuleType =
  | 'string'
  | 'number'
  | 'boolean'
  | 'method'
  | 'regexp'
  | 'integer'
  | 'float'
  | 'array'
  | 'object'
  | 'enum'
  | 'date'
  | 'url'
  | 'hex'
  | 'email'
  | 'pattern'
  | 'any';
export interface IMeta {
  currentPage: number;
  from: number;
  lastPage: number;
  perPage: number;
  to: number;
  total: number;
}

export interface ResponseDto<D = any> {
  code: number;
  message: string;
  error: string | null;
  data: D | null;
  timestamp: number;
}
export interface IProfile {
  email: string;
  fullName: string;
  userId: string;
}
export interface IPermission {
  name: string;
  pCreate: number;
  pExport: number;
  pModify: number;
  pView: number;
  slug: string;
  sn: number;
}
