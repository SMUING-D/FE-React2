import { IoCloseSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

import { FormSettingModalProps } from '../../types/types'

const FormSettingModal: React.FC<FormSettingModalProps> = ({ data, handleModal }) => {
  const { title, text, name, date } = data
  const navigate = useNavigate()
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50 ">
      <div className="w-[800px] h-[600px] flex flex-col gap-12 bg-white rounded-2xl p-12 overflow-auto">
        <div className="flex justify-end gap-4">
          {/* 작성자만 보이게 처리 신청서 수정하는 링크로 이동하게 만들자 */}
          <button
            className="px-3 text-white bg-slate-400 rounded-xl hover:scale-125"
            onClick={() => navigate('/일단은 아무런 링크')}
          >
            수정하기
          </button>
          <IoCloseSharp size={30} className="text-red-500 cursor-pointer" onClick={() => handleModal()} />
        </div>
        <div className="flex flex-col items-start gap-7">
          {/* 복수의 질문 map으로 처리 */}
          <h1 className="text-2xl">(Q) 질문내용 umc에 왜들어올래요?</h1>
          <hr className="w-full border border-black" />
          <h1 className="text-2xl">(A){title}</h1>
          <hr className="w-full border border-black" />
          <p className="text-xl">{text}</p>
        </div>
        <div className="flex justify-end gap-6">
          <span>{name}</span>
          <span>{date}</span>
        </div>
        <div className="flex justify-center gap-10">
          {/* 운영자만 보이게 */}
          <button className="p-5 text-white bg-blue-300 rounded-2xl hover:scale-125 hover:bg-blue-600">
            신청서 합격
          </button>
          <button className="p-5 text-white bg-red-400 rounded-2xl hover:scale-125 hover:bg-red-600">
            신청서 불합격 및 삭제
          </button>
        </div>
      </div>
    </div>
  )
}

export default FormSettingModal
