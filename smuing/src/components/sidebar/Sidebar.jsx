import * as S from './Sidebar.style';

import SvgIcon from '@mui/material/SvgIcon';
import CloseIcon from '@mui/icons-material/Close';
import { BROWSER_PATH } from '../../constants/path';

import { useDispatch } from 'react-redux';
import { sidebarClose } from '../../redux/slices/sidebarSlice';

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleSidebar = () => {
    dispatch(sidebarClose());
  };

  return (
    <S.Wrapper>
      <S.CloseBtn>
        <SvgIcon component={CloseIcon} onClick={handleSidebar} />
      </S.CloseBtn>
      <S.MenuContainer>
        <S.LinkMenu to={BROWSER_PATH.PROJECTS.BASE} onClick={handleSidebar}>
          PROJECTS
        </S.LinkMenu>
        <S.LinkMenu to={BROWSER_PATH.MEMBERS.BASE} onClick={handleSidebar}>
          MEMBERS
        </S.LinkMenu>
        <S.LinkMenu to={BROWSER_PATH.NOTICES.BASE} onClick={handleSidebar}>
          NOTICES
        </S.LinkMenu>
      </S.MenuContainer>
    </S.Wrapper>
  );
};
export default Sidebar;
