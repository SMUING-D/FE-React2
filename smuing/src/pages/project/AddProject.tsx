import { useState } from 'react'
import { ChangeEvent } from 'react'

import LoginNav from '../../components/login/LoginNav'
import TextArea from '../../components/textarea/TextArea'
import { titleText } from '../../constants/ADD_PROJECT'

const AddProject = () => {
  const [text, setText] = useState('')
  const [formData, setFormData] = useState({
    colaborator: [],
  })
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const colaboratorData = [
    { id: 1, part: 'web', name: '김태영' },
    { id: 2, part: 'server', name: '임재영' },
    { id: 3, part: 'design', name: '디자이너' },
  ]

  const handleColaborator = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => Number(option.value))
    setFormData({ ...formData, colaborator: selectedOptions })
  }

  const handleTextChange = (newValue: string) => {
    setText(newValue)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <>
      <LoginNav title="SMUMC for management team" />
      <div className="bg-rgb-35-39-49 h-full w-full">
        <div className="text-center pt-[80px]">
          <p className="text-white text-4xl pb-[10px]">프로젝트 등록</p>
          <p className="text-white text-sm">*운영진들만 접근 가능한 프로젝트 등록 페이지입니다.</p>
        </div>

        <div className="text-center w-full">
          <div className="w-[200px]">
            <button
              type="button"
              className="w-full py-2 border mx-auto rounded-md focus:outline-none focus:border-blue-500"
              onClick={toggleDropdown}
            >
              인원 선택하기
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-1 w-[200px] bg-white rounded-md shadow-lg">
                <select
                  id="colaborator"
                  name="colaborator"
                  value={formData.colaborator}
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
            <p>선택된 항목들:</p>
            <ul>
              {formData.colaborator.map((id) => (
                <li key={id}>{colaboratorData.find((colaborator) => colaborator.id === id)?.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center pt-[100px]">
          {titleText.map((title, index) => (
            <TextArea
              key={index}
              value={text}
              onChange={handleTextChange}
              placeholder={`프로젝트 ${title.text}을(를) 입력해주세요`}
              width={700}
              height={title.height}
              maxChars={title.max}
              textTitle={title.text}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default AddProject
