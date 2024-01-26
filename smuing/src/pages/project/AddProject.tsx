import { useState } from 'react'

import TextArea from '../../components/textarea/TextArea'

const AddProject = () => {
  const [text, setText] = useState('')

  const handleTextChange = (newValue: string) => {
    setText(newValue)
  }
  return (
    <>
      <div className="bg-rgb-35-39-49 h-full w-full">
        <div className="text-center pt-[80px]">
          <p className="text-white text-4xl pb-[10px]">프로젝트 등록</p>
          <p className="text-white text-sm">*운영진들만 접근 가능한 프로젝트 등록 페이지입니다.</p>
        </div>

        <div className="text-center">
          <TextArea
            value={text}
            onChange={handleTextChange}
            placeholder="정보를 입력해주세요"
            width={700}
            height={300}
            maxChars={100}
          />
        </div>
      </div>
    </>
  )
}

export default AddProject
