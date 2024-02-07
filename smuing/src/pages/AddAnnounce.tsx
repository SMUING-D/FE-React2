import { useState } from 'react'

import LoginNav from '../components/login/LoginNav'
import TextArea from '../components/textarea/TextArea'
import { titleText } from '../constants/ADD_ANNOUNCE'

// import { AddAnnounce } from '../../types/types'

const AddAnnounce = () => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({})

  const getWindowWidth = () => window.innerWidth

  const handleTextChange = (newValue: string, textTitle: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [`${textTitle.toLowerCase().replace(' ', '')}`]: newValue,
    }))
  }

  const handleAnnounceAdd = () => {
    console.log('공지사항 등록')
    console.log('공지사항 정보:', formData)
  }

  return (
    <div className="bg-rgb-35-39-49">
      <LoginNav title="SMUMC for management team (add announcement)" />
      <div className="w-full h-full min-h-screen">
        <div className="text-center pt-[80px]">
          <p className="text-white text-4xl pb-[10px] sm: mt-[20px]">공지사항 등록</p>
          <p className="text-white text-sm">*운영진들만 접근 가능한 프로젝트 등록 페이지입니다.</p>
        </div>

        <div className="text-center pt-4 sm:pt-[10px]">
          {titleText.map((title, index) => (
            <TextArea
              key={index}
              value={formData[title.value] || ''}
              onChange={(newValue) => handleTextChange(newValue, title.value)}
              placeholder={`프로젝트 ${title.text}을(를) 입력해주세요`}
              width={getWindowWidth() < 768 ? 'auto' : '700'}
              height={title.height}
              maxChars={title.max}
              textTitle={title.text}
            />
          ))}
        </div>

        <div className="text-center pb-[20px]">
          <button
            type="button"
            className="sm:w-[200px] mt-4 sm:mt-[10px] py-2 border rounded-md focus:outline-none focus:border-blue-500 text-white"
            onClick={handleAnnounceAdd}
          >
            공지사항 등록하기
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddAnnounce
