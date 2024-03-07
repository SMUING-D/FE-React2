import { IoCloseSharp } from 'react-icons/io5'

import { FormTitleBoxProps } from '../../types/types'

const FormTitleBox: React.FC<FormTitleBoxProps> = ({ field, editTitle, editFieldType, deleteQuestion }) => {
  const { name, title, question_type } = field
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
        <select className="" onChange={(e) => editFieldType(name, e.target.value)} value={question_type}>
          <option value="shortAnswer">짧은 질문</option>
          <option value="paragraph">긴 질문</option>
          <option value="multipleChoice">객관식 질문</option>
          <option value="checkbox">체크박스</option>
          <option value="imageBox">이미지박스</option>
        </select>
        <button className="ml-2" onClick={() => deleteQuestion(name)}>
          <IoCloseSharp size={20} className="text-red-500 hover:text-red-900" />
        </button>
      </div>
    </div>
  )
}

export default FormTitleBox
