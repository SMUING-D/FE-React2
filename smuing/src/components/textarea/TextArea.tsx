import { ChangeEvent, useState } from 'react'

type TextAreaProps = {
  value: string
  onChange: (text: string) => void
  placeholder?: string
  maxChars?: number
  width?: number
  height?: number
}

const TextArea: React.FC<TextAreaProps> = ({ value, onChange, placeholder = '', maxChars, width, height }) => {
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
