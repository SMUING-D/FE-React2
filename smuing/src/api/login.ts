import api from './index'

export const postLogin = async (studentId: number | string, password: string) => {
  const requestBody = {
    studentId: studentId,
    password: password,
  }

  console.log('로그인 연동')

  try {
    const response = await api.post('/api/auth/login', requestBody)
    return response.data
  } catch (error) {
    console.log('에러', error)
    throw error
  }
}
