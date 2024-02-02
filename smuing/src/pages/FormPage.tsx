import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

import FormContents from '../components/formcontents/FormContents'
import { FormContentItem } from '../types/types'

// 이미지 삽입 기능
// 체크박스랑 객관식 질문 항목들 상태 관리
// 모바일 화면 옵션 위치, 제출 기능 구현

const FormPage: React.FC = () => {
  const [isButton, setIsButton] = useState<boolean>(false)
  const [formContent, setFormContent] = useState<FormContentItem[]>([])

  const updateFormContent = (fieldName: string, update: (field: FormContentItem) => void): void => {
    const formFields: FormContentItem[] = [...formContent]
    const fieldIndex: number = formFields.findIndex((field: FormContentItem) => field.name === fieldName)
    console.log(formContent[fieldIndex])

    if (fieldIndex > -1) {
      update(formFields[fieldIndex])
      setFormContent(formFields)
    }
  }

  const addQuestion = (): void => {
    const field: FormContentItem = {
      id: 0,
      name: `question_${formContent.length}`,
      title: '제목을 입력해주세요',
      label: '내용을 입력해주세요',
      required: false,
      question_type: 'shortAnswer',
      list: [],
    }
    setFormContent([...formContent, field])
    setIsButton(true)
  }
  const duplicateQuestion = (fieldName: string): void => {
    const fieldToDuplicate = formContent.find((field) => field.name === fieldName)

    if (fieldToDuplicate) {
      const duplicatedField: FormContentItem = {
        ...fieldToDuplicate,
        id: formContent.length,
        name: `question_${formContent.length}`,
      }

      setFormContent([...formContent, duplicatedField])
      setIsButton(true)
    }
  }
  const addOption = (fieldName: string): void => {
    updateFormContent(fieldName, (field) => {
      const newOption: string = ''
      field.list.push(newOption)
    })
  }

  const handleRequire = (fieldName: string): void => {
    updateFormContent(fieldName, (field) => {
      field.required = !field.required
    })
  }

  const deleteQuestion = (fieldName: string): void => {
    const newFormContent = formContent.filter((field) => field.name !== fieldName)
    setFormContent(newFormContent)
  }

  const editTitle = (fieldName: string, fieldTitle: string): void => {
    updateFormContent(fieldName, (field) => {
      field.title = fieldTitle
    })
  }

  const editLabel = (fieldName: string, fieldLabel: string): void => {
    updateFormContent(fieldName, (field) => {
      field.label = fieldLabel
    })
  }

  const editFieldType = (fieldName: string, newFieldType: string): void => {
    updateFormContent(fieldName, (field) => {
      field.question_type = newFieldType
    })
  }

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
          <button className="flex justify-center items-center w-[100px] sm:w-[200px] text-sm sm:text-lg mb-6 p-3 rounded-lg bg-yellow-400">
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
