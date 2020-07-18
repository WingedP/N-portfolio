import React from 'react'
import './loader.css';
import Fade from 'react-reveal/Fade';

export default function Loader() {
    return (<div className="loader">
<div className="loader-inner">
<div className="hellothere">
    <Fade big delay={100}><div style={{paddingRight:"1rem"}}>Hello</div></Fade> <Fade big delay={200}><div>there</div></Fade>
    
    </div>

<Fade bottom delay={270}>
<span className="loader-openletter2">
<i class="fas fa-chevron-left"></i>
<div className="loader-openletter3">N</div>
<i class="fas fa-chevron-right"></i>
</span></Fade>

</div>    </div>
    )
}
