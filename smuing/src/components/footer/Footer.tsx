import { CiMail } from 'react-icons/ci'
import { FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'
import { FaRegMessage } from 'react-icons/fa6'

const Footer: React.FC = () => {
  const icons = [
    { icon: <FaRegMessage size={50} />, key: '1' },
    { icon: <CiMail size={50} />, key: '2' },
    { icon: <FaInstagram size={50} />, key: '3' },
    { icon: <FaMapMarkerAlt size={50} />, key: '4' },
  ] // 아이콘을 배열로 묶는다.
  return (
    <footer className="text-white relative px-4 py-12 min-h-[250px] w-full bg-slate-900 flex flex-col overflow-hidden">
      <div className="relative flex cursor-pointer justify-center align-center m-8 gap-4">
        {icons.map(({ icon, key }) => (
          <div key={key} className="transform transition-transform duration-200 hover:-translate-y-3">
            {icon}
          </div>
        ))}
      </div>
      <p className="text-center text-lg">develop By 김태영, 박지환, 김용민, BE형님들</p>
    </footer>
  )
}

export default Footer
