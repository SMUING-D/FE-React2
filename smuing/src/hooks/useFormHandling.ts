import { useRef, useState } from 'react'

import { FormHandlingHook } from '../types/types'
import { FormContentItem } from '../types/types'

export const useFormHandling = (): FormHandlingHook => {
  const [isButton, setIsButton] = useState<boolean>(false)
  const formContentRef = useRef<FormContentItem[]>([])

  const updateFormContent = (fieldName: string, update: (field: FormContentItem) => void): void => {
    const formFields: FormContentItem[] = [...formContentRef.current]
    const fieldIndex: number = formFields.findIndex((field: FormContentItem) => field.name === fieldName)
    if (fieldIndex > -1) {
      update(formFields[fieldIndex])
      formContentRef.current = formFields
    }
    console.log(formFields[fieldIndex])
  }

  const addQuestion = (): void => {
    const field: FormContentItem = {
      id: 0,
      name: `question_${formContentRef.current.length}`,
      title: '제목을 입력해주세요',
      label: '내용을 입력해주세요',
      required: false,
      question_type: 'shortAnswer',
      list: [],
    }
    formContentRef.current = [...formContentRef.current, field]
    setIsButton(true)
  }

  const duplicateQuestion = (fieldName: string): void => {
    const fieldToDuplicate = formContentRef.current.find((field) => field.name === fieldName)

    if (fieldToDuplicate) {
      const duplicatedField: FormContentItem = {
        ...fieldToDuplicate,
        id: formContentRef.current.length,
        name: `question_${formContentRef.current.length}`,
      }

      formContentRef.current = [...formContentRef.current, duplicatedField]
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
    const newFormContent = formContentRef.current.filter((field) => field.name !== fieldName)
    formContentRef.current = newFormContent
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
    const submitData = formContentRef.current

    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      })
      if (response.ok) {
        formContentRef.current = []
        console.log('제출 성공적으로 됐다.')
      }
    } catch (error) {
      console.error('에러 발생', error)
    }
  }

  return {
    isButton,
    formContent: formContentRef.current,
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
