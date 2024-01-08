import * as S from './SliderCard.style';

const SliderCard = ({ width, height, title, onClick, src }) => {
  const defaultImg =
    'https://media.istockphoto.com/id/1354776457/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=w3OW0wX3LyiFRuDHo9A32Q0IUMtD4yjXEvQlqyYk9O4=';
  return (
    <S.Container width={width} height={height} onClick={onClick}>
      <S.ImgContainer src={src ? src : defaultImg} />
      <S.TitleContainer>
        <S.Title>
          <p>{title}</p>
        </S.Title>
      </S.TitleContainer>
    </S.Container>
  );
};

export default SliderCard;
