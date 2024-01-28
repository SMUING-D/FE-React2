import { useEffect, useState } from 'react'

import Join from '../components/login/Join'
import LoginBox from '../components/login/LoginBox'
import LoginNav from '../components/login/LoginNav'

const LoginPage = () => {
  const words: string[] = ['smumc', 'likelion', 'sk lookie', '이니로']
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
      <div className="flex flex-wrap items-center min-h-screen bg-black justify-center gap-[150px] sm:bg-black">
        <div className="text-white text-5xl sm:ml-10 sm:mt-0 mt-[100px]">
          smuing은 <br />
          smumc가 운영하며 <br />
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
          <p className="mt-[10px]">와 함께합니다.</p>
          <br />
          <p className="text-sm">* smuing은 개발자들의 성장을 응원하는 비영리 단체입니다.</p>
        </div>

        <div>
          <div className="pb-[10px] sm: mt-[70px]">
            <button
              onClick={showLoginBox}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 transition-transform transform hover:scale-110"
            >
              로그인
            </button>
            <button
              onClick={showJoin}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-110"
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
