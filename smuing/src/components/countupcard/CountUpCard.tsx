import { countUpCardProps } from '../../types/types'
import useCountUp from '../hooks/useCountUp'

const CountUpCard: React.FC<countUpCardProps> = ({ boxTitle, numOfPeople, lastUnit }: countUpCardProps) => {
  const displayNumber = useCountUp(numOfPeople)
  return (
    <div className="flex flex-col justify-center items-center bg-white text-black rounded-[15%] w-[380px] h-[300px] mt-8">
      <p className="text-4xl mb-7">{boxTitle}</p>
      <p className="text-7xl">
        {displayNumber}
        {lastUnit}
      </p>
    </div>
  )
}
export default CountUpCard
