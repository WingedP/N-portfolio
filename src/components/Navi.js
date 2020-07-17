import React from 'react'
import {Link} from 'react-scroll';
import './navi.css';

export default function Navi() {
    return (
        <div className="navi">

<Link className="navilink" activeClass="active"  to = "landing" spy= {true} smooth={true} offset={-125} duration= {500}>
<span className="navi-openletter2">
<i class="fas fa-chevron-left"></i>
<div  className="navi-openletter3">N</div>
<i class="fas fa-chevron-right"></i>

</span>
</Link>

<Link className="navilink link1" activeClass="active"  to = "experiences" spy= {true} smooth={true} offset={-125} duration= {500}>
<i class="navilink-icon far fa-user-circle"></i></Link>
<Link  className="navilink link3" activeClass="active"  to = "projects"  spy= {true} smooth={true} offset={-125} duration= {500}>
<i class="navilink-icon fas fa-code"></i></Link>
<Link className="navilink link2"  activeClass="active"  to = "skills"  spy= {true} smooth={true} offset={-125} duration= {500}>
<i class="navilink-icon fas fa-tools"></i> </Link>
<Link className="navilink link4" activeClass="active"  to = "contact"  spy= {true} smooth={true} offset={-125} duration= {500}>
<i class="navilink-icon fas fa-phone-alt"></i> </Link>

 <Link className="navilink link4" activeClass="active"  to = ""  spy= {true} smooth={true} offset={-125} duration= {500}>
<a className="navilink-icon" 
href="https://drive.google.com/file/d/1kwUPGjyTD3ENqJqjDVGoIl8wxeYmBhD-/view?usp=sharing">CV</a>
 </Link>

        </div>
    )
}
