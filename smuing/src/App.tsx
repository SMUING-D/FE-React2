import './App.css'

// import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    // <Routes>
    //   <Route path="/umc" element={<Layout />} />
    //   <Route path="/rookie" element={<Layout />} />
    //   <Route path="/likelion" element={<Layout />} />
    //   <Route path="/iniro" element={<Layout />} />
    // </Routes>
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-white font-bold">Your Logo</div>
            <div className="hidden md:flex space-x-4">
              <a href="#" className="text-white">
                Home
              </a>
              <a href="#" className="text-white">
                About
              </a>
              <a href="#" className="text-white">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default App
