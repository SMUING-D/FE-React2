import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineDarkMode } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

import useScroll from '../../hooks/useScroll'

const Navbar: React.FC = () => {
  const { y } = useScroll()
  const navBackground = y < 100 ? 'bg-slate-900' : 'bg-transparent'
  // navbar 내리면 투명화랑 햄버거 버튼 기능 아직 구현못함
  return (
    <nav
      className={`transition ease-in duration-500 w-screen h-[100px] fixed text-3xl text-white flex items-center p-5 justify-between ${navBackground}`}
    >
      <NavLink to="/">SMUMC</NavLink>
      <div className="gap-8 flex content-center cursor-pointer lg:flex sm:hidden">
        <MdOutlineDarkMode size={40} />
        <NavLink to="/projects">PROJECTS</NavLink>
        <NavLink to="/members">MEMBERS</NavLink>
        <NavLink to="/notices">NOTICES</NavLink>
      </div>
      <div className="lg:hidden sm:gap-3 flex items-center">
        <MdOutlineDarkMode size={40} />
        <button>
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
