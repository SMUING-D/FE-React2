import { Route, Routes } from 'react-router-dom'

import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import AddAnnounce from './pages/Announce/AddAnnounce'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import MemberActive from './pages/MemberActive'
import MemberAll from './pages/MemberAll'
import MemberDetail from './pages/MemberDetail'
import ProjectsPage from './pages/ProjectsPage'
import AddProject from './pages/project/AddProject'

function App() {
  const currentPath = window.location.pathname

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
        <Route path="/projects/add" element={<AddProject />} />
        <Route path="/announce/add" element={<AddAnnounce />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

      {/* 이것도 마찬가지로 특정경로에서는 푸터 없음 */}
      {currentPath !== '/login' && currentPath !== '/projects/add' && currentPath !== '/announce/add' ? (
        <Footer />
      ) : null}
    </>
    // <div className="">
    //   <ProjectsPage />
  )
}

export default App
