import React, { useState, useEffect } from "react";

import Header from "./components/header";
import Info from "./components/info";
import Content from "./components/content";

let number = 2
export default function Resume(props){
    const [finish, setfinish] = React.useState(false)
    


    var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute('data-theme', props.mode ?   "light": "dark")
    document.documentElement.setAttribute('lan', props.language ?   "english": "hebrew")

    console.log(props.mode)
    // if (storedTheme){
    //     document.documentElement.setAttribute('data-theme', "dark") //storedTheme
    //     function theme() {
    //         var currentTheme = document.documentElement.getAttribute("data-theme");
    //         var targetTheme = "light";
        
    //         if (currentTheme === "light") {
    //             targetTheme = "dark";
    //         }
        
    //         document.documentElement.setAttribute('data-theme', targetTheme)
    //         localStorage.setItem('theme', targetTheme);
    //     };
    //     //console.log(storedTheme)
    // }
    function run(){
        function easeInOut(t) {
            return -0.5 * (Math.cos(Math.PI * t) - 1);
          }
          
          function transition(x) {
            return 2 + easeInOut(x / 3) * (10 - 2);
          }
          let counter = 0;
          let intervalId = setInterval(() => {
            counter += 10;
            console.log(counter);
            document.documentElement.style
    .setProperty('--ratio', transition(counter/10000) );
    setfinish(true)

            if (counter >= 3000) {
              clearInterval(intervalId);
            }
          }, 10);
          
          
          
    }

      

  
    return(
        
        <div className={ finish ? "card-after": "card"} >
         
            <div class={finish? "card__content-after effect": "card__content  "  }>
        <div className={ finish? "resume-after": "resume"} onClick={()=> finish ? "" : run()}>
               
          
            <div className="left">
                <Header storedTheme={props.mode}></Header>
                <Info storedTheme={props.mode}></Info>
                
            </div>
            <div className="right">
                <Content storedTheme={props.mode} language={props.language}></Content>
            </div>

        </div>
        <div class={finish ? "card__back-after": "card__back"}>
      <p class="card__body">or cohen</p>
       </div>
       </div>
        </div>
    )
}