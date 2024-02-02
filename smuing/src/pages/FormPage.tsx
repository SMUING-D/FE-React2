import { FaPlus } from 'react-icons/fa'

import FormContents from '../components/formcontents/FormContents'
import { useFormHandling } from '../hooks/useFormHandling'

// 이미지 삽입 기능
// 체크박스랑 객관식 질문 항목들 상태 관리
// 모바일 화면 옵션 태그들 위치

const FormPage: React.FC = () => {
  const {
    isButton,
    formContent,
    addQuestion,
    duplicateQuestion,
    addOption,
    handleRequire,
    deleteQuestion,
    editTitle,
    editLabel,
    editFieldType,
    handleSubmit,
  } = useFormHandling()

  return (
    <div className="flex flex-col items-center flex-1 gap-10 px-4 pt-32 bg-black">
      <div className="p-4 text-black bg-indigo-300 rounded-md">
        <h1 className="text-3xl font-semibold">폼 생성 페이지</h1>
      </div>
      <div className="flex flex-col items-center w-full gap-4 px-4 pt-10 bg-indigo-400 rounded-lg ">
        {formContent.map((field, index) => (
          <FormContents
            key={index}
            field={field}
            editTitle={editTitle}
            editFieldType={editFieldType}
            deleteQuestion={deleteQuestion}
            addOption={() => addOption(field.name)}
            handleRequire={() => handleRequire(field.name)}
            duplicateQuestion={() => duplicateQuestion(field.name)}
            editLabel={(fieldLabel: string) => editLabel(field.name, fieldLabel)}
          />
        ))}
        {isButton ? (
          <button
            onClick={() => handleSubmit()}
            type="submit"
            className="flex justify-center items-center w-[100px] sm:w-[200px] text-sm sm:text-lg mb-6 p-3 rounded-lg bg-yellow-400"
          >
            제출하기
          </button>
        ) : (
          ''
        )}
      </div>
      <div className="fixed flex flex-col items-center bg-white rounded-md right-5 sm:right-20">
        <button onClick={() => addQuestion()}>
          <FaPlus className="w-8 h-8 text-gray-700 hover:text-indigo-500" />
        </button>
      </div>
    </div>
  )
}

export default FormPage
