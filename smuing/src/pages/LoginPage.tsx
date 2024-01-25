import { useEffect, useState } from 'react'

import Join from '../components/login/Join'
import LoginBox from '../components/login/LoginBox'

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
    <div className="flex flex-wrap">
      <div className="bg-black h-screen w-full sm:w-1/2 flex flex-wrap items-center">
        <div className="text-white text-5xl sm:ml-10">
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
        </div>
      </div>

      <div className="bg-black h-screen w-full sm:w-1/2 flex flex-wrap items-center">
        <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/2">
          <div className="pb-[10px]">
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
          <div>{loginShow ? <LoginBox /> : <Join />}</div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
