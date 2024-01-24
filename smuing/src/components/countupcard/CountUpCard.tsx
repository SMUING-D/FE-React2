import useCountUp from '../../hooks/useCountUp'
import { countUpCardProps } from '../../types/types'

const CountUpCard: React.FC<countUpCardProps> = ({ boxTitle, numOfPeople, lastUnit }: countUpCardProps) => {
  const displayNumber = useCountUp(numOfPeople)
  return (
    <div className="flex flex-col justify-center items-center bg-white text-black rounded-[15%] lg:w-[380px] lg:h-[300px] sm:w-[280px] sm:h-[250px]">
      <p className="lg:text-4xl mb-7 sm:text-3xl">{boxTitle}</p>
      <p className="text-6xl sm:text-7xl">
        {displayNumber}
        {lastUnit}
      </p>
    </div>
  )
}
export default CountUpCard
