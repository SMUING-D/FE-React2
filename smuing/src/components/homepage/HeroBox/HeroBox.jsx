import * as S from '../HeroBox/HeroBox.style'

const HeroBox = () => {
  return (
    <S.Hero>
      <S.Wrapper>
        <div>상명대학교</div>
        <div>코딩 동아리를</div>
        <div>소개합니다</div>
        <p>지원 문의는 각 동아리 홈페이지를 참조하세요.</p>
      </S.Wrapper>
      <S.Button>UMC</S.Button>
      <S.Button>INIRO</S.Button>
      <S.Button>SM-Rooke</S.Button>
      <S.Button>멋쟁이사자처럼</S.Button>
    </S.Hero>
  )
}
export default HeroBox
