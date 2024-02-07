import styled from 'styled-components';
import theme from '../../theme';
import { FONT_SIZE, RESPONSIVE_SIZE } from '../../constants/size';
const Container = styled.div`
  ${theme.ALIGN.ROW_CENTER};
`;

const PartBox = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  padding: 10px;
  width: 60%;
  height: 300px;
`;

const PartNav = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  margin-bottom: 10px;
  min-width: 400px;

  button {
    color: ${theme.COLOR.LIGHT.WHITE};
    font-size: ${FONT_SIZE.XL};
    background: none;
    border: none;

    &:hover {
      color: ${theme.COLOR.LIGHT.YELLOW};
    }

    &.selected {
      color: ${theme.COLOR.LIGHT.YELLOW};
    }
  }
`;

const PartContents = styled.div`
  background-color: #232731;
  color: white;
  padding: 50px;
  width: 90%;
  height: 80%;
  border-radius: 30px;
  min-width: 400px;
`;
export { Container, PartBox, PartNav, PartContents };
