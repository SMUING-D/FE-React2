import styled from 'styled-components';
import theme from '../../theme';
import { FONT_SIZE } from '../../constants/size';
import { FONT } from '../../constants/font';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: ${props => (props.width ? props.width : '200px')};
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

const ImgContainer = styled.img`
  display: flex;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: ${props => (props.height ? props.height : '150px')};
  object-fit: cover;
`;

const TitleContainer = styled.div`
  display: none;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  padding: 20px;
  opacity: 0.8;
  border-radius: 5px;
  background-color: ${theme.COLOR.DARK.GRAY};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  ${Container}:hover & {
    display: block;
  }
`;

const Title = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  height: 100%;

  p {
    display: flex;
    font-size: ${props =>
      props.fontSize ? props.fontSize : `${FONT_SIZE.LG}`};
    color: ${props =>
      props.fontColor ? props.fontColor : `${theme.COLOR.LIGHT.WHITE}`};
    font-family: ${FONT.IBM_PLEX_SANS_KR.SEMI_BOLD};
    text-align: center;
  }
`;

export { Container, ImgContainer, TitleContainer, Title };
