import styled from 'styled-components';

import theme from '../../theme';
import { FONT } from '../../constants/font';
import { FONT_SIZE } from '../../constants/size';

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  border-radius: 25px;
  width: 280px;
  height: 230px;
  gap: 8px;
  background-color: ${theme.COLOR.LIGHT.WHITE_GRAY};

  @media ${theme.WINDOW_SIZE.TABLET} {
    width: 100%;
    height: 140px;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 100%;
    height: 140px;
  }
`;

const Title = styled.h3`
  font-family: ${FONT.IBM_PLEX_SANS_KR.BOLD};
  color: ${theme.MAIN_COLOR.CONTENT};
  font-size: ${FONT_SIZE.TWO_XL};

  @media ${theme.WINDOW_SIZE.TABLET} {
    font-size: ${FONT_SIZE.TWO_XL};
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.TWO_XL};
  }
`;

const NumberText = styled.h3`
  font-family: ${FONT.IBM_PLEX_SANS_KR.BOLD};
  color: ${theme.MAIN_COLOR.BOLD_TITLE};
  font-size: ${FONT_SIZE.SIX_XL};

  @media ${theme.WINDOW_SIZE.TABLET} {
    font-size: ${FONT_SIZE.SIX_XL};
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: ${FONT_SIZE.SIX_XL};
  }
`;

const TextContainer = styled.div`
  ${theme.ALIGN.ROW_CENTER};
`;

export { Container, Title, NumberText, TextContainer };
