import { useEffect, useState } from 'react'

const useCountUp = (numOfPeople: number) => {
  const [displayNumber, setDisplayNumber] = useState<string>('')
  const [currentNumber, setCurrentNumber] = useState<number>(1)

  const updateCount = () => {
    setCurrentNumber((prevNumber) => (prevNumber < numOfPeople ? prevNumber + 1 : prevNumber))
  }

  useEffect(() => {
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
  }, [currentNumber, numOfPeople, updateCount])

  return displayNumber
}

export default useCountUp
