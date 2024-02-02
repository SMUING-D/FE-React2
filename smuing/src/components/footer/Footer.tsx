import FOOTER_ICONS from '../../constants/FOOTER_ICONS'

const Footer: React.FC = () => {
  return (
    <footer className="text-white relative px-4 py-12 min-h-[250px] w-full bg-slate-900 flex flex-col overflow-hidden">
      <div className="relative flex justify-center gap-4 m-8 cursor-pointer align-center">
        {FOOTER_ICONS.map(({ icon, key }) => (
          <div key={key} className="transition-transform duration-200 transform hover:-translate-y-3">
            {icon}
          </div>
        ))}
      </div>
      <p className="text-lg text-center">develop By 김태영, 박지환, 김용민, BE형님들</p>
    </footer>
  )
}

export default Footer
