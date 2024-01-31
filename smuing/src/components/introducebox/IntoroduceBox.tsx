import { introduceBoxProps } from '../../types/types'

const IntroduceBox: React.FC<introduceBoxProps> = ({
  title,
  content,
  nextLineContent,
  children,
}: introduceBoxProps) => {
  return (
    <div className="space-y-6 font-bold text-white w-full h-[1300px] bg-black flex flex-col justify-center items-center">
      <h1 className="lg:text-8xl md:text-5xl sm:text-3xl">{title}</h1>
      <p className="lg:text-2xl md:text-2xl sm:font-xl">{content}</p>
      <p className="lg:text-2xl md:text-2xl sm:font-xl">{nextLineContent}</p>
      {children}
    </div>
  )
}

export default IntroduceBox
