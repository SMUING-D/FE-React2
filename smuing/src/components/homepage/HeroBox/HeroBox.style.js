import styled, { keyframes } from 'styled-components'

import background from '../../../assets/img/city-view.webp'
import { FONT_SIZE, FONT_WEIGHT, RESPONSIVE_SIZE } from '../../../constants/size'
import theme from '../../../theme'

const Hero = styled.div`
  width: 100%;
  top: 0%;
  left: 0%;
  height: 670px;
  background-image: url(${background});
  background-size: cover; // 이미지 크기가 요소보다 클 때 비율 맞추기
  color: yellow;
  text-shadow: 2px 2px 4px black;

  gap: 30px;

  //button
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 70px;
`

const Wrapper = styled.div`
  font-size: ${FONT_SIZE.SIX_XL};
  font-weight: ${FONT_WEIGHT.FONT_BLACK};
  position: absolute;
  top: 15%;
  left: 5%;
  z-index: 999;
  p {
    font-size: ${FONT_SIZE.BASE};
  }
  @media (max-width: ${RESPONSIVE_SIZE.PC}) {
    width: 100%;
    ${theme.ALIGN.COLUMN_CENTER}
    font-size: ${FONT_SIZE.FIVE_XL};
  }
`

const shakeAnimation = keyframes`
0% { transform: translate(-5px, 0) rotate(-5deg); }
25% { transform: translate(5px, 0) rotate(5deg); }
50% { transform: translate(-5px, 0) rotate(-5deg); }
75% { transform: translate(5px, 0) rotate(5deg); }
100% { transform: translate(-5px, 0) rotate(-5deg); }
`

const Button = styled.button`
  width: 200px;
  height: 70px;
  border-radius: 30px;
  font-size: ${FONT_SIZE.LG};
  background-color: ${theme.COLOR.DARK.BLACK};
  font-weight: ${FONT_WEIGHT.FONT_BLACK};
  color: white;
  border: none;
  cursor: pointer;
  animation: ${shakeAnimation} 20s ease;

  &:active {
    animation: ${shakeAnimation} 4s ease infinite;
  }

  &:hover {
    background-color: ${theme.COLOR.PRIMARY.BLUE};
  }
`

export { Hero, Wrapper, Button }
