import React from 'react'
import './pagestyles/experiences.css';
import Fade from 'react-reveal/Fade';

export default function Experiences() {
return (<div className="experiences">
<TitleSection/>
<div className="experiences-inner"><About/><Resume/></div>

</div>)}



function TitleSection(){
  return(<div>
<Fade bottom>    
<div className="experiences-title">
<svg className="marker" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#ff82aa" d="M50.2,-51.1C62.4,-38,67.9,-19,65.7,-2.1C63.6,14.7,53.9,29.5,41.7,40.1C29.5,50.8,14.7,57.5,-2.3,59.7C-19.3,62,-38.6,59.9,-49.4,49.3C-60.1,38.6,-62.4,19.3,-64.1,-1.7C-65.8,-22.7,-67,-45.4,-56.2,-58.5C-45.4,-71.6,-22.7,-75.1,-1.9,-73.3C19,-71.4,38,-64.2,50.2,-51.1Z" transform="translate(100 100)" />
</svg>

<div className="title-text"> 
<span className="title-1stletter">A</span>BOUT ME</div>
</div>
</Fade>
<Fade bottom delay={50}>    
<div className="experiences-subtext">in complicated relationship
<img className="computerlove" src="./images/computerlove.png"></img>
 with programming;</div></Fade>

</div>
  )
}

function About(){return(<div className="aboutme">
<Fade>    
<div className="aboutme-inner">
  <span>From lines of codes into useful applications like</span> <br />
<span className="fb">Facebook</span>, 
<span className="ins">Instagram</span> and 
<span className="yt">Youtube</span>? 
</div>
<div className="aboutme-inner">My first thought: "what kind <span className="mg">magic</span> is that?"
<img className="magicwand" src="./images/magicwand.png"></img>
</div>
<div className="aboutme-inner">And after 3 months of programming, <br /> it turned out the magic is real: it's called 'hard work'.</div>
<div className="aboutme-inner">So yeah, programming is pretty cool, and I'm here to learn.</div>
<div className="aboutme-inner">How far can I go? I don't know, but I'll keep going anyway.</div>
</Fade>
</div> 
)
}

function Resume(){return(

<div className="myresume">
<Coderschool/>
{/* <GalerieQuynh/> */}
<Colory/>
</div>

)

function Coderschool(){return(
  <Fade>
<div className="coderschool"> 
 <div className="jobposition">
<div className="jobposition-inner">
<i class="fab fa-font-awesome-flag timeline-icons"></i> 2020:
<img className="cds-icon" src="./images/CDS.jpeg"></img>CODERSCHOOL
  </div>  

<div className="jobposition-inner2">Student / Alumni</div>
      
 </div>



<div className="expContents">
        Web's structure. Software development. Frontend. Backend. Programming languages. Teamwork. Learn new things everyday.
        </div>    
          </div></Fade>
  )
  }
function GalerieQuynh(){return(<div className="galeriequynh">
  <div className="jobposition" > 
<div className="jobposition-inner">  
<i class="fas fa-check-double timeline-icons"></i>  
  2018 – 2019: Gallerie Quynh
 </div>

  <div className="jobposition-inner2">Assistant / content writer</div>

  </div>
  <div className="expContents" >
   Content writer - translator for proposals, briefs, FB activities for art festivals and events. 
  </div>        
  </div>)
  }
function Colory(){return(  <Fade>
  <div className="colory">
  <div className="jobposition"  >
    <div className="jobposition-inner">    
  <i class="fas fa-check-double timeline-icons" ></i> 2016 – 2018: Colory animation </div>
    <div className="jobposition-inner2">3D artist / animator</div>

    </div>
   <div className="expContents" >
   Created animated TVCs for commercial projects and cartoon movies with Maya 3D software.

</div>
</div></Fade>)
  }
}