import { ChangeEvent } from 'react'

export const joinText: {
  title: string
  id: string
  name: string
  type: string
  placeholder: string
  value: string
  errorMessage: string
}[] = [
  {
    title: '이름',
    id: 'name',
    name: 'name',
    type: 'text',
    placeholder: '이름을 입력해주세요',
    value: 'name',
    errorMessage: '',
  },
  {
    title: '학번',
    id: 'studentId',
    name: 'studentId',
    type: 'text',
    placeholder: '학번을 입력해주세요',
    value: 'studentId',
    errorMessage: '',
  },
  {
    title: '닉네임',
    id: 'nickname',
    name: 'nickname',
    type: 'text',
    placeholder: '닉네임을 입력해주세요',
    value: 'nickname',
    errorMessage: '',
  },
  {
    title: '깃허브 주소',
    id: 'github',
    name: 'github',
    type: 'text',
    placeholder: '깃허브 주소를 입력해주세요',
    value: 'github',
    errorMessage: '',
  },
]

export const selectType: {
  title: string
  id: string
  name: string
  value: string
  type: string
}[] = [
  {
    title: '전공',
    id: 'major',
    name: 'major',
    value: 'major',
    type: 'major',
  },
  {
    title: '성별',
    id: 'sex',
    name: 'sex',
    value: 'sex',
    type: 'sex',
  },
]
