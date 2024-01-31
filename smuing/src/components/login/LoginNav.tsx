import React from 'react'
import { Link } from 'react-router-dom'

import { NavTitle } from '../../types/types'

const LoginNav: React.FC<NavTitle> = ({ title }) => {
  return (
    <nav className="bg-white border-b border-solid border-blue-200 p-4 w-full fixed z-20">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-blue-500 text-lg font-bold">
          {title}
        </Link>
      </div>
    </nav>
  )
}

export default LoginNav
