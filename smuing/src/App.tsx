import { Route, Routes } from 'react-router-dom'

import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import MainPage from './pages/MainPage'
import MemberActive from './pages/MemberActive'
import MemberAll from './pages/MemberAll'
import ProjectsPage from './pages/ProjectsPage'

function App() {
  return (
    // <Routes>
    //   <Route path="/umc" element={<Layout />} />
    //   <Route path="/rookie" element={<Layout />} />
    //   <Route path="/likelion" element={<Layout />} />
    //   <Route path="/iniro" element={<Layout />} />
    // </Routes>
    // <div className="">
    //   <ProjectsPage />
    // </div>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/members/active" element={<MemberActive />} />
        <Route path="/members/all" element={<MemberAll />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
