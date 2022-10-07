import apiCaller from '@/api/apiCaller';
import { UpdatePasswordForm } from './types';

export async function updatePasswordByEmail(params: UpdatePasswordForm) {
  return await apiCaller.post('/partner/updatePasswordByEmail', params);
}
