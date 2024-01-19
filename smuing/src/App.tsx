import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import ProjectsPage from './pages/ProjectsPage'

// import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    // <Routes>
    //   <Route path="/umc" element={<Layout />} />
    //   <Route path="/rookie" element={<Layout />} />
    //   <Route path="/likelion" element={<Layout />} />
    //   <Route path="/iniro" element={<Layout />} />
    // </Routes>
    <div className="">
      <Navbar />
      <ProjectsPage />
      <Footer />
    </div>
  )
}

export default App
