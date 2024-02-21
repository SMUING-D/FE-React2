import { InfiniteCardProps } from '../../types/types'

const InfiniteSliderCard: React.FC<InfiniteCardProps> = ({ id, img, year, description, name, member }) => {
  return (
    <div key={id} className="h-[500px] overflow-hidden border-white rounded-lg border-solid border cursor-pointer">
      <div className="h-[250px]">
        <img className="h-[200px] w-full object-cover bg-black" src={img} alt={name} />
        <div className="flex items-center justify-center gap-2">
          <h3 className="text-xl">{name}</h3>
          <span className="text-sm">({year}기)</span>
        </div>
      </div>
      <div className="h-full mx-5 my-0">
        <div className="relative h-full">
          <div className="absolute top-[-20px] left-0 right-0 h-[2px] bg-red-500">
            <h3 className="mt-5 mb-5 text-sm">{description}</h3>
            <span className="">참가자</span>
            <div className="w-full text-center">
              {member.map((data, index) => (
                <div key={index} className="mb-1 text-xs border-2 border-yellow-300 border-solid rounded-md">
                  {data}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default InfiniteSliderCard
