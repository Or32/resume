import React from "react";
// import img from 'images/explained2a6yo.png'
import { Badge } from '@mantine/core';
import link from '../../assets/link.svg'
import projects from '../../assets/projects-en.json'






export default function ProjectCard(props){
  

    
    return(
        <div className="projectCard">

            <h2>{props.project.topic} </h2>
            <img src={projects[props.index].img}></img>
            <div className="bubble middle">

            <h3>{props.project.title}title</h3>
            </div>
            <div className="bubble bottom" >
            <p>{props.project.description}
            </p>
            <hr></hr>
            <div className="link">
      
                <img src={link}></img>
                <a href={props.project.link}>{props.project.linkNice}</a>
            </div>
           
            </div>
            <h5>  {props.project.stack.join(' | ')}</h5>
         
        
      
        </div>
    )
}