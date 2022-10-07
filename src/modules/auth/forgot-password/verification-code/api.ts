import apiCaller from '@/api/apiCaller';
import { VerificationCodeForm } from './types';

export async function verifyCodeEmail(params: VerificationCodeForm) {
  return await apiCaller.post('/partner/verifyEmailCode', params);
}
