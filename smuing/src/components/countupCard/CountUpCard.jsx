import { useEffect, useState } from 'react';
import * as S from './CountUpCard.style';

function counter(setCount, start, end) {
  let now = start;
  const handle = setInterval(() => {
    setCount(Math.ceil(now));
    if (now >= end) {
      clearInterval(handle);
    }
    const step = (end - start) / 20;
    now += step;
  }, 50);
}

const CountUpCard = ({ title, endNum, startNum = 0, firstUnit, lastUnit }) => {
  const [count, setCount] = useState(startNum);

  useEffect(() => {
    counter(setCount, startNum, endNum);
  }, [startNum, endNum]);

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.TextContainer>
        {firstUnit && <S.NumberText>{firstUnit}</S.NumberText>}
        <S.NumberText>{count}</S.NumberText>
        {lastUnit && <S.NumberText>{lastUnit}</S.NumberText>}
      </S.TextContainer>
    </S.Container>
  );
};

export default CountUpCard;
