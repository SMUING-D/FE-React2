import { useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { IoCloseSharp } from 'react-icons/io5'

import { FormTitleBoxProps } from '../../types/types'

type OPTIONS_DATA_TYPE = {
  name: string
  type: string
}

const FormTitleBox: React.FC<FormTitleBoxProps> = ({ field, editTitle, editFieldType, deleteQuestion }) => {
  const { name, title } = field
  const [view, setView] = useState(false)
  const [selectedTOption, setSelectedOption] = useState('')
  const onClickSelect = () => {
    setView(!view)
  }
  const onClickOption = (e: React.MouseEvent<HTMLLIElement>, item: OPTIONS_DATA_TYPE) => {
    const target = e.target as HTMLLIElement
    setSelectedOption(target.innerText)
    setView(!view)
    editFieldType(name, item.type)
  }
  const OPTIONS_DATA = [
    { name: '짧은 질문', type: 'shortAnswer' },
    { name: '긴 질문', type: 'paragraph' },
    { name: '객관식 질문', type: 'multipleChoice' },
    { name: '체크박스', type: 'checkbox' },
    { name: '이미지박스', type: 'imageBox' },
  ]
  return (
    <div className="flex justify-between w-full pt-5">
      <input
        className="w-full placeholder-black"
        type="text"
        placeholder="제목을 입력해주세요"
        value={title}
        onChange={(e) => editTitle(name, e.target.value)}
      />
      <div className="flex items-center">
        <ul
          className="w-[80px] h-[20px] flex items-center justify-end text-center border-2 border-gray-500 rounded-lg relative"
          onClick={onClickSelect}
        >
          {view ? (
            <>
              <p className="text-[12px]">{selectedTOption}</p>
              <IoMdArrowDropdown />
            </>
          ) : (
            <>
              <p className="text-[12px]">{selectedTOption}</p>
              <IoMdArrowDropup />
            </>
          )}
          {view && (
            <div className="flex flex-col w-[80px] text-[12px] absolute top-4 rounded-lg">
              {OPTIONS_DATA.map((item, index) => (
                <li key={index} className="hover:bg-[#9290C3] rounded-lg" onClick={(e) => onClickOption(e, item)}>
                  {item.name}
                </li>
              ))}
            </div>
          )}
        </ul>
        <button className="ml-2" onClick={() => deleteQuestion(name)}>
          <IoCloseSharp size={20} className="text-red-500 hover:text-red-900" />
        </button>
      </div>
    </div>
  )
}

export default FormTitleBox
