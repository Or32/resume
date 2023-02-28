import React from "react";
import gmail from '../../assets/gmail.svg'
import phone from '../../assets/phone.svg'
import adress from '../../assets/adress.svg'
import linkedin from '../../assets/linkedin.svg'
import git from '../../assets/github.svg'

import english from '../../assets/usa.svg'
import darklocation from '../../assets/darkphone.svg'
import darkphone from '../../assets/darklocation.svg'
import darkEmail from '../../assets/darkEmail.svg'
import herbrew from '../../assets/israelFlag.svg'







export default function Info(props){
    
   
    return(
    <div className="info">
        
         <hr className="solid"></hr>
        <ul >
         
            <li className="row"><img src={props.storedTheme ? gmail : darkEmail}></img>
            <div className="text">
            <p>gmail</p><h3>cohenor32@gmail.com</h3>
            </div></li>
        
            <li className="row"><img src={props.storedTheme  ?phone: darkphone}></img>
            <div className="text"><p>phone</p><h3>050-9969978</h3> 
                </div></li>
      
            <li className="row"><img src={props.storedTheme  ?adress: darklocation}></img> 
            <div className="text"><p>adress</p><h3>Tel aviv, Israel</h3>
            </div></li>


        </ul>
        <hr className="solid"></hr>
        <ul  className="social">
             <p>social</p>
            <li className="row"><a href="https://github.com/Or32" target="_blank"><img src={git} ></img></a>
            <div className="text"><p>github</p><h3>https://github.com/Or32</h3> 
            </div></li>

            <li className="row"><a href="https://www.linkedin.com/in/or-cohen-369685227/" target="_blank"><img src={linkedin}></img></a>
            <div className="text">
            <p>Linkedin</p><h3>or-cohen-369685227</h3>
            </div></li>
      
        </ul>
        <hr className="solid"></hr>

        <ul className="language">
             <p>language</p>
            <li className="row"><img src={herbrew}></img>
            <div className="text"><p>hebrew</p> <h3>native</h3>
            </div></li>
            <li className="row"><img src={english}></img>
            <div className="text"><p>english</p> <h3>native</h3>
            </div></li>
         
      
        </ul>
    </div>)
}