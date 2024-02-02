import { MdClose } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { sidebarClose } from '../../redux/slices/sidebarSlice'

const Sidebar: React.FC = () => {
  const dispatch = useDispatch()

  const handleSidebar = () => {
    dispatch(sidebarClose())
  }

  return (
    <div className="fixed top-0 right-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-90">
      <button className="fixed text-white scale-110 bg-transparent border-none cursor-pointer top-10 right-10 hover:transform">
        <MdClose size={30} onClick={handleSidebar} />
      </button>
      <div className="flex flex-col items-center justify-center h-full gap-24 text-3xl text-white">
        <NavLink to="/projects">PROJECTS</NavLink>
        <NavLink to="/members/all">MEMBERS</NavLink>
        <NavLink to="/notices">NOTICES</NavLink>
        <NavLink to="/form">FORM</NavLink>
      </div>
    </div>
  )
}

export default Sidebar
