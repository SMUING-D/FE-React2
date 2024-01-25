import React, { ChangeEvent, FormEvent, useState } from 'react'

import { FormData } from '../../types/types'

const Join: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    nickname: '',
    email: '',
    password: '',
    privacyPolicy: false,
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
  }

  return (
    <div className="bg-gray-50 w-[400px]">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">회원가입</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">
              이름
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="이름을 입력하세요"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="nickname" className="block text-gray-600 text-sm font-medium mb-2">
              닉네임
            </label>
            <input
              type="text"
              id="nickname"
              name="nickname"
              value={formData.nickname}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="닉네임을 입력하세요"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
              이메일
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="이메일을 입력하세요"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="비밀번호를 입력하세요"
            />
          </div>
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
