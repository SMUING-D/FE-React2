import { NEWS_INFOS } from '../../constants/info';
import * as S from './news.style';

function News() {
  return (
    <S.Container>
      <S.ContentBox>
        {NEWS_INFOS.map(({ id, title, description, image }) => (
          <S.Contents key={id}>
            <S.Img src={image} alt={title} />
            <S.TextBox>
              {/* <h2>{title}</h2> */}
              <h3>{description}</h3>
            </S.TextBox>
          </S.Contents>
        ))}
      </S.ContentBox>
    </S.Container>
  );
}

export default News;
