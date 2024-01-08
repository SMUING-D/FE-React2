import * as S from '../membercard/MemberCard.style';
import { FONT_SIZE, FONT_WEIGHT } from '../../constants/size';

const MemberCard = ({
  size,
  background,
  radius,
  imgurl,
  name,
  th,
  department,
  badge,
  onClick
}) => {
  const sizeHandler = size => {
    switch (size) {
      case 'l':
        return {
          width: '370px',
          height: '400px',
          namefontsize: `${FONT_SIZE.TWO_XL}`,
          namefontweight: `${FONT_SIZE.BOLD}`,
          generationfontsize: `${FONT_SIZE.BASE}`,
          introfontsize: `${FONT_SIZE.BASE}`,
          fontweight: `${FONT_WEIGHT.FONT_BLACK}`,
          imgwidth: '325px',
          imgheight: '300px'
        };
      case 'm':
        return {
          width: '260px',
          height: '278px',
          namefontsize: `${FONT_SIZE.TWO_XL}`,
          namefontweight: `${FONT_WEIGHT.BOLD}`,
          introfontsize: `${FONT_SIZE.BASE}`,
          fontweight: `${FONT_WEIGHT.NORMAL}`,
          imgwidth: '160px',
          imgheight: '168px'
        };
      default:
        throw new Error(`지원되지 않는 ${size}의 카드입니다.`);
    }
  };

  const {
    width,
    height,
    namefontsize,
    generationfontsize,
    introfontsize,
    imgwidth,
    imgheight,
    namefontweight,
    fontweight
  } = sizeHandler(size);

  return (
    <S.Container
      height={height}
      background={background}
      width={width}
      radius={radius}
      fontweight={fontweight}
      onClick={onClick}
    >
      <S.ImageWrapper imgwidth={imgwidth} imgheight={imgheight} radius={radius}>
        <img src={imgurl} alt='umc 멤버들 사진입니다.' />
        {size === 'm' && badge && <span>{badge}</span>}
      </S.ImageWrapper>
      <S.NameText namefontsize={namefontsize} namefontweight={namefontweight}>
        {name}
      </S.NameText>
      <div>
        <S.GenerationText generationfontsize={generationfontsize}>
          {th}
        </S.GenerationText>
        <p>|</p>
        <S.IntroText introfontsize={introfontsize}>{department}</S.IntroText>
      </div>
    </S.Container>
  );
};

export default MemberCard;
