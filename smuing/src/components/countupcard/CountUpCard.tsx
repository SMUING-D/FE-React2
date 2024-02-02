import useCountUp from '../../hooks/useCountUp'
import { CountUpCardProps } from '../../types/types'

const CountUpCard: React.FC<CountUpCardProps> = ({ boxTitle, numOfPeople, lastUnit }: countUpCardProps) => {
  const displayNumber = useCountUp(numOfPeople)
  return (
    <div className="bg-white text-black w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] rounded-2xl flex flex-col items-center justify-center">
      <p className="text-xl lg:text-4xl">{boxTitle}</p>
      <p className="mt-3 text-5xl lg:text-8xl lg:mt-8">
        {displayNumber}
        {lastUnit}
      </p>
    </div>
  )
}
export default CountUpCard
