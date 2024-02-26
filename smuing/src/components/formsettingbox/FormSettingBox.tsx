import { useState } from 'react'

import { FormSettingData } from '../../types/types'
import FormSettingModal from '../formsettingmodal/FormSettingModal'
import testImg from '/public/formSettingTest/PROFILE_TEST.jpg'

const FormSettingBox: React.FC<{ data: FormSettingData }> = ({ data }) => {
  const { title, name, date } = data
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleModal = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }
  return (
    <div>
      <button
        onClick={() => handleModal()}
        className="h-[150px] bg-white px-5 flex items-center lg:gap-13 gap-5 rounded-xl cursor-pointer"
      >
        <img className="w-[50px] h-[50px] rounded-[50%]" src={testImg} alt="테스트 이미지" />
        <div className="flex flex-col items-start">
          <h1 className="w-[300px] lg:w-[150px] md:w-[120px] overflow-hidden text-lg text-nowrap text-ellipsis">
            {title}
          </h1>
          <p>{name}</p>
          <p>{date}</p>
        </div>
      </button>

      {isOpen && <FormSettingModal data={data} handleModal={handleModal} />}
    </div>
  )
}

export default FormSettingBox
