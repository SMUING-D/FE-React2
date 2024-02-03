import TextBox from '../components/announce/TextBox'

const AllAnnounce = () => {
  return (
    <div className="bg-rgb-35-39-49 h-full w-full min-h-screen">
      {/* 타이틀 부분 */}
      <div className="text-center pt-[150px]">
        <div className="text-white text-3xl">SMUMC 공지사항</div>
        <hr className="w-[50%] mx-auto mt-[30px]" />
      </div>

      {/* 바디 부분 */}
      <div className="flex flex-col items-center mt-[50px]">
        <TextBox />
        <TextBox />
        <TextBox />
      </div>
    </div>
  )
}

export default AllAnnounce
