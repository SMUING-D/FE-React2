import styled from 'styled-components';
import theme from '../../theme';
import { FONT_SIZE, FONT_WEIGHT } from '../../constants/size';

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  padding: ${props => props.padding};
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.background};
  border-radius: ${props => props.radius || '10'}px;
  background: ${props => props.background};
  border: 2px solid black;
  font-weight: ${props => props.fontweight};
  cursor: pointer;
  &:hover {
    background-color: #ffefff;
  }

  div {
    margin-top: 5px;
    ${theme.ALIGN.ROW_CENTER}
  }
  img {
    object-fit: cover;
  }
`;

const ImageWrapper = styled.div`
  width: ${props => props.imgwidth};
  height: ${props => props.imgheight};

  img {
    width: 100%;
    height: 100%;
    border-radius: 3rem;
  }
  span {
    position: absolute;
    margin-bottom: 80px;
    margin-left: 20px;
    padding: 8px;
    background-color: #e5e5e5;
    width: auto;
    border-radius: 0.5rem;
    font-size: ${FONT_SIZE.SM};
    font-weight: ${FONT_WEIGHT.BOLD};
  }
`;

const NameText = styled.p`
  margin-top: 10px;
  font-size: ${props => props.namefontsize};
  font-weight: ${props => props.namefontweight};
`;

const GenerationText = styled.p`
  font-size: ${props => props.generationfontsize};
`;

const IntroText = styled.p`
  font-size: ${props => props.introfontsize};
`;

export { Container, ImageWrapper, NameText, GenerationText, IntroText };
