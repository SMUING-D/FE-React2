import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className="w-screen h-[100px] fixed bg-slate-900 text-3xl text-white flex items-center p-5 justify-between">
      <NavLink>SMUMC</NavLink>
      <div className="gap-8 flex content-center">
        <MdOutlineDarkMode size={40} />
        <NavLink>PROJECTS</NavLink>
        <NavLink>MEMBERS</NavLink>
        <NavLink>NOTICES</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
