import { useState } from 'react'
import { FaPlus, FaRegCopy } from 'react-icons/fa'
import { IoCloseSharp } from 'react-icons/io5'

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
  const [isRequired, setIsRequired] = useState<boolean>(false)

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

  const addOption = (fieldName: string): void => {
    const formFields: FormContentItem[] = [...formContent]
    const fieldIndex: number = formFields.findIndex((field: FormContentItem) => field.name === fieldName)

    if (fieldIndex > -1) {
      const newOption: string = ''
      formFields[fieldIndex].list.push(newOption)
      setFormContent(formFields)
    }
  }
  const handleEssential = (fieldName: string): void => {
    const formFields: FormContentItem[] = [...formContent]
    const fieldIndex: number = formFields.findIndex((field: FormContentItem) => field.name === fieldName)

    if (fieldIndex > -1) {
      formFields[fieldIndex].required = !formFields[fieldIndex].required
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

  const editLabel = (fieldName: string, fieldLabel: string): void => {
    const formFields: FormContentItem[] = [...formContent]
    const fieldIndex: number = formFields.findIndex((field: FormContentItem) => field.name === fieldName)
    if (fieldIndex > -1) {
      formFields[fieldIndex].label = fieldLabel
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

  console.log(formContent)

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
                <div className="flex justify-between w-full pt-5">
                  <input
                    className="w-full placeholder-black"
                    type="text"
                    placeholder={field.title}
                    onChange={(e) => editTitle(field.name, e.target.value)}
                  />
                  <div className="flex">
                    <select onChange={(e) => editFieldType(field.name, e.target.value)}>
                      <option value="shortAnswer">짧은 질문</option>
                      <option value="paragraph">긴 질문</option>
                      <option value="multipleChoice">객관식 질문</option>
                      <option value="checkbox">체크박스</option>
                    </select>
                    <button onClick={() => deleteQuestion(field.name)}>
                      <IoCloseSharp size={20} className="text-red-500 hover:text-red-900" />
                    </button>
                  </div>
                </div>
                {field.question_type == 'checkbox' && (
                  <button
                    onClick={() => addOption(field.name)}
                    className="w-20 sm:w-[100px] p-2 mt-4 text-[10px] sm:text-lg rounded-lg bg-slate-400"
                  >
                    체크박스 추가
                  </button>
                )}
                {field.question_type == 'multipleChoice' && (
                  <button
                    onClick={() => addOption(field.name)}
                    className="w-20 sm:w-[120px] p-2 mt-4 text-[10px] sm:text-lg rounded-lg bg-slate-400"
                  >
                    선택지 추가
                  </button>
                )}
                <div className="w-full mt-8 mb-10 text-black">
                  {field.question_type == 'shortAnswer' && (
                    <input
                      onChange={(e) => editLabel(field.name, e.target.value)}
                      type="text"
                      className="block w-full h-10 px-5 rounded-md "
                      placeholder={field.label}
                    />
                  )}
                  {field.question_type == 'paragraph' && (
                    <textarea
                      onChange={(e) => editLabel(field.name, e.target.value)}
                      rows={4}
                      className="block w-full h-10 px-5 rounded-md "
                      placeholder={field.label}
                    />
                  )}
                  {field.question_type == 'checkbox' && (
                    <div className="flex flex-col">
                      {field.list.map((checkBox, index) => (
                        <div key={index} className="flex p-3">
                          <input type="checkbox" />
                          <input
                            onChange={(e) => editLabel(field.name, e.target.value)}
                            type="text"
                            className="block w-full h-10 px-5 rounded-md"
                            placeholder={field.label}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  {field.question_type == 'multipleChoice' && (
                    <div className="flex flex-col">
                      {field.list.map((option, index) => (
                        <div key={index} className="flex p-3">
                          <input type="radio" name="option" />
                          <input
                            onChange={(e) => editLabel(field.name, e.target.value)}
                            type="text"
                            className="block w-full h-10 px-5 rounded-md"
                            placeholder={field.label}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {field.required ? (
                  <button className="p-3 mb-3 bg-red-500 rounded-md" onClick={() => handleEssential(field.name)}>
                    필수
                  </button>
                ) : (
                  <button className="p-3 mb-3 bg-gray-500 rounded-md" onClick={() => handleEssential(field.name)}>
                    필수
                  </button>
                )}
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
      </div>
    </div>
  )
}

export default FormPage
