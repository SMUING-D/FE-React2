import { Link } from 'react-router-dom'

import TextBox from '../components/announce/TextBox'
import { textData } from '../constants/ANNOUNCE_DATA'

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
        {textData.map((text, index) => (
          <Link key={index} to={`announce/1`} className="no-underline">
            <TextBox key={index} title={text.title} writer={text.writer} date={text.date} bodyText={text.bodyText} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AllAnnounce
