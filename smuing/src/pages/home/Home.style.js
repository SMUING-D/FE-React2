import styled from 'styled-components'

import { FONT } from '../../constants/font'
import { FONT_SIZE, FONT_WEIGHT, RESPONSIVE_SIZE } from '../../constants/size'
import theme from '../../theme'

const Container = styled.div`
  font-family: ${FONT.IBM_PLEX_SANS_KR.BOLD};
  width: 100%;
  padding-bottom: 150px;
  background-color: black;

  h1 {
    font-size: ${FONT_SIZE.SIX_XL};
    font-weight: ${FONT_WEIGHT.FONT_BLACK};
  }

  p {
    font-size: ${FONT_SIZE.LG};
  }
  @media (max-width: ${RESPONSIVE_SIZE.TABLET}) {
    h1 {
      font-size: ${FONT_SIZE.FOUR_XL};
      font-weight: ${FONT_WEIGHT.FONT_BLACK};
    }
    p {
      font-size: ${FONT_SIZE.SM};
    }
  }
`
const Wrapper = styled.div`
  gap: 40px;
  width: 100%;
  padding: 10px;
  ${theme.ALIGN.ROW_CENTER};

  @media (max-width: ${RESPONSIVE_SIZE.TABLET}) {
    width: 100%;
    ${theme.ALIGN.COLUMN_CENTER};
    font-size: 1rem;
  }

  @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
    width: 100%;
    ${theme.ALIGN.COLUMN_CENTER};
    font-size: 3rem;
  }
`

const SliderWrapper = styled.div`
  overflow: hidden;
  z-index: 50000;
  position: fixed;
`

const PartBox = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  padding: 10px;
  width: 60%;
  height: 300px;
`

const PartNav = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  margin-bottom: 10px;

  button {
    color: ${theme.COLOR.LIGHT.WHITE};
    font-size: ${FONT_SIZE.XL};
    background: none;
    border: none;

    &:hover {
      color: ${theme.COLOR.LIGHT.YELLOW};
    }
  }
`

const PartContents = styled.div`
  background-color: #232731;
  color: white;
  padding: 60px;
  width: 90%;
  height: 80%;
  border-radius: 30px;
`

export { Container, Wrapper, SliderWrapper, PartBox, PartNav, PartContents }
