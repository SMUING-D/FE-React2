import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { postLogin } from '../../api/login'
import Input from '../input/Input'

const LoginBox = () => {
  const navigate = useNavigate()
  const [schoolCode, setSchoolCode] = useState<number | string>('')
  const [password, setPassword] = useState('')
  const [isSchoolCodeValid, setIsSchoolCodeValid] = useState(true)
  const [passwordValid, setPasswordValid] = useState(true)
  const [loginMessage, setLoginMessage] = useState<string>('')

  const handleSchoolCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const enterSchoolCode = event.target.value
    const isValid = enterSchoolCode.length >= 8
    setSchoolCode(enterSchoolCode)
    setIsSchoolCodeValid(isValid)
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const enterPassword = event.target.value
    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)(?=.*[a-zA-Z]).{8,}$/
    const isValidPassword = passwordRegex.test(enterPassword)
    setPassword(enterPassword)
    setPasswordValid(isValidPassword)
  }

  const handleSubmit = async (event: React.FormEvent) => {
    // 로그인 api 연결
    event.preventDefault()
    try {
      const response = await postLogin(schoolCode, password)
      console.log(response)
      const type = response.code
      if (type == 'MEMBER4007') {
        setLoginMessage(response.message)
      } else if (type == 'MEMBER4001') {
        setLoginMessage(response.message)
      } else {
        localStorage.setItem('accessToken', response.access_token)
        localStorage.setItem('refreshToken', response.refresh_token)
        navigate('/')
      }
    } catch (error) {
      console.error('에러', error)
      // Handle the error appropriately
    }
  }

  return (
    <div className="w-[400px] border border-solid border-blue-500 rounded-[20px] p-4">
      <div className="p-8">
        <h2 className="text-2xl font-semibold mb-4">로그인</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">
              학번
            </label>
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="학번을 입력해주세요"
              value={schoolCode}
              onChange={handleSchoolCodeChange}
              isValid={isSchoolCodeValid}
              errorMessage="올바른 학번 형식이 아닙니다"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
              비밀번호
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={handlePasswordChange}
              isValid={passwordValid}
              errorMessage="올바른 비밀번호 형식이 아닙니다."
            />
          </div>
          <button
            type="submit"
            disabled={!isSchoolCodeValid || !passwordValid}
            className={`w-full py-2 rounded-md focus:outline-none 
              ${
                !isSchoolCodeValid || !passwordValid
                  ? 'opacity-50 bg-blue-500 text-white cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600'
              }`}
          >
            로그인
          </button>
        </form>
        {loginMessage && <div>{loginMessage}</div>}
      </div>
    </div>
  )
}

export default LoginBox
