import { CiMail } from 'react-icons/ci'
import { FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'
import { FaRegMessage } from 'react-icons/fa6'

const Footer: React.FC = () => {
  return (
    <footer className="text-white relative px-4 py-12 min-h-[250px] w-full bg-slate-900 flex flex-col overflow-hidden">
      <div>
        <div className="relative flex cursor-pointer justify-center align-center m-8 gap-4">
          <div className="transform transition-transform duration-200 hover:-translate-y-3">
            <FaRegMessage size={50} />
          </div>
          <div className="transform transition-transform duration-200 hover:-translate-y-3">
            <CiMail size={50} />
          </div>
          <div className="transform transition-transform duration-200 hover:-translate-y-3">
            <FaInstagram size={50} />
          </div>
          <div className="transform transition-transform duration-200 hover:-translate-y-3">
            <FaMapMarkerAlt size={50} />
          </div>
        </div>
        <p className="text-center text-lg">develop By 김태영, 박지환, 김용민, BE형님들</p>
      </div>
    </footer>
  )
}

export default Footer
