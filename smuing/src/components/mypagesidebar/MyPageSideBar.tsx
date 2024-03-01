import { useDispatch, useSelector } from 'react-redux'

import { setIndex } from '../../redux/slices/myPageSlice'
import { RootState } from '../../redux/store/store'
import testImg from '/public/formSettingTest/PROFILE_TEST.jpg'

const MyPageSideBar: React.FC = () => {
  const dispatch = useDispatch()
  const selectedIndex = useSelector((state: RootState) => state.myPage.index)
  const SIDE_BAR_DATA = ['프로필', '사진', '나의 프로젝트', '계정 설정']

  const handleItemBackground = (index: number) => {
    dispatch(setIndex(index))
  }
  return (
    <div className=" w-[20%] h-full flex flex-col items-center justify-center font-semibold border-r-4 border-blue-100 text-white ">
      <img
        className="w-[30px] h-[30px] sm:w-[120px] sm:h-[120px] rounded-[50%]"
        src={testImg}
        alt="이건 테스트 이미지이다."
      />
      <div className="flex flex-col gap-3">
        <div className="text-[10px] cursor-pointer sm:text-xl">지환</div>
        {SIDE_BAR_DATA.map((data, index) => (
          <div
            key={index}
            onClick={() => handleItemBackground(index)}
            className={`text-[9px] sm:text-xl md:text-lg cursor-pointer rounded-lg p-2 ${selectedIndex === index && 'bg-slate-500'}`}
          >
            {data}
          </div>
        ))}
      </div>
    </div>
  )
}
export default MyPageSideBar
