import CountUpCard from '../components/countupCard/CountUpCard'
import HeroBox from '../components/herobox/HeroBox'
import InfiniteSlider from '../components/infiniteSlider.tsx/InfiniteSlider'
import IntroduceBox from '../components/introducebox/IntoroduceBox'
import NewsBox from '../components/newsbox/NewsBox'
import PartIntro from '../components/partIntro/PartIntro'
import COUNTUP_DATA from '../constants/COUNTUP_DATA'
import useGetData from '../hooks/useGetData'

const MainPage: React.FC = () => {
  // const { isData, isLoading } = useGetData('/api/get/role')

  return (
    <div className="bg-black flex flex-col items-center justify-center gap-[150px]">
      <HeroBox />
      <IntroduceBox
        title="About us"
        content="University MakeUs Challenge(UMC-SMU)는"
        nextLineContent="앱&웹 서비스 런칭에 도전하는 대학생 IT 연합동아리입니다"
      >
        <div className="flex flex-col gap-5 mt-10 sm:flex-row">
          {COUNTUP_DATA.map((item, index) => (
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
        <InfiniteSlider />
      </IntroduceBox>
      <IntroduceBox title="최신 소식" content="UMC 뉴스레터">
        <NewsBox />
      </IntroduceBox>
    </div>
  )
}

export default MainPage
