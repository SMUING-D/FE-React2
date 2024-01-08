import styled from 'styled-components';
import theme from '../../../theme';

const IntroduceBox = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 100%;
  height: 100%;

  background-color: ${theme.COLOR.DARK.BLACK};
  color: ${theme.COLOR.LIGHT.WHITE_GRAY};

  h1 {
    margin-top: 100px;
  }

  p {
    margin-bottom: 100px;
  }
`;
export { IntroduceBox };
