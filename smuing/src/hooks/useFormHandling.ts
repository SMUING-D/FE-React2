import axios from 'axios'
import { useState } from 'react'

import { FormHandlingHook } from '../types/types'
import { FormContentItem } from '../types/types'

export const useFormHandling = (): FormHandlingHook => {
  const [isButton, setIsButton] = useState<boolean>(false)
  const [formContent, setFormContent] = useState<FormContentItem[]>([])
  const updateFormContent = (fieldName: string, update: (field: FormContentItem) => void): void => {
    const formFields: FormContentItem[] = [...formContent]
    const fieldIndex: number = formFields.findIndex((field: FormContentItem) => field.name === fieldName)
    if (fieldIndex > -1) {
      update(formFields[fieldIndex])
      setFormContent(formFields)
    }
    console.log(formFields[fieldIndex])
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

  const handleSubmit = async (): Promise<void> => {
    const submitData = formContent

    console.log('제출 data:', submitData)
    try {
      const response = await axios.post('/api/submitForm', submitData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.status === 200) {
        setFormContent([])
        console.log('제출 성공적으로 됐다.')
      }
    } catch (error) {
      console.error('에러 발생', error)
    }
  }

  return {
    isButton,
    formContent,
    updateFormContent,
    addQuestion,
    duplicateQuestion,
    addOption,
    handleRequire,
    deleteQuestion,
    editTitle,
    editLabel,
    editFieldType,
    handleSubmit,
  }
}
