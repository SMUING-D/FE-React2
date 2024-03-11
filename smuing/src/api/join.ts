import api from './index'

export const postJoin = async (
  studentId: number | undefined,
  name: string,
  password: string,
  email: string,
  nickname: string,
  majorName: string,
  github: string,
  sex: number,
) => {
  const requestBody = {
    studentId: Number(studentId),
    name: name,
    password: password,
    email: email,
    nickname: nickname,
    majorName: majorName,
    github: github,
    sex: `${sex}`,
  }

  console.log('회원가입 api 연동')

  try {
    const response = await api.post('/api/auth/join', requestBody)
    console.log(response)
    return response.data
  } catch (error) {
    console.log('회원 가입 에러', error)
    throw error
  }
}
