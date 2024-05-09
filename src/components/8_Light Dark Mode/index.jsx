import React from 'react'
import "./theme.css"
import useLocalStorage from './useLocalStorage'

function LightDarkMode() {
    const [theme, setTheme] = useLocalStorage('theme', 'dark')
    function handleToggleTheme(){
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
  return (
    <div className='light-dark-mode' data-theme={theme}>
        <div className="container">
            <p>Light and Dark Mode</p>
            <button onClick={handleToggleTheme}>Change Theme</button>
        </div>
    </div>
  )
}

export default LightDarkMode