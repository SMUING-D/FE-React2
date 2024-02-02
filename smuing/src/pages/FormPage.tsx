import { useState } from 'react'
import { FaPlus, FaRegCopy } from 'react-icons/fa'
import { IoCloseSharp } from 'react-icons/io5'

import CheckBox from '../components/checkbox/checkBox'

type FormContentItem = {
  id: number
  name: string
  title: string
  label: string
  required: boolean
  question_type: string
  list: string[]
}

const FormPage: React.FC = () => {
  const [isButton, setIsButton] = useState<boolean>(false)
  const [formContent, setFormContent] = useState<FormContentItem[]>([])

  const addQuestion = (): void => {
    const field: FormContentItem = {
      id: 0,
      name: `question_${formContent.length}`,
      title: '제목을 입력해주세요',
      label: '내용을 입력해주세요',
      required: false,
      question_type: 'short_answer',
      list: [],
    }
    setFormContent([...formContent, field])
    setIsButton(true)
  }

  const addCheckBox = (fieldName: string): void => {
    const formFields: FormContentItem[] = [...formContent]
    const fieldIndex: number = formFields.findIndex((field: FormContentItem) => field.name === fieldName)

    if (fieldIndex > -1) {
      const newCheckBox: string = '' // 어떤 기본값으로 초기화해도 좋습니다
      formFields[fieldIndex].list.push(newCheckBox)
      setFormContent(formFields)
    }
  }

  const deleteQuestion = (fieldName: string): void => {
    const newFormContent = formContent.filter((field) => field.name !== fieldName)
    setFormContent(newFormContent)
  }

  const editTitle = (fieldName: string, fieldTitle: string): void => {
    const formFields: FormContentItem[] = [...formContent]
    const fieldIndex: number = formFields.findIndex((field: FormContentItem) => field.name === fieldName)
    if (fieldIndex > -1) {
      formFields[fieldIndex].title = fieldTitle
      setFormContent(formFields)
    }
  }
  const editFieldType = (fieldName: string, newFieldType: string): void => {
    const formFields: FormContentItem[] = [...formContent]
    const fieldIndex: number = formFields.findIndex((field: FormContentItem) => field.name === fieldName)
    if (fieldIndex > -1) {
      formFields[fieldIndex].question_type = newFieldType
      setFormContent(formFields)
    }
  }

  return (
    <div className="flex flex-col items-center flex-1 gap-10 px-4 pt-32 bg-black">
      <div className="p-4 text-black bg-indigo-300 rounded-md ">
        <h1 className="text-3xl font-semibold">폼 생성 페이지</h1>
      </div>
      <div className="flex flex-col items-center w-full gap-4 px-4 pt-10 bg-indigo-400 rounded-lg ">
        {formContent.map((field, index) => {
          return (
            <div key={index} className="flex w-full px-4 bg-white rounded-md">
              <div className="flex flex-col items-center w-full">
                <div className="flex justify-between p-5">
                  <input
                    className="w-4/5 placeholder-black"
                    type="text"
                    placeholder={field.title}
                    onChange={(e) => editTitle(field.name, e.target.value)}
                  />
                  <div className="flex gap-1 ">
                    <select onChange={(e) => editFieldType(field.name, e.target.value)}>
                      <option value="short_answer">짧은 질문</option>
                      <option value="paragraph">긴 질문</option>
                      <option value="checkbox">체크 박스</option>
                    </select>
                    <button onClick={() => deleteQuestion(field.name)}>
                      <IoCloseSharp size={20} className="text-red-500 hover:text-red-900" />
                    </button>
                  </div>
                </div>
                {field.question_type == 'checkbox' && (
                  <button onClick={() => addCheckBox(field.name)} className="w-20 rounded-lg bg-slate-400">
                    체크박스 추가
                  </button>
                )}
                <div className="w-full mt-8 mb-10 text-black">
                  {field.question_type == 'short_answer' && (
                    <input type="text" className="block w-full h-10 px-5 rounded-md " placeholder={field.label} />
                  )}
                  {field.question_type == 'paragraph' && (
                    <textarea rows={4} className="block w-full h-10 px-5 rounded-md " placeholder={field.label} />
                  )}
                  {field.question_type == 'checkbox' && (
                    <div className="flex flex-col">
                      {field.list.map((checkBox, index) => (
                        <div key={index} className="flex">
                          <input type="checkbox" />
                          <input type="text" className="block w-full h-10 px-5 rounded-md" placeholder={field.label} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
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
        <button onClick={() => addQuestion()}>
          <FaRegCopy className="w-8 h-8 text-gray-400 hover:text-indigo-500" />
        </button>
        <button onClick={() => addQuestion()}>
          <FaPlus className="w-8 h-8 text-gray-400 hover:text-indigo-500" />
        </button>
      </div>
    </div>
  )
}

export default FormPage
