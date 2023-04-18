import React from "react";
import img from '../../assets/stepper.svg'
import Collapse from '@mui/material/Collapse';
import ProjectCard from "./project-card";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay, Pagination} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Divider, Group, Text } from '@mantine/core';
import hakfarhayarok from '../../assets/kfar-logo-new-1.png'
import scrimba from '../../assets/scrimba.png'
import freecodecamp from '../../assets/FreeCodeCamp_logo.svg.png'
import projectsEN from '../../assets/projects-en.json'
import projectsHE from '../../assets/projects-HE.json'





export default function Content(props){
    const [checked, setchecked] = React.useState(true)
    const [checked1, setchecked1] = React.useState(true)
    const [checked2, setchecked2] = React.useState(true)
    const [checked3, setchecked3] = React.useState(true)

  




  
    
    return(
        <div className="content">

            
            <ul>

                <li><div className="topic"><img className="step" src={img} onClick={()=> setchecked(!checked)}></img> <p className="step" onClick={()=> setchecked(!checked)}>{props.language ? "profile" : "פרופיל"}</p> </div>   <Collapse className="collapses" in={checked}>
                  <div className="about" >  { props.language ? <p className="en">Hi, I'm or cohen, an 18-year-old currently majoring in physics and computer science in high school. I have a strong passion for learning and exploring new technologies, and much of my computer science study has been self-directed. I consider myself an autodidact and love the challenge of teaching myself new skills and concepts.

While I have dabbled in various areas of computer science, my current focus is on web development with React. I have spent a significant amount of time learning and practicing web app development, and have completed several personal projects using React. I am constantly seeking new ways to improve my skills and build my portfolio.

In addition to my technical skills, I have developed strong problem-solving and analytical skills through my studies in physics and computer science. I am also a dedicated and hardworking individual, and am committed to achieving my goals and constantly challenging myself.
                  </p> : <p className="he">היי, אני או כהן, ילד בן 18 שמתמחה כיום בפיזיקה ומדעי המחשב בתיכון. יש לי תשוקה עזה ללמוד ולחקור טכנולוגיות חדשות, וחלק גדול מלימודי מדעי המחשב הועבר בעצמי. אני מחשיב את עצמי כאוטודידקט ואוהב את האתגר ללמד את עצמי מיומנויות ומושגים חדשים.

בעוד שהתעסקתי בתחומים שונים של מדעי המחשב, ההתמקדות שלי כרגע היא בפיתוח אתרים עם React. ביליתי הרבה זמן בלמידה ותרגול של פיתוח אפליקציות אינטרנט, והשלמתי מספר פרויקטים אישיים באמצעות React. אני כל הזמן מחפש דרכים חדשות לשפר את הכישורים שלי ולבנות את תיק העבודות שלי.

בנוסף לכישורי הטכניים, פיתחתי מיומנויות חזקות של פתרון בעיות ואנליטיות במהלך לימודיי בפיזיקה ומדעי המחשב. אני גם אדם מסור וחרוץ, ומחויב להגשים את המטרות שלי ולאתגר את עצמי כל הזמן.</p>} </div>
               
                  </Collapse></li>
                <li><div className="topic"><img className="step" src={img} onClick={()=> setchecked1(!checked1)}></img> <p className="step" onClick={()=> setchecke1(!checked1)}>{props.language ? "recent projects" : "פרויקטים אחרונים"}</p> </div>   
                <Collapse className="collapse" in={checked1}>
                <Swiper
       slidesPerView={2}
       spaceBetween={6}
       loop={true}
       autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
   

       modules={[ Autoplay, Pagination]}
        className="carousel"
      >
     
        {
           props.language ? 
           projectsEN.map((project, index)=>(
              <SwiperSlide><ProjectCard project={project} index={index}/></SwiperSlide>
    
            )): 
            projectsHE.map((project, index)=>(
              <SwiperSlide><ProjectCard project={project} index={index}/></SwiperSlide>
    
            ))

        }
    
      </Swiper>
                    </Collapse></li>

                <li><div className="topic"><img className="step" src={img} onClick={()=> setchecked2(!checked2)}></img> <p className="step" onClick={()=> setchecked2(!checked2)}>skills</p> </div>   
                <Collapse className="collapse" in={checked2}>
                <Box sx={{ flexGrow: 1 }} className="skills" >
      <Grid container  spacing={{ xs: 2 }} className="grid"  >
        <Grid className="skill"  item xs={3}>
        <Group className="group corner1">
        <p className="p">python</p>
        </Group>
        </Grid>
        <Grid className="skill" item xs={3}>
        <Group className="group top">
        <p className="p">java</p>
        </Group>
        
         
        </Grid>
        <Grid className="skill" item xs={3}>
        <Group className="group top">
        <p className="p">git</p>
        </Group>
        
        </Grid>
        <Grid className="skill" item xs={3}>
        <Group className="group corner2">
        <p className="p">fastApi</p>
        </Group>
  
        </Grid>
       
        <Grid className="skill" item xs={6}>
        <Group className="group right">
        <p className="p">node js</p>
      <Divider className="devider" size="sm" orientation="vertical" />
      <p className="p">express</p>
      </Group>
     
        </Grid>
        <Grid className="skill" item xs={6}>
        <Group  className="group left">
        <p className="p">mongo db</p>
      <Divider className="devider" size="sm" orientation="vertical" />
      <p className="p" >react js</p>
      </Group>
  
        </Grid>
        <Grid className="skill" item xs={6}>
        <Group className="group corner3" >
        <p className="p">ML</p>
      <Divider className="devider" size="sm" orientation="vertical" />
      <p className="p">jwt</p>
      <Divider className="devider" size="sm" orientation="vertical" />
      <p className="p">oauth*</p>
      </Group>
  
        </Grid>
        <Grid className="skill" item xs={4}>
        <Group className="group bottom">
        <p className="p">js</p>
      <Divider className="devider" size="sm" orientation="vertical" />
      <p className="p">html</p>
      <Divider className="devider" size="sm" orientation="vertical" />
      <p className="p">css</p>
      </Group>
  
        </Grid>
        <Grid className="skill " item xs={2}>
        <Group className="group corner4">
        <p>scss</p>
        </Group>
  
        </Grid>
      </Grid>
    </Box>
                     </Collapse></li>


                     <li><div className="topic"><img className="step" src={img} onClick={()=> setchecked3(!checked3)}></img> <p className="step" onClick={()=> setchecked(!checked)}>education</p> </div>   <Collapse className="collapse" in={checked3}>
                        <div className="education">
                            <div className="left card ">
                                <div className="head" >
                                    <img className="logo" src={hakfarhayarok}></img>
                                    <h3 className="title"> Hakfar Hayarok</h3>
                                </div>
                                <h3 className="description"> high school</h3>
                                <p className="date"> jun 2023-sep 2017</p>
                            </div>
                            <div className="card middle">
                            <div className="head" >
                                    <img className="logo" src={scrimba}></img>
                                    <h3 className="title"> Scrimba</h3>
                                </div>
                                <h3 className="description">11+ hours react course</h3>
                                <p className="date"> apr 2022</p>
                            </div>
                            <div className="card right ">
                            <div className="head" >
                                    <img className="logo" src={freecodecamp}></img>
                                    <h3 className="title"> free code camp</h3>
                                </div>
                                <h3 className="description">free online courses</h3>
                                <p className="date">2021-today </p>
                            </div>

                        </div>
                        </Collapse></li>



            </ul>
       
           
       

        </div>
    )
}