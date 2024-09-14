import { useEffect, useState } from 'react'
import './App.css'
import Layout from './Layout/Layout'
import { ThemeProvider } from './Context/ThemeContext'

function App() {
  const [theme,setThemeMode]=useState(localStorage.getItem('theme')||"light")

  const lightTheme=()=>{
    setThemeMode("light")
  }

  const darkTheme=()=>{
    setThemeMode("dark")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('dark','light')
    document.querySelector('html').classList.add(theme)
    localStorage.setItem('theme', theme);
  },[theme])

  return (

      <ThemeProvider value={{themeMode:theme,lightTheme,darkTheme}}>
        <Layout/>
      </ThemeProvider>
  )
}

export default App
