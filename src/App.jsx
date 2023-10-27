import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'

import { ThemeContext } from './context/ThemeContext'
import { useState } from 'react'

function App() {
  const [isDark, setTheme] = useState(false)
  const toggleTheme = () => {
    setTheme(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <>
      <ThemeContext.Provider value={{isDark, toggleTheme}}>
        <Navbar />
        <Main />
      </ThemeContext.Provider>
    </>
  )
}

export default App
