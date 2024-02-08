import api from './index'

export const postEmail = async (studentId: number) => {
  const requestBody = {
    studentId: studentId,
  }

  console.log('이메일 인증번호 발급')

  try {
    const response = await api.post('/api/auth/send-verification-email', requestBody)
    return response.data
  } catch (error) {
    console.log('이메일 인증코드 발급 에러 발생', error)
    throw error
  }
}
