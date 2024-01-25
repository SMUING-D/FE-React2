import { ChangeEvent, useState } from 'react'

import Input from '../input/Input'

const LoginBox = () => {
  const [schoolCode, setSchoolCode] = useState('')
  const [password, setPassword] = useState('')
  const [isSchoolCodeValid, setIsSchoolCodeValid] = useState(true)
  const [passwordValid, setPasswordValid] = useState(true)

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
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

  const handleSubmit = (event: React.FormEvent) => {
    // 로그인 api 연결
    event.preventDefault()
  }

  return (
    <div className="bg-gray-50 w-[400px]">
      <div className="bg-white p-8 rounded shadow-md">
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
              onChange={handleUsernameChange}
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
      </div>
    </div>
  )
}

export default LoginBox
