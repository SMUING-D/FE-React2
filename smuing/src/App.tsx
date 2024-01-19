import './App.css'
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
    <div className="flex">
      <Navbar />
      <ProjectsPage />
    </div>
  )
}

export default App
