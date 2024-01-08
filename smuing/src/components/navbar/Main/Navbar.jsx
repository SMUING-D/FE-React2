import { useDispatch } from 'react-redux';
import SvgIcon from '@mui/material/SvgIcon';
import MenuIcon from '@mui/icons-material/Menu';
import * as S from './Navbar.style';
import { sidebarOpen } from '../../../redux/slices/sidebarSlice';
import { useScroll } from '../../../hooks/useScroll';
import { BROWSER_PATH } from '../../../constants/path';
import { clickMemberActive } from '../../../redux/slices/memberTabSlice';

const Navbar = () => {
  const { y } = useScroll();
  const dispatch = useDispatch();

  const handleSidebar = () => {
    dispatch(sidebarOpen());
  };

  return (
    <S.NavWrapper isShow={y < 100 ? true : false}>
      <S.LinkHome to={BROWSER_PATH.BASE}>SMUMC</S.LinkHome>
      <S.NavMenuWrapper>
        <S.LinkMenu to={BROWSER_PATH.PROJECTS.BASE}>PROJECTS</S.LinkMenu>
        <S.LinkMenu
          to={BROWSER_PATH.MEMBERS.ACTIVE}
          onClick={() => {
            dispatch(clickMemberActive());
          }}
        >
          MEMBERS
        </S.LinkMenu>
        <S.LinkMenu to={BROWSER_PATH.NOTICES.BASE}>NOTICES</S.LinkMenu>
      </S.NavMenuWrapper>
      <S.BurgerMenuWrapper>
        <SvgIcon component={MenuIcon} onClick={handleSidebar} />
      </S.BurgerMenuWrapper>
    </S.NavWrapper>
  );
};

export default Navbar;
