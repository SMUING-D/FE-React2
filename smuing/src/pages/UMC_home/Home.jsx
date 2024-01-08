import { CountUpCard, HeroBox, IntroduceBox, News, PartIntro } from '../../components'
import * as S from './Home.style'

const Home = () => {
  return (
    <S.Container>
      <HeroBox />
      <IntroduceBox>
        <h1>About us</h1>
        <p>INIRO는 상명대학교 코딩 동아리입니다.</p>
        <S.Wrapper>
          <CountUpCard title="역대 SMUMC 멤버수" endNum="185" lastUnit="명" />
          <CountUpCard title="현재 회원 수" endNum="40" lastUnit="명" />
          <CountUpCard title="현재 기수" endNum="4" lastUnit="기" />
        </S.Wrapper>
      </IntroduceBox>

      <IntroduceBox>
        <h1>총 n개의 파트 팀으로 구성</h1>
        <p>2023년 하반기 기준</p>
        <PartIntro />
      </IntroduceBox>

      <IntroduceBox>
        <h1>PROJECT</h1>
        <p>University MakeUs Challenge(UMC-SMU)는 상명대학교 대학교 동아리 입니다.</p>
        {/* <InfiniteSlider /> */}
      </IntroduceBox>

      <IntroduceBox>
        <h1>따끈한 최신 소식</h1>
        <p>UMC 뉴스레터</p>
        <News />
      </IntroduceBox>
    </S.Container>
  )
}

export default Home
