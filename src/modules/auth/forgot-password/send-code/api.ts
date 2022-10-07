import apiCaller from '@/api/apiCaller';

export async function forgotPassword(email: string) {
  return await apiCaller.post('/partner/forgotPasswordByEmail', {
    email: email,
  });
}
