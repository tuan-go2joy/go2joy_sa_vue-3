import apiCaller from '@/api/apiCaller';
import { ResponseDto } from '@/utils/types';
import { IProfile, IPermission } from '@/utils/types';

export interface IUserInformation {
  accessToken: string;
  expiresAt: number;
  permissionList: IPermission[];
  profile: IProfile;
}
export interface UserLogin {
  userId?: string /* require */;
  password?: string /* require */;
  remember?: number;
}
export async function login(userLogin: UserLogin) {
  const { data } = await apiCaller.post<ResponseDto>('/sign-in', userLogin);
  return data.data;
}
