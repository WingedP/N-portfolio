import React from 'react'
import './pagestyles/landing.css';
import Fade from 'react-reveal/Fade';
import Jello from 'react-reveal/Jello';


export default function Landing() {
    return (<div className="landing">


<div className="mylanding">

<div className="name-section">

<div className="landing-name">
<Fade bottom>
<div className="name nhan">

  Nh
  <span className="aletter"><div>a</div><i class="symbolup fas fa-chevron-up"></i></span>
  n
  </div></Fade>

<Fade bottom delay={100}>
<div className="name nguyen">

<span className="openletter2">

<Fade right delay={150}> <div ><i class="cchevron fas fa-chevron-left"></i></div></Fade>
<Fade delay={200}><div className="openletter3">N</div></Fade>
<Fade left delay={150}><div ><i class="cchevron fas fa-chevron-right"></i></div></Fade>

</span>
guy
<span className="aletter"><div>e</div><i class="symbolup fas fa-chevron-up"></i><div className="symbolup2">~</div></span>


n</div></Fade>

</div>
<Fade bottom><div className="landing-subtext">
 <div><span>Simple. A </span>
<span className="frontend">front-end</span>
</div> 

<div className="fading-subtext">
  <Jello delay={500}>(baby)</Jello>
<span className="dev">developer</span>.</div>
</div></Fade>


</div>


<Fade direction="">
<div className="ava-overwrapper">
  
<svg className="landing-blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">

<defs>
<linearGradient id="header-shape-gradient" x2="0.35" y2="1">
        <stop offset="20%" stop-color="var(--color-stop)" />
        <stop offset="50%" stop-color="var(--color-stop)" />
        <stop offset="100%" stop-color="var(--color-bot)" />
      </linearGradient>
    <linearGradient id="header-shape-gradient2" x2="0.35" y2="1">
        <stop offset="20%" stop-color="var(--color-stop2)" />
        <stop offset="50%" stop-color="var(--color-stop2)" />
        <stop offset="100%" stop-color="var(--color-bot2)" />
      </linearGradient>
  </defs>
  <path className="landinblob-path" 
  transform="translate(100 100)"
  
  />
</svg>
  
<img className="flower" src="../images/homeimgbackground.png"></img>
  <div className="avatar-wrapper">
    <img className="avatar" src="../images/me.png"></img></div>
  
</div>
</Fade>
</div>


<div className="section-3">

<div className="down-container">
  <div className="chevron"></div>
  <div className="chevron"></div>
  <div className="chevron"></div>
  <span className="down-text">Scroll down</span>
</div>

</div>

        </div>
    )
}
