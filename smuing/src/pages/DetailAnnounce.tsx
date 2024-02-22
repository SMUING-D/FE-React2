const DetailAnnounce: React.FC = () => {
  const title = '여기는 프랍이 아닙니다.'
  const writer = '김태영'
  const date = '2월 22일'
  const bodyText = '야호!'
  return (
    <div className="bg-rgb-35-39-49 h-full w-full min-h-screen">
      {/* 타이틀 부분 */}
      <div className="text-center pt-[150px]">
        <div className="text-white text-3xl">{title}</div>
        <hr className="w-[50%] mx-auto mt-[30px]" />
        <div className="text-white text-md mt-[10px] ml-[30%]">
          작성자: {writer} 작성일시: {date}
        </div>
      </div>

      {/* 바디 부분 */}
      <div className="min-h-full flex flex-col items-center">
        {/* 공지사항 내용 부분 */}
        <div className="text-white mt-[40px] mx-[30%] w-[800px] rounded-lg border border-white p-4">{bodyText}</div>
      </div>
    </div>
  )
}

export default DetailAnnounce
