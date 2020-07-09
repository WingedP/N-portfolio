import React from 'react'
import './pagestyles/contact.css';

export default function Contact() {
    return (
        <div className="contact">
<TitleSection/>

<div className="contactinfo">
              <div className="contactfind">FIND ME ON:</div>
              
              <div><i class="fas fa-mobile-alt" style={{ marginRight: "6px" }}></i>032 6657 304</div>

              <div><i class="fas fa-envelope" style={{ marginRight: "6px" }}></i>elysiawepts25@gmail.com</div>
              
              <div className="iconlist">
              <a className="contact-icon" href="https://www.facebook.com/profile.php?id=100009143583600">
                  <i class=" fab fa-facebook"></i></a>
                  <a className="contact-icon " href="https://www.linkedin.com/in/nhan-nguyen-9658701a6/">
                  <i class="fab fa-linkedin"></i>
                  </a>
                  <a className="contact-icon" href="https://github.com/WingedP">
                  <i class=" fab fa-github"></i>
                  </a>

                </div>
 </div>

<div className="copyright">© Nhan Nguyen 2020.</div>

        </div>

        
    )
}


function TitleSection(){
    return(
        <div>
  <div className="title">
  <svg className="marker" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FA4D56" d="M53.1,-58.2C68.4,-50.5,80.1,-33.3,83.7,-14.5C87.3,4.3,82.9,24.8,71.3,37.6C59.6,50.4,40.9,55.6,22.7,61.9C4.6,68.2,-12.8,75.8,-26.5,71.4C-40.2,67.1,-50.2,50.9,-55.4,35.2C-60.7,19.5,-61.2,4.3,-58.6,-10.2C-55.9,-24.8,-50,-38.7,-39.7,-47.3C-29.4,-56,-14.7,-59.4,2.1,-61.9C18.9,-64.4,37.8,-66,53.1,-58.2Z" transform="translate(100 100)" />
  </svg>
  <div className="title-text"> 
  <span className="title-1stletter">F</span>in~</div>
  </div>
  <div className="subtext">That's it! Thanks for reading.</div>
  <div className="subtext">If you want me to be a part of your journey:</div>
  <i class="paperplane far fa-paper-plane"></i>



  </div>
    )
  }