import { ChangeEvent } from 'react'

export type IntroduceBoxProps = {
  title: string
  content: string
  nextLineContent?: string
  children: React.ReactNode
}

export type CountUpCardProps = {
  boxTitle: string
  numOfPeople: number
  lastUnit: string
}

export type PartIntroData = {
  tech: string
  text: string
}

export type NewsData = {
  id: number
  title: string
  description: string
  image: string
}
export type Project = {
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

export type Scroll = {
  x: number
  y: number
}

export type MemberCardProps = {
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
  studentId: number | undefined
  nickname: string
  email: string
  password: string
  major: string
  privacyPolicy: boolean
  sex: number
  github: string
}

export type InputProps = {
  id: string
  name: string
  type: string
  placeholder: string
  value?: string | number
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
}

export type AddAnnounce = {
  announcetitle: string
  body: string
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

export type FormTitleBoxProps = {
  field: FormContentItem
  editTitle: (fieldName: string, fieldTitle: string) => void
  editFieldType: (fieldName: string, newFieldType: string) => void
  deleteQuestion: (fieldName: string) => void
}

export type FormContentsProps = {
  field: FormContentItem
  editTitle: (fieldName: string, fieldTitle: string) => void
  editFieldType: (fieldName: string, newFieldType: string) => void
  deleteQuestion: (fieldName: string) => void
  addOption: (fieldName: string) => void
  handleRequire: (fieldName: string) => void
  duplicateQuestion: (fieldName: string) => void
  editLabel: (fieldName: string, fieldLabel: string) => void
}

export type FormHandlingHook = {
  isButton: boolean
  formContent: FormContentItem[]
  updateFormContent: (fieldName: string, update: (field: FormContentItem) => void) => void
  addQuestion: () => void
  duplicateQuestion: (fieldName: string) => void
  addOption: (fieldName: string) => void
  handleRequire: (fieldName: string) => void
  deleteQuestion: (fieldName: string) => void
  editTitle: (fieldName: string, fieldTitle: string) => void
  editLabel: (fieldName: string, fieldLabel: string) => void
  editFieldType: (fieldName: string, newFieldType: string) => void
  handleSubmit: () => Promise<void>
}

export type textboxprops = {
  title: string
  writer: string
  date: string
  bodyText: string
}

export type detailAnnounce = {
  title: string
  writer: string
  date: string
  bodyText: string
}
export type InfiniteCardProps = {
  id: number
  img: string
  year: number
  description: string
  name: string
  member: string[]
}
export type SidebarState = {
  isOpen: boolean
}
