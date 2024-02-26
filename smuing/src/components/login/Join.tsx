import React, { ChangeEvent, FormEvent, useState } from 'react'

import { postEmail } from '../../api/email'
import { postJoin } from '../../api/join'
import { joinText } from '../../constants/JOIN'
import { selectType } from '../../constants/JOIN'
import { FormData } from '../../types/types'
import Input from '../input/Input'

const Join: React.FC = () => {
  const [emailValid, setEmailValid] = useState(false)
  const [verificationCode, setVerificationCode] = useState('')
  const [formData, setFormData] = useState<FormData>({
    name: '',
    studentId: undefined,
    nickname: '',
    email: '',
    password: '',
    major: '',
    privacyPolicy: false,
    sex: 0,
    github: '',
  })

  const majors = [
    { id: 0, name: '전공을 선택해주세요' },
    { id: 1, name: '컴퓨터과학과' },
    { id: 2, name: '휴먼지능정보공학전공' },
    { id: 3, name: '경제금융학부' },
    { id: 4, name: '역사콘텐츠전공' },
    { id: 5, name: '지적재산권전공' },
    { id: 6, name: '문헌정보학전공' },
    { id: 7, name: '공간환경학부' },
    { id: 8, name: '행정학부' },
    { id: 9, name: '가족복지학과' },
    { id: 10, name: '국가안보학과' },
    { id: 11, name: '국어교육과' },
    { id: 12, name: '영어교육과' },
    { id: 13, name: '교육학과' },
    { id: 14, name: '수학교육과' },
    { id: 15, name: '경영학부' },
    { id: 16, name: '글로벌경영학과' },
    { id: 17, name: '융합경영학과' },
    { id: 18, name: '핀테크·빅데이터융합·스마트생산 전공' },
    { id: 19, name: '전기공학전공' },
    { id: 20, name: '지능IOT융합전공' },
    { id: 21, name: '게임전공' },
    { id: 22, name: '애니메이션전공' },
    { id: 23, name: '한일문화콘텐츠전공' },
    { id: 24, name: '생명공학전공' },
    { id: 25, name: '화학에너지공학전공' },
    { id: 26, name: '화공신소재전공' },
    { id: 27, name: '식품영양학전공' },
    { id: 28, name: '의류학전공' },
    { id: 29, name: '스포츠건강관리전공' },
    { id: 30, name: '무용예술전공' },
    { id: 31, name: '조형예술전공' },
    { id: 32, name: '생활예술전공' },
    { id: 33, name: '음악학부' },
  ]

  const sex = [
    { id: 0, name: '성별을 선택해주세요' },
    { id: 1, name: '남자' },
    { id: 2, name: '여자' },
  ]

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : false
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }))
    console.log(formData)

    switch (name) {
      case 'email':
        setEmailValid(validEmail(value))
        break
      default:
        break
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (emailValid) {
      console.log('폼:', formData)
      const response = postJoin(
        formData.studentId,
        formData.name,
        formData.password,
        formData.email,
        formData.nickname,
        formData.major,
        formData.github,
        formData.sex - 1,
      )
      console.log(response)
    } else {
      console.log('이메일 에러')
    }
  }

  //   이메일 유효성 검사
  const validEmail = (email: string) => {
    const emailRegex = /\S+@sangmyung\.co\.kr$/
    return emailRegex.test(email)
  }

  //이메일 인증코드 요청 보내기
  const handleEmailSubmit = () => {
    console.log('formdata.email 이메일 인증 api로 보내기')
    const response = postEmail(formData.studentId)
    console.log(response)
  }

  //인증번호 상태변경
  const handleVerificationCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(e.target.value)
  }

  const handleVerificationSubmit = async () => {
    // try {

    // }
    // catch(error){

    // }
    console.log('formdata.email, verificationCode 인증요청 보내기')
    //200뜨면 상태값 하나 변경해서 마지막 회원가입 버튼에 활성화 조건 추가하기
  }

  return (
    <div className="border border-solid border-blue-500 rounded-[20px] p-4 w-[400px]">
      <div className="p-8">
        <h2 className="mb-4 text-2xl font-semibold">회원가입</h2>
        <form onSubmit={handleSubmit}>
          {joinText.map((join, index) => (
            <div key={index} className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-600">{join.title}</label>
              <Input
                id={join.id}
                name={join.name}
                type={join.type}
                placeholder={join.placeholder}
                value={formData[join.value]}
                onChange={handleChange}
                isValid={true}
                errorMessage={join.errorMessage}
              />
            </div>
          ))}

          {/* 이메일 작성 및 인증 */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">이메일</label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="학교 이메일을 입력하세요"
              value={formData.email}
              onChange={handleChange}
              isValid={emailValid}
              errorMessage="올바른 학교 이메일 형식이 아닙니다"
            />
          </div>
          {emailValid && (
            <>
              <button
                type="button"
                onClick={handleEmailSubmit}
                className="w-full py-2 text-blue-500 bg-white border border-blue-500 border-solid rounded-md hover:bg-blue-700 hover:text-white focus:outline-none"
              >
                이메일 인증하기
              </button>
              <div className="mt-2 mb-4">
                <label htmlFor="verificationCode" className="block mb-2 text-sm font-medium text-gray-600">
                  인증번호
                </label>
                <Input
                  id="verificationCode"
                  name="verificationCode"
                  type="text"
                  placeholder="인증번호를 입력하세요"
                  value={verificationCode}
                  onChange={handleVerificationCodeChange}
                  isValid={true}
                  errorMessage="인증번호를 입력하세요"
                />
              </div>
              <button
                type="button"
                onClick={handleVerificationSubmit}
                className="w-full py-2 text-blue-500 bg-white border border-blue-500 border-solid rounded-md hover:bg-blue-500 hover:text-white focus:outline-none"
              >
                인증번호 확인
              </button>
            </>
          )}

          {/* 비밀번호 */}
          <div className="mt-2 mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">비밀번호</label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={formData.password}
              onChange={handleChange}
              isValid={true}
              errorMessage="비밀번호를 입력하세요"
            />
          </div>

          {/* 전공 및 성별 선택 */}
          {selectType.map((select, index) => (
            <div className="mb-4" key={index}>
              <label className="block mb-2 text-sm font-medium text-gray-600">{select.title}</label>
              <select
                id={select.id}
                name={select.name}
                value={formData[select.value]}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              >
                {select.type === 'major'
                  ? majors.map((item) => (
                      <option key={item.id} value={item.name}>
                        {item.name}
                      </option>
                    ))
                  : select.type === 'sex'
                    ? sex.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))
                    : null}
              </select>
            </div>
          ))}

          {/* 동의항목 */}
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                id="privacyPolicy"
                name="privacyPolicy"
                checked={formData.privacyPolicy}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-sm font-medium text-gray-600">개인정보 처리방침에 동의합니다.</span>
            </label>
          </div>
          <button
            type="submit"
            disabled={!formData.privacyPolicy}
            className={`w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none ${
              !formData.privacyPolicy ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  )
}

export default Join
