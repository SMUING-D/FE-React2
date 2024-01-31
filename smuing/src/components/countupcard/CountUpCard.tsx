import useCountUp from '../../hooks/useCountUp'
import { countUpCardProps } from '../../types/types'

const CountUpCard: React.FC<countUpCardProps> = ({ boxTitle, numOfPeople, lastUnit }: countUpCardProps) => {
  const displayNumber = useCountUp(numOfPeople)
  return (
    <div className="flex flex-col justify-center items-center bg-white text-black rounded-[15%] lg:w-[380px] lg:h-[300px] md:w-[200px] md:h-[150px] sm:w-[100px] sm:h-[100px]">
      <p className="lg:text-4xl mb-7 md:text-xl sm:text-lg">{boxTitle}</p>
      <p className="lg:text-8xl md:text-5xl sm:text-4xl">
        {displayNumber}
        {lastUnit}
      </p>
    </div>
  )
}
export default CountUpCard
