import { useEffect, useState } from 'react'

import api from '../api'

const useGetData = (url: string) => {
  const [isData, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getData = async () => {
    try {
      setIsLoading(true)
      const response = await api.get(url)
      console.log(url)
      setData(response.data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
      throw error
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return { isData, isLoading }
}

export default useGetData
