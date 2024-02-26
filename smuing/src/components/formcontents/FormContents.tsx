import { FaCopy } from 'react-icons/fa'

import { FormContentsProps } from '../../types/types'
import FormOption from '../formoption/FormOption'
import FormTitleBox from '../formtitlebox/FormTitleBox'

const FormContents: React.FC<FormContentsProps> = ({
  field,
  editTitle,
  editFieldType,
  deleteQuestion,
  addOption,
  handleRequire,
  duplicateQuestion,
  editLabel,
  editList,
}) => {
  const { name, question_type } = field
  return (
    <div className="flex items-center justify-center w-full py-10">
      <div className="flex w-[95%] px-4 bg-white rounded-md ">
        <div className="flex flex-col items-center w-full">
          <FormTitleBox
            field={field}
            editTitle={editTitle}
            editFieldType={editFieldType}
            deleteQuestion={deleteQuestion}
          />
          {question_type === 'checkbox' && (
            <button
              onClick={() => addOption(name)}
              className="w-20 sm:w-[170px] p-2 mt-4 text-[10px] sm:text-lg rounded-lg bg-slate-400"
            >
              체크박스 추가
            </button>
          )}
          {question_type === 'multipleChoice' && (
            <button
              onClick={() => addOption(name)}
              className="w-20 sm:w-[120px] p-2 mt-4 text-[10px] sm:text-lg rounded-lg bg-slate-400"
            >
              선택지 추가
            </button>
          )}
          <FormOption field={field} editLabel={editLabel} editList={editList} />
          <div className="flex gap-5 mb-4">
            <button
              className={`sm:w-[100px] p-3 rounded-md ${field.required ? 'bg-red-500' : 'bg-gray-500'}`}
              onClick={() => handleRequire(name)}
            >
              필수
            </button>
            <button
              className="flex items-center justify-center sm:w-[100px] p-3 bg-orange-500 rounded-md sm:text-lg"
              onClick={() => duplicateQuestion(name)}
            >
              <FaCopy />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormContents
