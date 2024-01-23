import { useState } from 'react'

import { partIntroData } from '../../types/types'

const PartIntro: React.FC = () => {
  // useSelector로 수정해야한다.
  const partArr: partIntroData[] = [
    {
      tech: '기획',
      text: '린스타트업에 기초하여 고객 시장 분석 - 문제정의 - 가설 검증 - 솔루션/BM 도출- 전략 수립까지 IT 프로덕트를 기획하고 매니징하는 전과정을 경험합니다.',
    },
    {
      tech: '디자인',
      text: '피그마와 같은 협업툴을 통해 UXUI 디자인의 전반적인 과정을 배우고 기획자, 개발자와 함께 새로운 프로덕트를 만들어 내는 과정에 참여합니다.',
    },
    {
      tech: 'Android',
      text: 'Kotlin 언어를 활용해 안드로이드 UI 구현 기초/심화부터 서버통신 등 앱 제작에 필요한 내용들을 배웁니다. 안드로이드에 몰입할 수 있는 세미나, 스터디, 합동세미나 등 여러 활동에 참여합니다.',
    },
    {
      tech: 'iOS',
      text: 'Swift와 UIKit를 이용해서 iOS 앱 서비스를 만들 수 있는 능력을 기를 수 있습니다. 자신의 성장을 위해 열정적으로 도전하는 사람들과 함께 활동에 필요한 부분들을 학습할 수 있습니다.',
    },
    {
      tech: 'Web',
      text: 'UI 구현, 서버 통신 등 웹 서비스 개발에 필요한 역량들을 기초부터 심화까지 학습합니다. 또한 기획자, 디자이너, 서버 개발자와의 협업 경험을 통해 개발 협업 방식을 익힐 수 있습니다.',
    },
    {
      tech: 'Server',
      text: 'Spring 프레임 워크, 관계형 데이터베이스와 AWS를 기반으로 서버 애플리케이션을 구축하고 운영하는 과정을 학습합니다. 기획자, 디자이너, 클라이언트 개발자와의 협업을 통해 협업 방식을 익힐 수 있습니다.',
    },
  ]
  const [selectedTech, setSelectedTech] = useState<partIntroData>(partArr[0])
  const handleActiveButton = (tech: partIntroData) => {
    setSelectedTech(tech)
  }
  return (
    <div className="flex flex-col items-center w-full">
      <div>
        {partArr.map((element) => (
          <button
            key={element.tech}
            onClick={() => handleActiveButton(element)}
            className="text-2xl text-white focus:text-amber-400 hover:text-amber-400 m-7"
          >
            {element.tech}
          </button>
        ))}
      </div>
      <div className="w-[1000px] h-[300px] rounded-3xl flex items-center text-black text-2xl bg-white">
        <p className="p-[50px]">{partArr.find((element) => element.tech === selectedTech.tech)?.text}</p>
      </div>
    </div>
  )
}

export default PartIntro
