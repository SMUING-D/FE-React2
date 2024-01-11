import * as S from './MainLayout.style';
import { Outlet } from 'react-router-dom';
import { Footer, Navbar, Sidebar } from '../../components';
import { useSelector } from 'react-redux';

const MainLayout = () => {
  const { isOpen } = useSelector(state => state.sidebar);

  return (
    <S.Wrapper>
      <Navbar />
      <Outlet />
      {isOpen && <Sidebar />}
      <Footer />
    </S.Wrapper>
  );
};

export default MainLayout;
