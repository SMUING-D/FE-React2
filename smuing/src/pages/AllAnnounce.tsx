import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { infinityScrollNotice } from '../api/notice'
import TextBox from '../components/announce/TextBox'
import { textData } from '../constants/ANNOUNCE_DATA'

const AllAnnounce = () => {
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [noticeData, setNoticeData] = useState<string[]>([])

  const infinityLoading = async () => {
    try {
      setLoading(true)
      const response = await infinityScrollNotice(page, 7)

      if (response.data.code == '2000') {
        const data = response.data.result
        if (page == 0) {
          setNoticeData(data)
        } else {
          setNoticeData((prevData) => [...prevData, ...data])
        }
        console.log(data)
      } else {
        console.log('인피니티 에러', response)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    infinityLoading()
  }, [page])

  useEffect(() => {
    const handleScroll = () => {
      if (!loading) {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
          if (noticeData.length > 0 && !loading) {
            setPage((prevPage) => prevPage + 1)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [noticeData, loading])

  return (
    <div className="bg-rgb-35-39-49 h-full w-full min-h-screen">
      {/* 타이틀 부분 */}
      <div className="text-center pt-[150px]">
        <div className="text-white text-3xl">SMUMC 공지사항</div>
        <hr className="w-[50%] mx-auto mt-[30px]" />
      </div>

      {/* 바디 부분 */}
      <div className="flex flex-col items-center mt-[50px]">
        {noticeData.map((notice, index) => (
          <Link key={index} to={`/notices/1`} className="no-underline">
            <TextBox
              key={index}
              title={notice.title}
              writer="SMUMC 운영진"
              date={notice.createdAt}
              bodyText={notice.content}
              imgUrl={notice.img}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AllAnnounce
