import { IntroduceBoxProps } from '../../types/types'

const IntroduceBox: React.FC<IntroduceBoxProps> = ({
  title,
  content,
  nextLineContent,
  children,
}: IntroduceBoxProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full font-bold text-white bg-black">
      <h1 className="text-4xl md:text-5xl lg:text-7xl">{title}</h1>
      <p className="mt-5 text-sm md:text-2xl lg:text-4xl">{content}</p>
      <p className="mt-3 text-sm md:text-2xl lg:text-4xl">{nextLineContent}</p>
      {children}
    </div>
  )
}

export default IntroduceBox
