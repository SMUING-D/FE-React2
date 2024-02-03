import { TruncatedText } from './TruncatedText'

const TextBox = () => {
  const maxLength = 100

  return (
    <div className="border border-solid border-black rounded-[20px] w-[60%] h-[150px] bg-white px-[50px] pt-[15px] pb-[20px] mt-[20px]">
      <div className="flex items-center justify-between gap-[20px] pb-[10px]">
        <p className="text-2xl text-gray-400">title</p>
        <div className="text-right">
          <p className="text-md text-gray-400">작성자: smumc 작성 일시: 2023.12.25</p>
        </div>
      </div>
      <div className="text-center">
        <hr className="w-[100%] border-t-2 border-gray-400 mx-auto pb-[20px]" />
      </div>

      <div className="text-gray-400">
        <TruncatedText
          text="umc6기 회장은 누가될것인가umc6기 회장은 누가될것인가umc6기 회장은 누가될것인가umc6기 회장은 누가될것인가umc6기
        회장은 누가될것인가umc6기 회장은 누가될것인가umc6기 회장은 누가될것인가umc6기 회장은 누가될것인가umc6기 회장은 누가될것인가umc6기
        회장은 누가될것인가"
          maxLength={maxLength}
        />
      </div>
    </div>
  )
}

export default TextBox
