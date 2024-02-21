import { useEffect, useState } from 'react'

import { Scroll } from '../types/types'

const useScroll = (): Scroll => {
  // 커스텀 훅은 리액트 컴포넌트 타입이 아니라 함수 타입으로 빠진다
  const [state, setState] = useState<Scroll>({ x: 0, y: 0 })

  const onScroll = () => {
    setState({ y: window.scrollY, x: window.scrollX })
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return state
}

export default useScroll
