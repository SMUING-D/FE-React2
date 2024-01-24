import { Route, Routes } from 'react-router-dom'

import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import MemberActive from './pages/MemberActive'
import MemberAll from './pages/MemberAll'
import MemberDetail from './pages/MemberDetail'
import ProjectsPage from './pages/ProjectsPage'

function App() {
  return (
    <Routes>
      {/* <Route path="/umc" element={<Layout />} />
      <Route path="/rookie" element={<Layout />} />
      <Route path="/likelion" element={<Layout />} />
      <Route path="/iniro" element={<Layout />} /> */}
      <Route path="/members/active" element={<MemberActive />} />
      <Route path="/members/all" element={<MemberAll />} />
      <Route path="/members/:id" element={<MemberDetail />} />
      <Route path="/project" element={<ProjectsPage />} />
    </Routes>
    // <div className="">
    //   <Navbar />
    //   <ProjectsPage />
    //   <Footer />
    // </div>
  )
}

export default App
