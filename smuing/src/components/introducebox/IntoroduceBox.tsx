import { introduceBoxProps } from '../../types/types'

const IntroduceBox: React.FC<introduceBoxProps> = ({
  title,
  content,
  nextLineContent,
  children,
}: introduceBoxProps) => {
  return (
    <div className="space-y-6 font-bold text-white w-full h-[1300px] bg-black flex flex-col justify-center items-center">
      <h1 className="text-5xl sm:text-7xl">{title}</h1>
      <p className="text-2xl">{content}</p>
      <p className="text-2xl">{nextLineContent}</p>
      {children}
    </div>
  )
}

export default IntroduceBox
