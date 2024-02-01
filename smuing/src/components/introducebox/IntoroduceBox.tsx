import { introduceBoxProps } from '../../types/types'

const IntroduceBox: React.FC<introduceBoxProps> = ({
  title,
  content,
  nextLineContent,
  children,
}: introduceBoxProps) => {
  return (
    <div className="font-bold text-white w-full bg-black flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-5xl lg:text-7xl">{title}</h1>
      <p className="mt-5 text-sm md:text-2xl lg:text-4xl">{content}</p>
      <p className="mt-3 text-sm md:text-2xl lg:text-4xl">{nextLineContent}</p>
      {children}
    </div>
  )
}

export default IntroduceBox
