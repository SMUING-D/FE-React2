import { useEffect, useState } from 'react'

import Join from '../components/login/Join'
import LoginBox from '../components/login/LoginBox'
import LoginNav from '../components/login/LoginNav'

const LoginPage = () => {
  const words: string[] = ['Front-End', 'Back-End', 'Plan', 'Design']
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0)
  const [loginShow, setLoginShow] = useState(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 1500)

    return () => clearInterval(intervalId)
  })

  const showLoginBox = () => {
    setLoginShow(true)
  }
  const showJoin = () => {
    setLoginShow(false)
  }

  return (
    <>
      <LoginNav title="SMUMC" />
      <div className="flex flex-wrap items-center min-h-screen bg-white justify-center gap-[150px] sm:bg-white md: pt-[100px]">
        <div className="text-blue-500 text-5xl sm:ml-10 sm:mt-0 mt-[100px]">
          smuing은 <br />
          smumc가 운영하며 <br />
          함께 할<br />
          {words.map((word, index) => (
            <span
              key={index}
              className={`transition-opacity duration-500 ${index === currentWordIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              {word}
              {index !== words.length - 1 && <br />}
            </span>
          ))}
          <br />
          <p className="mt-[10px]">크루를 찾고있습니다.</p>
          <br />
          <p className="text-sm">* smuing은 개발자들의 성장을 응원하는 비영리 단체입니다.</p>
        </div>

        <div>
          <div className="pb-[10px] sm: mb-[10px]">
            <button
              onClick={showLoginBox}
              className="border border-solid border-blue-500 bg-white hover:bg-blue-700 hover:text-white text-blue-500 font-bold py-2 px-4 rounded mr-2 transition-transform transform hover:scale-110"
            >
              로그인
            </button>
            <button
              onClick={showJoin}
              className="border border-solid border-blue-500 bg-white hover:bg-blue-700 hover:text-white text-blue-500 font-bold py-2 px-4 rounded transition-transform transform hover:scale-110"
            >
              회원가입
            </button>
          </div>
          <div className="pb-[20px]">{loginShow ? <LoginBox /> : <Join />}</div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
