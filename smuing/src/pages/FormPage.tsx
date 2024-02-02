// FormPage.tsx
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

import FormBox from '../components/formBox/formBox'
import FormOption from '../components/formoption/formOption'
import { FormContentItem } from '../types/types'

const FormPage: React.FC = () => {
  const [isButton, setIsButton] = useState<boolean>(false)
  const [formContent, setFormContent] = useState<FormContentItem[]>([])

  const updateFormContent = (fieldName: string, updateFn: (field: FormContentItem) => void): void => {
    const formFields: FormContentItem[] = [...formContent]
    const fieldIndex: number = formFields.findIndex((field: FormContentItem) => field.name === fieldName)

    if (fieldIndex > -1) {
      updateFn(formFields[fieldIndex])
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

  const handleEssential = (fieldName: string): void => {
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
  console.log(formContent)

  return (
    <div className="flex flex-col items-center flex-1 gap-10 px-4 pt-32 bg-black">
      <div className="p-4 text-black bg-indigo-300 rounded-md">
        <h1 className="text-3xl font-semibold">폼 생성 페이지</h1>
      </div>
      <div className="flex flex-col items-center w-full gap-4 px-4 pt-10 bg-indigo-400 rounded-lg ">
        {formContent.map((field, index) => (
          <div key={index} className="flex w-full px-4 bg-white rounded-md">
            <div className="flex flex-col items-center w-full">
              <FormBox
                field={field}
                editTitle={editTitle}
                editFieldType={editFieldType}
                deleteQuestion={deleteQuestion}
              />

              {field.question_type === 'checkbox' && (
                <button
                  onClick={() => addOption(field.name)}
                  className="w-20 sm:w-[100px] p-2 mt-4 text-[10px] sm:text-lg rounded-lg bg-slate-400"
                >
                  체크박스 추가
                </button>
              )}
              {field.question_type === 'multipleChoice' && (
                <button
                  onClick={() => addOption(field.name)}
                  className="w-20 sm:w-[120px] p-2 mt-4 text-[10px] sm:text-lg rounded-lg bg-slate-400"
                >
                  선택지 추가
                </button>
              )}
              <FormOption field={field} editLabel={editLabel} />
              <div className="flex gap-5 mb-4">
                {field.required ? (
                  <button
                    className="sm:w-[100px] p-3 bg-red-500 rounded-md"
                    onClick={() => handleEssential(field.name)}
                  >
                    필수
                  </button>
                ) : (
                  <button
                    className="sm:w-[100px] p-3 bg-gray-500 rounded-md"
                    onClick={() => handleEssential(field.name)}
                  >
                    필수
                  </button>
                )}
                <button
                  className="sm:w-[100px] p-3 bg-orange-500 rounded-md sm:text-lg"
                  onClick={() => duplicateQuestion(field.name)}
                >
                  복사
                </button>
              </div>
            </div>
          </div>
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
