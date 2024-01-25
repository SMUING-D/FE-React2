import React, { ChangeEvent, FormEvent, useState } from 'react'

import { FormData } from '../../types/types'
import Input from '../input/Input'

const Join: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    studentId: '',
    nickname: '',
    email: '',
    password: '',
    privacyPolicy: false,
    // 전공아이디도 추가해야됌
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : false
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('폼:', formData)
    // 회원가입 api 로직
  }

  return (
    <div className="bg-gray-50 w-[400px]">
      <div className="bg-white p-8 rounded shadow-md">
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
              placeholder="이메일을 입력하세요"
              value={formData.email}
              onChange={handleChange}
              isValid={true}
              errorMessage="이메일을 입력하세요"
            />
          </div>

          {/* 비밀번호 */}
          <div className="mb-4">
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
            className={`w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-700 focus:outline-none ${
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
