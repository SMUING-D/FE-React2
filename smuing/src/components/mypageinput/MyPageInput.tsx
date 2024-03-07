import { useState } from 'react'

import { MyPageInputProps } from '../../types/types'

const MyPageInput: React.FC<MyPageInputProps> = ({ label, placeholder }) => {
  const [data, setData] = useState<string>('')
  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value)
  }
  return (
    <div className="flex flex-col w-4/5">
      <p className="text-white">{label}</p>
      <input
        placeholder={placeholder}
        onChange={handleData}
        value={data}
        className="w-full h-[40px] border-4 rounded-xl border-black outline-none placeholder:p-3"
        type="text"
      />
    </div>
  )
}

export default MyPageInput
