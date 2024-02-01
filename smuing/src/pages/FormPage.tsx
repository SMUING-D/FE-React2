import { useState } from 'react'

enum QuestionType {
  SHORT_ANSWER = 'short_answer',
  PARAGRAPH = 'paragraph',
  CHECKBOX = 'checkbox',
}

type FormContentItem = {
  id: number
  name: string
  label: string
  required: boolean
  question_type: QuestionType
  list: string[]
}

const FormPage: React.FC = () => {
  const [formContent, setFormContent] = useState<FormContentItem[]>([])
  const [onEdit, setOnEdit] = useState<boolean>(false)
  const [editedField, setEditedField] = useState('')

  const addQuestion = (): void => {
    const field: FormContentItem = {
      id: 0,
      name: `question_${formContent.length}`,
      label: '질문 내용',
      required: false,
      question_type: QuestionType.SHORT_ANSWER,
      list: [],
    }
    setFormContent([...formContent, field])
  }
  const editField = (fieldName: string, fieldLabel: string): void => {
    const formFields: FormContentItem[] = [...formContent]
    const fieldIndex: number = formFields.findIndex((field: FormContentItem) => field.name === fieldName)
    if (fieldIndex > -1) {
      formFields[fieldIndex].label = fieldLabel
      setFormContent(formFields)
    }
  }
  const editFieldType = (fieldName: string, newFieldType: QuestionType): void => {
    const formFields: FormContentItem[] = [...formContent]
    const fieldIndex: number = formFields.findIndex((field: FormContentItem) => field.name === fieldName)
    if (fieldIndex > -1) {
      formFields[fieldIndex].question_type = newFieldType
      setFormContent(formFields)
    }
  }

  return (
    <div className="h-screen px-4 pt-32 text-white bg-black">
      <div className="flex flex-col items-start justify-center w-full h-24 px-4 space-y-2 text-black bg-white border-t-4 border-indigo-800 rounded-md shadow-sm">
        <h1 className="text-3xl font-semibold">폼 생성</h1>
        <p className="capitalize text-gray-500/80">Form Description</p>
      </div>
      <div className="p-5 my-10 bg-white rounded-md">
        {formContent.map((field) => {
          return (
            <div key={field.name}>
              <div className="flex items-center justify-between">
                {onEdit && editedField === field.name ? (
                  <input
                    type="text"
                    value={field.label}
                    onChange={(e) => editField(field.name, e.target.value)}
                    onBlur={() => {
                      setOnEdit(false)
                      setEditedField('')
                    }}
                  />
                ) : (
                  <label
                    onClick={() => {
                      setOnEdit(true)
                      setEditedField(field.name)
                    }}
                  >
                    {field.label}
                  </label>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FormPage
