import React from 'react'
import './loader.css';
import Fade from 'react-reveal/Fade';

export default function Loader() {
    return (<div className="loader">
<div className="hellothere">
    <Fade big delay={100}><div style={{paddingRight:"1rem"}}>Hello</div></Fade> <Fade big delay={200}><div>there</div></Fade></div>
<Fade bottom delay={270}><span className="openletter2"><i class="fas fa-chevron-left"></i><div className="openletter3">N</div>
<i class="fas fa-chevron-right"></i></span></Fade>

        </div>
    )
}
