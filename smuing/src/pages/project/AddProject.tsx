import React, { ChangeEvent, useState } from 'react'

import LoginNav from '../../components/login/LoginNav'
import TextArea from '../../components/textarea/TextArea'
import { titleText } from '../../constants/ADD_PROJECT'

const AddProjectPage = () => {
  const [text, setText] = useState('')
  const [formData, setFormData] = useState<AddProject>({
    people: [],
  })
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const colaboratorData = [
    { id: 1, part: 'web', name: '김태영' },
    { id: 2, part: 'server', name: '임재영' },
    { id: 3, part: 'design', name: '디자이너' },
  ]

  const handleColaborator = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => Number(option.value))

    setFormData((prevFormData) => {
      const updatedColaborator = [...prevFormData.people]

      selectedOptions.forEach((option) => {
        if (updatedColaborator.includes(option)) {
          updatedColaborator.splice(updatedColaborator.indexOf(option), 1)
        } else {
          updatedColaborator.push(option)
        }
      })

      return { ...prevFormData, people: updatedColaborator }
    })
  }

  const handleTextChange = (newValue: string, textTitle: string) => {
    setText(newValue)
    setFormData((prevFormData) => ({
      ...prevFormData,
      [`${textTitle.toLowerCase().replace(' ', '')}`]: newValue,
    }))
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleProjectAdd = () => {
    console.log('프로젝트 등록')
    console.log('프로젝트 정보:', formData)
  }

  const getWindowWidth = () => window.innerWidth

  return (
    <div className="bg-rgb-35-39-49">
      <LoginNav title="SMUMC for management team (add project)" />
      <div className="h-full w-full min-h-screen">
        <div className="text-center pt-[80px]">
          <p className="text-white text-4xl pb-[10px]">프로젝트 등록</p>
          <p className="text-white text-sm">*운영진들만 접근 가능한 프로젝트 등록 페이지입니다.</p>
        </div>

        <div className="flex flex-col items-center mt-[20px]">
          <div className="w-full sm:w-[200px]">
            <button
              type="button"
              className="w-full sm:w-[200px] py-2 border rounded-md focus:outline-none focus:border-blue-500 text-white"
              onClick={toggleDropdown}
            >
              인원 선택하기
            </button>
            {isDropdownOpen && (
              <div className="">
                <select
                  value={formData.people}
                  onChange={handleColaborator}
                  multiple
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                >
                  {colaboratorData.map((colaborator) => (
                    <option key={colaborator.id} value={colaborator.id}>
                      {colaborator.part} / {colaborator.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
          <div className="text-white mt-4">
            <p>프로젝트 참여 인원:</p>
            <ul className="flex flex-wrap gap-2">
              {formData.people.map((id) => {
                const selectedColaborator = colaboratorData.find((colaborator) => colaborator.id === id)
                return (
                  <li key={id} className="bg-gray-700 p-2 rounded">
                    {selectedColaborator && (
                      <>
                        <span className="font-bold">{selectedColaborator.name}</span> / {selectedColaborator.part}
                      </>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
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
            onClick={handleProjectAdd}
          >
            프로젝트 등록하기
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddProjectPage
