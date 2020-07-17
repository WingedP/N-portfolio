import React from 'react'
import './pagestyles/skills.css';
import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VisibilitySensor from "react-visibility-sensor";
import Fade from 'react-reveal/Fade';


export default function Skills() {
    return (<div className="skills">            
<TitleSection/>
<Overall/>
<Fade bottom><div className="skills-subtext">3 months of programming since 2020.</div>
</Fade>
<Skillsets/>
<Fade bottom>
<div className="skills-subtext final-skillsubtext">
  <div className="skills-subtext-inner">  ... and of course, 
  English's fluency
  <img className="softskill-icons" src='./images/skill-english.png'></img>
  , 
  teamwork   <img className="softskill-icons" src='./images/skill-teamwork.png'></img>
, 
  curiosity   <img className="softskill-icons" src='./images/skill-curious.png'></img> 
  and good sense of humor   <img className="softskill-icons" src='./images/skill-humor.png'></img>
 during hard time.
  </div>

  </div>
  </Fade>

</div>
    )
}


function TitleSection(){
    return(
        <div>
<Fade bottom>
<div className="title">

<svg className="marker" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#8A3FFC" d="M52.8,-47.8C68.1,-37.4,80.1,-18.7,81.7,1.6C83.2,21.9,74.4,43.7,59.1,54.6C43.7,65.6,21.9,65.5,0.3,65.2C-21.2,64.9,-42.4,64.3,-53.4,53.4C-64.3,42.4,-65,21.2,-64.3,0.7C-63.6,-19.8,-61.5,-39.6,-50.5,-49.9C-39.6,-60.3,-19.8,-61.2,-0.5,-60.6C18.7,-60.1,37.4,-58.1,52.8,-47.8Z" transform="translate(100 100)" />
</svg>

<div className="title-text"> 
 <span className="title-1stletter">S</span>KILLS:</div>
  </div></Fade>
<Fade bottom delay={50}><div className="skills-subtext">To create something from nothing, yay!</div></Fade>
</div>
    )
}

function Overall(){
return(
  <Fade>
<div className="overall">
<div className="overall-inner">
  <div  className="overall-inner2">  
  <div className="skillstextitem">      
    <i class="fas fa-code skillicons"></i> 
    <div>MERN Stack</div>
</div>   
<div className="skillstextitem">           
<i class="fas fa-globe skillicons"></i> 
<div>
<div style={{fontWeight:"bold"}}> Frontend: </div>
Html/Css/Js, ReactJs, Bootstrap </div>
</div>
</div>



<div  className="overall-inner2"> 
<div className="skillstextitem">           
<i class="fas fa-cubes skillicons"></i>  
<div>
  <div  style={{fontWeight:"bold"}}>  Backend:</div>

   NodeJs, Express, MongoDB</div>

</div>

<div className="skillstextitem">           
<i class="fas fa-project-diagram skillicons"></i> 
More than 10 individual & collaborative projects
</div> 
</div>

 

</div>


</div>
</Fade> )
}


function Skillsets(){
    return(<div className="skillsets">

<div className="skill-pad">
<div><img className="skill-icons" src="./images/html.png"></img>
<img className="skill-icons" src="./images/css.png"></img></div>
          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 75 : 0;
              return (
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                />
              );
            }}
          </VisibilitySensor>
        </div>

<div className="skill-pad">
<div><img className="skill-icons skill-iconsjs" src="./images/js.png"></img>
<img className="skill-icons" src="./images/react.png"></img>
</div>
          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 80 : 0;
              return (
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                />
              );
            }}
          </VisibilitySensor>
        </div>


        <div className="skill-pad">
<div>
<img className="skill-icons routericon" src="./images/router.png"></img>
<img className="skill-icons" src="./images/redux.png"></img>
</div>
          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 70 : 0;
              return (
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                />
              );
            }}
          </VisibilitySensor>
        </div>

<div className="skill-pad">
<div>
<img className="skill-icons" src="./images/node.png"></img>
<img className="skill-icons" src="./images/mongo.png"></img>
</div>
          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 70 : 0;
              return (
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                />
              );
            }}
          </VisibilitySensor>
        </div>




    </div>
    )
}