import { useEffect, useState } from 'react'

const useCountUp = (numOfPeople: number) => {
  const [displayNumber, setDisplayNumber] = useState<string>('')
  const [currentNumber, setCurrentNumber] = useState<number>(1)

  useEffect(() => {
    const updateCount = () => {
      setCurrentNumber((prevNumber) => (prevNumber < numOfPeople ? prevNumber + 1 : prevNumber))
    }
    const interval = setInterval(() => {
      updateCount()
      setDisplayNumber(`${currentNumber}`)
    }, 30)

    const timeout = setTimeout(() => {
      clearInterval(interval)
      setDisplayNumber(`${currentNumber}`)
    }, 2000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [currentNumber, numOfPeople])

  return displayNumber
}

export default useCountUp
