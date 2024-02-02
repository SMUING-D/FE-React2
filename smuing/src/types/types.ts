import { ChangeEvent } from 'react'

export type introduceBoxProps = {
  title: string
  content: string
  nextLineContent?: string
  children: React.ReactNode
}

export type countUpCardProps = {
  boxTitle: string
  numOfPeople: number
  lastUnit: string
}

export type partIntroData = {
  tech: string
  text: string
}

export type newsData = {
  id: number
  title: string
  description: string
  image: string
}
export type project = {
  id: number
  name: string
  description: string
  theme: string[]
  github: string | null
  year: number
  member: string[]
  stack: string[]
  img: string
  release: string | null
}

export type scroll = {
  x: number
  y: number
}

export type memberCardProps = {
  name: string
  year: number
  sex: string
  part: string
  position: string
  onClick?: () => void
}

export type Member = {
  id: number
  year: number
  nickname: string
  name: string
  part: string
  position: string
  github: string | null
  sex: 'm' | 'w'
  project: string | null
  skill: string[]
}

export type FormData = {
  name: string
  studentId: string
  nickname: string
  email: string
  password: string
  major: number
  privacyPolicy: boolean
  sex: string
  github: string
}

export type InputProps = {
  id: string
  name: string
  type: string
  placeholder: string
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  isValid?: boolean
  errorMessage: string
}

export type ProjectFormData = {
  title: string
}

export type NavTitle = {
  title: string
}

export type TextAreaProps = {
  value: string
  onChange: (text: string) => void
  placeholder?: string
  maxChars?: number | string
  width?: number | string
  height?: number | string
  textTitle?: string
}

export type AddProject = {
  people: string[]
  projectTitle: string
  projectTechStack: string
  projectContent: string
  githubUrl: string
}

export type FormContentItem = {
  id: number
  name: string
  title: string
  label: string
  required: boolean
  question_type: string
  list: string[]
}

export type FormOptionProps = {
  field: FormContentItem
  editLabel: (fieldName: string, fieldLabel: string) => void
}

export type FormBoxProps = {
  field: FormContentItem
  editTitle: (fieldName: string, fieldTitle: string) => void
  editFieldType: (fieldName: string, newFieldType: string) => void
  deleteQuestion: (fieldName: string) => void
}
