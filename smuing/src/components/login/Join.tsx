import React, { ChangeEvent, FormEvent, useState } from 'react'

import { FormData } from '../../types/types'
import Input from '../input/Input'

const Join: React.FC = () => {
  const [emailValid, setEmailValid] = useState(false)
  const [verificationCode, setVerificationCode] = useState('')
  const [formData, setFormData] = useState<FormData>({
    name: '',
    studentId: '',
    nickname: '',
    email: '',
    password: '',
    major: 0,
    privacyPolicy: false,
    sex: '',
    github: '',
    // 전공아이디도 추가해야됌
  })

  const majors = [
    { id: 0, name: '전공을 선택해주세요' },
    { id: 1, name: '컴공' },
    { id: 2, name: '휴먼지능' },
  ]

  const sex = [
    { id: 0, name: '성별을 선택해주세요' },
    { id: 1, name: '남자' },
    { id: 2, name: '여자' },
  ]

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : false
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }))

    switch (name) {
      case 'email':
        setEmailValid(validEmail(value))
        break
      default:
        break
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (emailValid) {
      console.log('폼:', formData)
      // 회원가입 api 로직
    } else {
      console.log('이메일 에러')
    }
  }

  //   이메일 유효성 검사
  const validEmail = (email: string) => {
    const emailRegex = /\S+@sangmyung\.co\.kr$/
    return emailRegex.test(email)
  }

  //이메일 인증코드 요청 보내기
  const handleEmailSubmit = () => {
    console.log('formdata.email 이메일 인증 api로 보내기')
  }

  //인증번호 상태변경
  const handleVerificationCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(e.target.value)
  }

  const handleVerificationSubmit = async () => {
    // try {

    // }
    // catch(error){

    // }
    console.log('formdata.email, verificationCode 인증요청 보내기')
    //200뜨면 상태값 하나 변경해서 마지막 회원가입 버튼에 활성화 조건 추가하기
  }

  return (
    <div className="border border-solid border-blue-500 rounded-[20px] p-4 w-[400px]">
      <div className="p-8">
        <h2 className="text-2xl font-semibold mb-4">회원가입</h2>
        <form onSubmit={handleSubmit}>
          {/* 이름 */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">
              이름
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="이름을 입력하세요"
              value={formData.name}
              onChange={handleChange}
              isValid={true}
              errorMessage="이름을 입력하세요"
            />
          </div>

          {/* 학번 */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">
              학번
            </label>
            <Input
              id="studentId"
              name="studentId"
              type="text"
              placeholder="학번을 입력하세요"
              value={formData.studentId}
              onChange={handleChange}
              isValid={true}
              errorMessage="이름을 입력하세요"
            />
          </div>

          {/* 닉네임 */}
          <div className="mb-4">
            <label htmlFor="nickname" className="block text-gray-600 text-sm font-medium mb-2">
              닉네임
            </label>
            <Input
              id="nickname"
              name="nickname"
              type="text"
              placeholder="닉네임을 입력하세요"
              value={formData.nickname}
              onChange={handleChange}
              isValid={true}
              errorMessage="닉네임을 입력하세요"
            />
          </div>

          {/* 이메일 */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
              이메일
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="학교 이메일을 입력하세요"
              value={formData.email}
              onChange={handleChange}
              isValid={emailValid}
              errorMessage="올바른 학교 이메일 형식이 아닙니다"
            />
          </div>
          {emailValid && (
            <>
              <button
                type="button"
                onClick={handleEmailSubmit}
                className="w-full bg-white text-blue-500 py-2 rounded-md hover:bg-blue-700 hover:text-white border border-solid border-blue-500 focus:outline-none"
              >
                이메일 인증하기
              </button>
              <div className="mb-4 mt-2">
                <label htmlFor="verificationCode" className="block text-gray-600 text-sm font-medium mb-2">
                  인증번호
                </label>
                <Input
                  id="verificationCode"
                  name="verificationCode"
                  type="text"
                  placeholder="인증번호를 입력하세요"
                  value={verificationCode}
                  onChange={handleVerificationCodeChange}
                  isValid={true}
                  errorMessage="인증번호를 입력하세요"
                />
              </div>
              <button
                type="button"
                onClick={handleVerificationSubmit}
                className="w-full bg-white text-blue-500 py-2 rounded-md hover:bg-blue-500 hover:text-white border border-solid border-blue-500 focus:outline-none"
              >
                인증번호 확인
              </button>
            </>
          )}

          {/* 비밀번호 */}
          <div className="mb-4 mt-2">
            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
              비밀번호
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={formData.password}
              onChange={handleChange}
              isValid={true}
              errorMessage="비밀번호를 입력하세요"
            />
          </div>

          {/* 전공 선택 */}
          <div className="mb-4">
            <label htmlFor="major" className="block text-gray-600 text-sm font-medium mb-2">
              전공
            </label>
            <select
              id="major"
              name="major"
              value={formData.major}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              {majors.map((major) => (
                <option key={major.id} value={major.id}>
                  {major.name}
                </option>
              ))}
            </select>
          </div>

          {/* 성별 */}
          <div className="mb-4">
            <label htmlFor="major" className="block text-gray-600 text-sm font-medium mb-2">
              성별
            </label>
            <select
              id="major"
              name="major"
              value={formData.sex}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              {sex.map((sex) => (
                <option key={sex.id} value={sex.id}>
                  {sex.name}
                </option>
              ))}
            </select>
          </div>
          {/* 깃허브 이메일 */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">
              깃허브 주소
            </label>
            <Input
              id="github"
              name="github"
              type="text"
              placeholder="깃허브 주소를 입력해주세요"
              value={formData.github}
              onChange={handleChange}
              isValid={true}
              errorMessage=""
            />
          </div>

          {/* 동의항목 */}
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                id="privacyPolicy"
                name="privacyPolicy"
                checked={formData.privacyPolicy}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-gray-600 text-sm font-medium">개인정보 처리방침에 동의합니다.</span>
            </label>
          </div>
          <button
            type="submit"
            disabled={!formData.privacyPolicy}
            className={`w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none ${
              !formData.privacyPolicy ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  )
}

export default Join
