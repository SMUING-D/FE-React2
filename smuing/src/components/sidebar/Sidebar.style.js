import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import theme from '../../theme';
import { FONT_SIZE } from '../../constants/size';

const Wrapper = styled.div`
  position: fixed;
  height: 100%;
  z-index: 1000;
  width: 100%;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.9);
`;

const CloseBtn = styled.button`
  position: fixed;
  border: none;
  background-color: ${theme.COLOR.TRANSPARENT};
  color: ${theme.COLOR.LIGHT.WHITE_GRAY};
  top: 20px;
  right: 20px;
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
  }
`;

const MenuContainer = styled.div`
  height: 100%;
  gap: 200px;
  ${theme.ALIGN.COLUMN_CENTER}
`;

const LinkMenu = styled(NavLink)`
  text-decoration: none;
  color: ${theme.COLOR.LIGHT.WHITE};
  font-size: ${FONT_SIZE.THREE_XL};

  &.active {
    color: ${theme.COLOR.LIGHT.YELLOW};
  }
`;

export { Wrapper, CloseBtn, MenuContainer, LinkMenu };
