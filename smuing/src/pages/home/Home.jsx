import { CountUpCard, HeroBox, IntroduceBox } from '../../components'
import * as S from './Home.style'

const Home = () => {
  return (
    <S.Container>
      <HeroBox />
      <IntroduceBox>
        <h1>About UMC-SMU</h1>
        <p>University MakeUs Challendge(UMC-SMU)는 상명대학교 대표 코딩 동아리입니다.</p>
        <S.Wrapper>
          <CountUpCard title="역대 SMUMC 멤버수" endNum="185" lastUnit="명" />
          <CountUpCard title="현재 회원 수" endNum="40" lastUnit="명" />
          <CountUpCard title="현재 기수" endNum="4" lastUnit="기" />
        </S.Wrapper>
      </IntroduceBox>
    </S.Container>
  )
}

export default Home
