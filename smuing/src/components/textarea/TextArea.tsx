import { ChangeEvent, useState } from 'react'

import { TextAreaProps } from '../../types/types'

const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  placeholder = '',
  maxChars,
  width,
  height,
  textTitle,
}) => {
  const [textAreaHeight, setTextAreaHeight] = useState<number>(height)
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value
    if (!maxChars || newValue.length <= maxChars) {
      onChange(newValue)
    }
    setTextAreaHeight(e.target.scrollHeight)
  }

  return (
    <div className="relative">
      <div className="text-white pb-[10px] pt-[10px]">{textTitle}</div>
      <textarea
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500 resize-none"
        style={{
          height: `${height}px`,
          width: `${width}px`,
        }}
      />
      {maxChars && (
        <div className="text-gray-500 text-sm">
          {value.length}/{maxChars}
        </div>
      )}
    </div>
  )
}

export default TextArea
