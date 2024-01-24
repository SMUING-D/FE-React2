import { Route, Routes } from 'react-router-dom'

import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
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
    <>
      <Navbar />
      <Routes>
        <Route path="/members/active" element={<MemberActive />} />
        <Route path="/members/all" element={<MemberAll />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      {/* <Footer /> */}
    </>
    // <div className="">
    //   <ProjectsPage />
    // </div>
  )
}

export default App
