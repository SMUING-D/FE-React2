import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div>
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold">Your Logo</div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white">Home</a>
            <a href="#" className="text-white">About</a>
            <a href="#" className="text-white">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  
  </div>
  );
}

export default App;