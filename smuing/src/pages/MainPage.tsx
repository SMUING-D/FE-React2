import CountUpCard from '../components/countupcard/CountUpCard'
import HeroBox from '../components/herobox/HeroBox'
import IntroduceBox from '../components/introducebox/IntoroduceBox'
import NewsBox from '../components/newsbox/NewsBox'
import PartIntro from '../components/partintro/PartIntro'
import { countUpCardProps } from '../types/types'

const MainPage: React.FC = () => {
  const countUpTest: countUpCardProps[] = [
    { boxTitle: '역대 SMUMC 멤버수', numOfPeople: 144, lastUnit: '명' },
    {
      boxTitle: '현재 회원 수',
      numOfPeople: 39,
      lastUnit: '명',
    },
    {
      boxTitle: '현재 기수',
      numOfPeople: 5,
      lastUnit: '기',
    },
  ]

  return (
    <div>
      <HeroBox />
      <IntroduceBox
        title="About us"
        content="University MakeUs Challendge(UMC-SMU)는
        "
        nextLineContent="앱&웹 서비스 런칭에 도전하는 대학생 IT 연합동아리입니다"
      >
        <div className="flex gap-20 align-center justify-center">
          {countUpTest.map((item, index) => (
            <CountUpCard key={index} boxTitle={item.boxTitle} numOfPeople={item.numOfPeople} lastUnit={item.lastUnit} />
          ))}
        </div>
      </IntroduceBox>

      <IntroduceBox title="총 6개의 파트로 구성" content="2023 하반기 기준">
        <PartIntro />
      </IntroduceBox>

      <IntroduceBox
        title="Project"
        content="University MakeUs Challenge(SMUMC) 데모데이"
        nextLineContent="실제로 상명대 학생이 참여한 데모데이 프로젝트입니다."
      >
        무한 슬라이더 언제 맨드냐
      </IntroduceBox>
      <IntroduceBox title="최신 소식" content="UMC 뉴스레터">
        <NewsBox />
      </IntroduceBox>
    </div>
  )
}

export default MainPage
