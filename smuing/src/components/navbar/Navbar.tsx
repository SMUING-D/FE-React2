import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineDarkMode } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { sidebarOpen } from '../../\bredux/slices/sidebarSlice'
// 경로 왜이럼?
import useScroll from '../../hooks/useScroll'

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
      className={`transition ease-in duration-500 w-screen h-[100px] fixed text-3xl text-white flex items-center p-5 justify-between ${navBackground}`}
    >
      <NavLink to="/">SMUMC</NavLink>
      <div className="gap-8 flex content-center cursor-pointer lg:flex sm:hidden">
        <MdOutlineDarkMode size={40} />
        <NavLink to="/projects">PROJECTS</NavLink>
        <NavLink to="/members/all">MEMBERS</NavLink>
        <NavLink to="/notices">NOTICES</NavLink>
      </div>
      <div className="lg:hidden sm:gap-3 flex items-center">
        {/* 햄버거 wrapper */}
        <MdOutlineDarkMode size={40} />
        <button onClick={handleSidebar}>
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
