import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import AddAnnounce from './pages/AddAnnounce'
import AddProjectPage from './pages/AddProject'
import FormPage from './pages/FormPage'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import MemberActive from './pages/MemberActive'
import MemberAll from './pages/MemberAll'
import MemberDetail from './pages/MemberDetail'
import ProjectsPage from './pages/ProjectsPage'
import { RootState } from './redux/store/store'

function App() {
  const currentPath = window.location.pathname
  const { isOpen } = useSelector((state: RootState) => state.sidebar)

  return (
    <>
      {/* 특정 경로에서는 Navbar를 렌더링하지 않음 */}
      {currentPath !== '/login' && currentPath !== '/projects/add' && currentPath !== '/announce/add' ? (
        <Navbar />
      ) : null}

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/members/active" element={<MemberActive />} />
        <Route path="/members/all" element={<MemberAll />} />
        <Route path="/members/:id" element={<MemberDetail />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/add" element={<AddProjectPage />} />
        <Route path="/announce/add" element={<AddAnnounce />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Form" element={<FormPage />} />
      </Routes>

      {/* 이것도 마찬가지로 특정경로에서는 푸터 없음 */}

      {isOpen && <Sidebar />}
      {/* {currentPath !== '/login' && currentPath !== '/projects/add' ? <Footer /> : null} */}

      {currentPath !== '/login' && currentPath !== '/projects/add' && currentPath !== '/announce/add' ? (
        <Footer />
      ) : null}
    </>
  )
}

export default App
