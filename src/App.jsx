import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Home from './components/Home';
import Footer from './components/Footer';
import Core from './components/Core';
import Navbar from './components/Navbar'

import { ThemeContext } from './context/theme';
import { useContext } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const { themename, toggeltheme } = useContext(ThemeContext);

  return (
    <>
      
    <div className={ themename==="dark" ? "da":"la"}>
      <Navbar />
         <Home />
       <Core />
       <Footer />
       </div>
    </>
  )
}

export default App
