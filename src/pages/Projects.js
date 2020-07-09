import React from 'react'
import './pagestyles/projects.css';
import {Link} from 'react-scroll';

import Tilt from 'react-parallax-tilt';

export default function Projects() {

return (<div className="projects">


<div>
<div className="title">
<svg className="marker" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FA4D56" d="M53.1,-58.2C68.4,-50.5,80.1,-33.3,83.7,-14.5C87.3,4.3,82.9,24.8,71.3,37.6C59.6,50.4,40.9,55.6,22.7,61.9C4.6,68.2,-12.8,75.8,-26.5,71.4C-40.2,67.1,-50.2,50.9,-55.4,35.2C-60.7,19.5,-61.2,4.3,-58.6,-10.2C-55.9,-24.8,-50,-38.7,-39.7,-47.3C-29.4,-56,-14.7,-59.4,2.1,-61.9C18.9,-64.4,37.8,-66,53.1,-58.2Z" transform="translate(100 100)" />
</svg>
<div className="title-text"> 
 <span className="title-1stletter">W</span>ORK:</div>
  </div>

<div className="subtext">Some <span className="capstone">capstone projects</span> made within <span className="capstonetime">3 months</span>:</div>
<div className="subtext">Wanna see more? Check my 
<a className="gitlink-projects" href="https://github.com/WingedP"><i class="fas fa-link"></i> Github
</a>!

</div>
<img className="arrow" src="./images/arrow-icon-1.png"></img>
</div>

<ProjectLinks/>
<div className="projects-wrapper">
<div id="projects-inner" className="projects-inner">
<Gitowl/>  
<Openword/>
<Cineplex/>
<Myweather/>
</div>
</div>
</div>
    )
}


function ProjectLinks(){
    let thumbnailopenword="./images/thumbnail-openword.png";
    let thumbnailcineplex="./images/thumbnail-cineplex.png";
    let thumbnailgitowl="./images/thumbnail-gitowl.png";
    let thumbnailmyweather= "./images/thumbnail-myweather.png";

    let iconGitowl ="./images/icon-gitowl.png";
    let iconCineplex ="./images/icon-cineplex.jpg";
    let iconOpenword ="./images/icon-openword.png";
    let iconMyweather ="./images/icon-myweather.png";

    return(<div className="project-links-container">

<div className="project-container-inner">

<Link  className="link-style style1" activeClass="active"  to = "cineplex"  containerId="projects-inner"
spy= {true} smooth={true} offset={-125} duration= {500}>
<div className="project-namez">Cineplex</div>
    <img className="projecticon-size" src={iconCineplex}></img>
    <img className="thumbnail-img" src={thumbnailcineplex}></img>
 </Link>

<Link className="link-style style2"  activeClass="active"  to = "openword" containerId="projects-inner" 
        spy= {true} smooth={true} offset={-125} duration= {500}>
                         <div className="project-namez">Openword</div>

            <img className="projecticon-size" src={iconOpenword}></img>
            <img className="thumbnail-img" src={thumbnailopenword}></img>
    
 </Link>
</div>
<div  className="project-container-inner">
        
<Link className="link-style style4"  activeClass="active"  to = "gitowl" containerId="projects-inner"
         spy= {true} smooth={true} offset={-125} duration= {500}>
                          <div className="project-namez">Gitowl</div>

        <img className="projecticon-size" src={iconGitowl}></img>
        <img className="thumbnail-img" src={thumbnailgitowl}></img>

   </Link>

<Link className="link-style style3"  activeClass="active"  to = "myweather" containerId="projects-inner"
         spy= {true} smooth={true} offset={-125} duration= {500}>
             <div className="project-namez">Myweather</div>
          <img className="projecticon-size" src={iconMyweather}></img>
          <img className="thumbnail-img" src={thumbnailmyweather}></img>

   </Link>


  </div>

      
        
        </div>);
}

