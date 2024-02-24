import api from './index'

export const role = async () => {
  try {
    const response = await api.get(`/api/get/role`)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log('회원 권한 가져오기', error)
    throw error
  }
}
