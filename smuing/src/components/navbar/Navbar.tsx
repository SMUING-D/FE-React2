import { GiHamburgerMenu } from 'react-icons/gi'
// import { MdOutlineDarkMode } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import useScroll from '../../hooks/useScroll'
import { sidebarOpen } from '../../redux/slices/sidebarSlice'

const Navbar: React.FC = () => {
  const { y } = useScroll()
  const navBackground = y < 100 ? 'bg-slate-900' : 'bg-transparent'
  // 햄버거 버튼 기능 아직 구현못함
  const dispatch = useDispatch()

  const handleSidebar = () => {
    dispatch(sidebarOpen())
  }
  return (
    <nav
      className={`transition ease-in duration-500 h-[100px] w-full fixed text-3xl text-white flex items-center p-5 justify-between px-8 ${navBackground}`}
    >
      <NavLink to="/">SMUMC</NavLink>
      <div className="cursor-pointer hidden lg:block">
        <div className="flex gap-4">
          {/* <MdOutlineDarkMode size={40} /> */}
          <NavLink to="/projects">PROJECTS</NavLink>
          <NavLink to="/members/all">MEMBERS</NavLink>
          <NavLink to="/notices">NOTICES</NavLink>
        </div>
      </div>
      <div className="items-center block lg:hidden">
        {/* 햄버거 wrapper */}
        {/* <MdOutlineDarkMode size={40} /> */}
        <button onClick={handleSidebar}>
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
