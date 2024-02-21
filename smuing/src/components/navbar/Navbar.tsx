import { GiHamburgerMenu } from 'react-icons/gi'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { useScroll } from '../../hooks/useScroll'
import { sidebarOpen } from '../../redux/slices/sidebarSlice'

const Navbar: React.FC = () => {
  const { y } = useScroll()
  const navBackground = y < 100 ? 'bg-slate-900' : 'bg-transparent'
  const dispatch = useDispatch()

  const handleSidebar = () => {
    dispatch(sidebarOpen())
  }
  return (
    <nav
      className={`transition ease-in duration-500 h-[100px] w-full fixed text-3xl text-white flex items-center p-5 justify-between px-8 ${navBackground}`}
    >
      <NavLink to="/">SMUMC</NavLink>
      <div className="hidden cursor-pointer lg:block">
        <div className="flex gap-4">
          <NavLink to="/projects">PROJECTS</NavLink>
          <NavLink to="/members/all">MEMBERS</NavLink>
          <NavLink to="/notices">NOTICES</NavLink>
          <NavLink to="/form">FORM</NavLink>
        </div>
      </div>
      <div className="block text-lg scale-110 cursor-pointer sm:hidden hover:transform">
        <button onClick={handleSidebar}>
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
