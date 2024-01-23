import { useEffect, useState } from 'react'

const useCountUp = (numOfPeople: number) => {
  const [displayNumber, setDisplayNumber] = useState<string>('')
  const [currentNumber, setCurrentNumber] = useState<number>(1)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNumber((prevNumber) => (prevNumber < numOfPeople ? prevNumber + 1 : prevNumber))
      setDisplayNumber(`${currentNumber}`)
    }, 200)

    setTimeout(() => {
      clearInterval(interval)
      setDisplayNumber(`${currentNumber}`)
    }, 2000)
  }, [currentNumber, numOfPeople])
  return displayNumber
}

export default useCountUp
