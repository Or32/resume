import React from "react";
import Avatar from '@mui/material/Avatar';
import img from '../../assets/image.svg'



export default function Header(props){
    function click(){
        document.documentElement.style
    .setProperty('--width', '30em');
    }
    return(
        <div className="header">

            <img src={img} />
      
            <p className=" name">or cohen</p>
            <p className=" roll">full stack dev</p>
            <p className=" quote">"It's not work if you enjoy it"</p>
            <p className=" byme">by me</p>
           
        </div>
    )
}