import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import './style.css'
import img from './assets/react.svg'  
import Resume from './resume/resume'

function App() {
  const [mode, setmode ] = useState(true)
  const [language, setlanguage ] = useState(false)

  //var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    // if (storedTheme){
    //     document.documentElement.setAttribute('data-theme', storedTheme)
    //     function theme() {
    //         var currentTheme = document.documentElement.getAttribute("data-theme");
    //         var targetTheme = "light";
        
    //         if (currentTheme === "light") {
    //             targetTheme = "dark";
    //         }
        
    //         document.documentElement.setAttribute('data-theme', targetTheme)
    //         localStorage.setItem('theme', targetTheme);
    //     };
  
    // }
          //console.log(storedTheme)

  return (
    <div className='stage'>
      <div className='settings'>
        <button className='mode' onClick={()=> {setmode(!mode);  document.documentElement.setAttribute('data-theme', "dark") }}>{mode ? "dark" : "light"}</button>
        <button className='language' onClick={()=> setlanguage(!language)}>{language ? "EN" : "HE"}</button>

     
      </div>
        <h1 > resume</h1>
        <Resume className="after" mode={mode} language={language}/>

    </div>
   
  )
}

export default App
