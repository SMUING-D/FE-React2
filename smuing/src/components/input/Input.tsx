import React from 'react'

import { InputProps } from '../../types/types'

const Input: React.FC<InputProps> = ({ id, name, type, placeholder, value, onChange, isValid, errorMessage }) => {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        placeholder={placeholder}
      />
      {!isValid && <span className="absolute top-full left-0 text-red-500 text-sm">{errorMessage}</span>}
    </div>
  )
}

export default Input
