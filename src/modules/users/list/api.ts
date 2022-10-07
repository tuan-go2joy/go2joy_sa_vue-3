import apiCaller from '@/api/apiCaller'

export async function fetchUsers (params: any) {
  return await apiCaller.get('users', { params: params })
}

export async function exportUsers (params: any) {
  return await apiCaller.get('/exports/users', { params: params })
}

export async function deleteUser (sn: number) {
  return await apiCaller.delete(`/users/${sn}`)
}

export async function openUser (sn: number, params: any) {
  return await apiCaller.patch(`/users/${sn}`, params)
}
