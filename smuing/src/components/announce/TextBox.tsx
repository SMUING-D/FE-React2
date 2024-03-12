import { textboxprops } from '../../types/types'
import { TruncatedText } from './TruncatedText'

const TextBox: React.FC<textboxprops> = ({ title, writer, date, bodyText, imgUrl }) => {
  const maxLength = 100

  console.log(imgUrl)
  return (
    <div className="border border-solid border-black rounded-[20px] w-[1000px] h-[150px] bg-white px-[50px] pt-[15px] pb-[20px] mt-[20px]">
      <div className="flex items-center justify-between gap-[20px] pb-[10px]">
        <p className="text-2xl text-gray-400">{title}</p>
        <div className="text-right">
          <p className="text-md text-gray-400">
            작성자: {writer} 작성 일시: {date}
          </p>
        </div>
      </div>
      <div className="text-center">
        <hr className="w-[100%] border-t-2 border-gray-400 mx-auto pb-[20px]" />
      </div>

      <div className="text-gray-400">
        <TruncatedText text={bodyText} maxLength={maxLength} />
      </div>
      {imgUrl && (
        <div>
          {imgUrl.map((image, index) => (
            <img key={index} src={image.location} alt="공지사항 이미지" />
          ))}
        </div>
      )}

      {/* {imgUrl ?? (
        <div>
          <img src={imgUrl} alt="공지사항 이미지" width={30} height={30} />
        </div>
      )} */}
    </div>
  )
}

export default TextBox