function Cineplex(){
    let imagecineplex="./images/cineplex.png";
    return(
<div id="cineplex" className="cineplex project-function" >

<div className="mobile-screen2">
    <div className="mobilescreen-btn"></div>
     <div className="mobilescreen-inner">
     <img className="mobile-gitowl-img" src="./images/mobile-cineplexscreen.jpg"></img>

     </div>
     <div className="mobilescreen-roundbtn"></div>
 </div>

<div className="browser-screen">
<div className="browser-screen-head">
    <div className="head1">
        <div className="head1-tab"></div>
    </div>
    <div className="head2">
<i class="browser-icons fas fa-arrow-left"></i>
<i class="browser-icons fas fa-arrow-right"></i>
<i class="browser-icons fas fa-redo-alt"></i>
<i class="browser-icons fas fa-igloo"></i>
<div className="search-bar"></div>
    <i class=" browser-icons fas fa-hamburger"></i>

    </div>

</div>

<div className="browser-img">
     <img className="project-img" src={imagecineplex}></img>
</div>


</div>

<div className="text">
    <div className="project-name">Cineplex</div>
    <div className="project-details">
Frond-end only Imdb's clone! With API from TMDB/"The Movie Database". 
I like this project so much I made it twice (actually because the first was a design's failure haha :sadface: ).
    </div>
    <div className="project-links">
<a className="projectbtn" href="https://github.com/WingedP/Cineplex"><i class="fab fa-github"></i></a>
<a className="projectbtn" href="https://cineplex.netlify.app/"><i class="fas fa-laptop"></i></a>
    </div>

</div>
</div>
  )}

function Myweather(){
    let imagemyweather="./images/myweather.png";
    return(
<div id="myweather" className="myweather project-function">

<div className="mobile-screen3">
    <div className="mobilescreen-btn"></div>
     <div className="mobilescreen-inner">
     <img className="mobile-gitowl-img" src="./images/mobile-gitowlscreen.jpg"></img>

     </div>
     <div className="mobilescreen-roundbtn"></div>
 </div>

<div className="text">
    <div className="project-name">Myweather</div>
    <div className="project-details">
    Just a simple, responsive weather app designed for mobile. 
I practiced playing around with 3rd-partied APIs (from Openweather and NASA).
I might add air quality later.
    </div>
    <div className="project-links">
<a className="projectbtn" href="https://github.com/WingedP/MyWeather"><i class="fab fa-github"></i></a>
<a className="projectbtn" href="https://myzweather.netlify.app/"><i class="fas fa-laptop"></i></a>
    </div>

</div>



<div className="browser-screen">
<div className="browser-screen-head">
    <div className="head1">
        <div className="head1-tab"></div>
    </div>
    <div className="head2">
<i class="browser-icons fas fa-arrow-left"></i>
<i class="browser-icons fas fa-arrow-right"></i>
<i class="browser-icons fas fa-redo-alt"></i>
<i class="browser-icons fas fa-igloo"></i>
<div className="search-bar"></div>
    <i class=" browser-icons fas fa-hamburger"></i>

    </div>

</div>

<div className="browser-img">
     <img className="project-img" src={imagemyweather}></img>
</div>


</div>
{/* <Tilt tiltReverse={true}>
</Tilt> */}

</div>


  )}












function Openword(){
    let imageopenword="./images/openword.png";
    return(
<div id="openword" className="openword project-function">
<div className="text">
    <div className="project-name">Openword</div>
    <div className="project-details">
My first full-stack project (MERN) - functional, though not quite perfect (WIP).
Instead of buying expensive books on Amazon, 
users can exchange their books' collection on this site.
    </div>
    <div className="project-links">
<a className="projectbtn" href="https://github.com/WingedP/Openword"><i class="fab fa-github"></i></a>
<a className="projectbtn" href="https://openword-temp.netlify.app"><i class="fas fa-laptop"></i></a>
    </div>

</div>
 


<div className="browser-screen">

<div className="browser-screen-head">
    <div className="head1">
        <div className="head1-tab"></div>
    </div>
    <div className="head2">
<i class="browser-icons fas fa-arrow-left"></i>
<i class="browser-icons fas fa-arrow-right"></i>
<i class="browser-icons fas fa-redo-alt"></i>
<i class="browser-icons fas fa-igloo"></i>
<div className="search-bar"></div>
    <i class=" browser-icons fas fa-hamburger"></i>

    </div>

</div>

<div className="browser-img">
     <img className="project-img" src={imageopenword}></img>
</div>


</div>  

{/* <Tilt tiltReverse={true}>

  </Tilt> */}
 
 
</div>
        

  )}



function Gitowl(){
    let imagegitowl="./images/gitowl.png";
    return(
<div id="gitowl" className="gitowl project-function">

<div className="mobile-screen">
    <div className="mobilescreen-btn"></div>
     <div className="mobilescreen-inner">
     <img className="mobile-gitowl-img" src="./images/mobile-gitowlscreen.jpg"></img>

     </div>
     <div className="mobilescreen-roundbtn"></div>
 </div>

 <div className="browser-screen">
<div className="browser-screen-head">
    <div className="head1">
        <div className="head1-tab"></div>
    </div>
    <div className="head2">
<i class="browser-icons fas fa-arrow-left"></i>
<i class="browser-icons fas fa-arrow-right"></i>
<i class="browser-icons fas fa-redo-alt"></i>
<i class="browser-icons fas fa-igloo"></i>
<div className="search-bar"></div>
    <i class=" browser-icons fas fa-hamburger"></i>

    </div>

</div>

<div className="browser-img">
     <img className="project-img" src={imagegitowl}></img>
</div>


</div>

<div className="text">
    <div className="project-name">Gitowl</div>
    <div className="project-details">
    First OAuth app with Github's API, Gitowl is... kinda the same as Github - 
here you can search, view all repositories + their issues and drop a comment! 
I also had fun copying new Facebook's navigation bar.
    </div>
    <div className="project-links">
<a className="projectbtn" href="https://github.com/WingedP/Gitowl"><i class="fab fa-github"></i></a>
<a className="projectbtn" href="https://gitowl.netlify.app"><i class="fas fa-laptop"></i></a>
    </div>

</div>

</div>
  )}