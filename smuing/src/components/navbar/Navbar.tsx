import { useScroll } from 'framer-motion'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
  // navbar 내리면 투명화랑 햄버거 버튼 기능 아직 구현못함
  return (
    <div>
      <nav className="w-screen h-[100px] fixed bg-slate-900 text-3xl text-white flex items-center p-5 justify-between ">
        <NavLink>SMUMC</NavLink>
        <div className="gap-8 flex content-center cursor-pointer lg:flex sm:hidden">
          <MdOutlineDarkMode size={40} />
          <NavLink>PROJECTS</NavLink>
          <NavLink>MEMBERS</NavLink>
          <NavLink>NOTICES</NavLink>
        </div>
        <div className="lg:hidden sm: gap-3 flex items-center">
          <MdOutlineDarkMode size={40} />
          <button>
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
