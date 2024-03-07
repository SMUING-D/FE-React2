import { useSelector } from 'react-redux'

import useOnUpload from '../../hooks/useOnUpload'
import { RootState } from '../../redux/store/store'
import MyPageInput from '../mypageinput/MyPageInput'

const MyPageContents: React.FC = () => {
  const selectedIndex = useSelector((state: RootState) => state.myPage.index)
  const { imageSrc, onUpload } = useOnUpload()

  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center h-full ">
        {selectedIndex === 0 && (
          <div className="flex flex-col items-center w-4/5 h-full gap-8">
            <div className="flex flex-col items-center justify-center gap-3 mt-5 text-white">
              <h1 className="font-bold text-[18px]">프로필</h1>
              <p className="text-[13px]">프로필 정보를 추가하거나 수정해보세요!</p>
            </div>
            <MyPageInput label="이름" placeholder="이름을 입력해주세요" />
            <MyPageInput label="소개" placeholder="소개를 입력해주세요" />
            <button
              type="submit"
              className="flex justify-center items-center w-[100px] sm:w-[150px] text-sm sm:text-lg mb-6 p-3 rounded-lg text-white bg-blue-500 hover:bg-blue-400 hover:scale-110"
            >
              저장
            </button>
          </div>
        )}
        {selectedIndex === 1 && (
          <div className="w-4/5 h-full">
            <div className="flex flex-col items-center justify-center gap-3 mt-5 text-white">
              <h1 className="font-bold text-[18px]">사진</h1>
              <p className="text-[13px]">사진을 추가하거나 수정해보세요!</p>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col items-start mt-5">
                <p className="py-2 font-bold text-white">이미지 미리보기</p>
              </div>
              <div className="w-[170px] h-[170px]">
                {imageSrc && <img className="w-[170px] h-[170px] rounded-[50%]" src={imageSrc} />}
              </div>
              <input className="hidden" id="Img" type="file" accept="image/*" onChange={(event) => onUpload(event)} />
              {typeof imageSrc === 'string' ? (
                <button
                  type="submit"
                  className="px-4 py-2 mt-5 text-center text-white bg-blue-500 rounded cursor-pointer hover:bg-blue-400 "
                >
                  저장
                </button>
              ) : (
                <label
                  className="px-4 py-2 mt-5 text-center text-gray-800 bg-gray-200 rounded cursor-pointer hover:bg-gray-400"
                  htmlFor="Img"
                >
                  이미지 업로드
                </label>
              )}
            </div>
          </div>
        )}
        {selectedIndex === 3 && <div></div>}
      </div>
    </div>
  )
}
export default MyPageContents