import { useEffect, useState } from 'react'

import { showNotice } from '../api/notice'

const DetailAnnounce: React.FC = () => {
  const title = '여기는 프랍이 아닙니다.'
  const writer = '김태영'
  const date = '2월 22일'
  const bodyText = '야호!'

  const [detailData, setDetailData] = useState<string[]>([])

  const handleShowNotice = async () => {
    try {
      const response = await showNotice('1')
      setDetailData(response.result)
      console.log(response)
      console.log(detailData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleShowNotice()
  }, [])
  return (
    <div className="bg-rgb-35-39-49 h-full w-full min-h-screen">
      {/* 타이틀 부분 */}
      <div className="text-center pt-[150px]">
        <div className="text-white text-3xl">{detailData.title}</div>
        <hr className="w-[50%] mx-auto mt-[30px]" />
        <div className="text-white text-md mt-[10px] ml-[30%]">
          작성자:SMUMC 운영진 작성일시: {detailData.updatedAt}
        </div>
      </div>

      {/* 바디 부분 */}
      <div className="min-h-full flex flex-col items-center">
        {/* 공지사항 내용 부분 */}
        <div className="text-white mt-[40px] mx-[30%] w-[800px] rounded-lg border border-white p-4">
          {detailData.content}
        </div>
      </div>
    </div>
  )
}

export default DetailAnnounce
