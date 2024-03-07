import axios from 'axios'
import { useState } from 'react'

import { FormHandlingHook } from '../types/types'
import { FormContentItem } from '../types/types'

const useFormHandling = (): FormHandlingHook => {
  const [isButton, setIsButton] = useState<boolean>(false)
  const [formContent, setFormContent] = useState<FormContentItem[]>([])

  const updateFormContent = (fieldName: string, update: (field: FormContentItem) => FormContentItem): void => {
    const formFields: FormContentItem[] = [...formContent]
    const fieldIndex: number = formFields.findIndex((field: FormContentItem) => field.name === fieldName)
    if (fieldIndex > -1) {
      const nextFormField = update(formFields[fieldIndex])
      formFields[fieldIndex] = nextFormField
      setFormContent(formFields)
    }
    // console.log(formFields[fieldIndex].list)
  }

  const addQuestion = (): void => {
    const field: FormContentItem = {
      id: 0,
      name: `question_${formContent.length}`,
      title: '',
      label: '',
      required: false,
      question_type: 'shortAnswer',
      list: [],
    }
    setFormContent([...formContent, field])
    setIsButton(true)
  }

  const duplicateQuestion = (fieldName: string): void => {
    const fieldToDuplicate = formContent.find((field) => field.name === fieldName)
    console.log(fieldToDuplicate)
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

  const addOption = (fieldName: string) => {
    updateFormContent(fieldName, (field) => {
      const newOption: string = ''
      return { ...field, list: [...field.list, newOption] }
    })
  }

  const editList = (fieldName: string, index: number, fieldList: string) => {
    updateFormContent(fieldName, (field) => {
      const updatedList = [...field.list]
      updatedList[index] = fieldList
      return { ...field, list: updatedList }
    })
  }

  const handleRequire = (fieldName: string) => {
    updateFormContent(fieldName, (field) => {
      return { ...field, required: !field.required }
    })
  }

  const deleteQuestion = (fieldName: string): void => {
    const newFormContent = formContent.filter((field) => field.name !== fieldName)
    setFormContent(newFormContent)
  }

  const editTitle = (fieldName: string, fieldTitle: string) => {
    updateFormContent(fieldName, (field) => {
      return { ...field, title: fieldTitle }
    })
  }

  const editLabel = (fieldName: string, fieldLabel: string) => {
    updateFormContent(fieldName, (field) => {
      return { ...field, label: fieldLabel, list: [] }
    })
  }

  const editFieldType = (fieldName: string, newFieldType: string) => {
    updateFormContent(fieldName, (field) => {
      return { ...field, question_type: newFieldType }
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
    editList,
    editFieldType,
    handleSubmit,
  }
}

export default useFormHandling
