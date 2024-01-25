import { Route, Routes } from 'react-router-dom'

import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import MemberActive from './pages/MemberActive'
import MemberAll from './pages/MemberAll'
import MemberDetail from './pages/MemberDetail'
import ProjectsPage from './pages/ProjectsPage'

function App() {
  const currentPath = window.location.pathname

  return (
    <>
      {/* 로그인 페이지에서는 Navbar를 렌더링하지 않음 */}
      {currentPath !== '/login' && <Navbar />}

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/members/active" element={<MemberActive />} />
        <Route path="/members/all" element={<MemberAll />} />
        <Route path="/members/:id" element={<MemberDetail />} />
        <Route path="/project" element={<ProjectsPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
    // <div className="">
    //   <ProjectsPage />
  )
}

export default App
