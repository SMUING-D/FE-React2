import { useState } from 'react'

import PART_INTRO_DATA from '../../constants/PART_INTRO_DATA'
import { PartIntroData } from '../../types/types'

const PartIntro: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<PartIntroData>(PART_INTRO_DATA[0])
  const handleActiveButton = (tech: PartIntroData) => {
    setSelectedTech(tech)
  }
  return (
    <div className="flex flex-col items-center w-full gap-2">
      <div className="flex items-center justify-center gap-4 mt-5 lg:gap-20">
        {PART_INTRO_DATA.map((element) => (
          <button
            key={element.tech}
            onClick={() => handleActiveButton(element)}
            className="focus:text-amber-400 hover:text-amber-400 text-[16px] sm:text-2xl lg:text-4xl"
          >
            {element.tech}
          </button>
        ))}
      </div>
      <div className="mt-5 bg-white text-black rounded-2xl w-4/5 h-[150px] lg:h-[300px] flex flex-col items-center justify-center">
        <p className="p-10 text-sm sm:text-xl lg:text-3xl">
          {PART_INTRO_DATA.find((element) => element.tech === selectedTech.tech)?.text}
        </p>
      </div>
    </div>
  )
}

export default PartIntro
