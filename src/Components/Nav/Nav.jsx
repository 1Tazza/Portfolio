import c from "./nav.module.css"
import {Link, useHistory} from "react-router-dom"
import React, { useEffect} from "react"
import { useSelector } from "react-redux"


export default function Nav() {

    const nightMode = useSelector(state => state.darkMode)

    const history = useHistory();

    useEffect(() => {
        const scrollToTop = () => {
          window.scrollTo(0, 0);
        };
      
        const unlisten = history.listen(() => {
          scrollToTop();
        });
      
        return () => {
          unlisten();
        };
      }, [history]);
    
    return(
    <div id={c.contenedor} className={nightMode === false ? c.containerDay : c.containerNight}>
    
    <div className={`${c.logo} ${c.nav}`}>
    <Link to="/"><span className={c.circleImage}></span></Link>

    <span className={`${c.nameAndOcupation}`}>
    <p className={c.name}>Matias Tazza</p>
    <p className={c.profession}>Full Stack Developer</p>
    </span>
    
    </div>

    
    <div className={`${c.elements} ${c.elementsContainer1}`}>
    
    <p ><Link to="/about">About</Link></p>
    <p ><Link to="/skills">My Skills</Link></p>
    </div>

    <div className={`${c.elements} ${c.elementsContainer2}`}>
    <p ><Link to="/work">Work</Link></p>
    <p id={c.marginBottom}><Link to="/contact">Contact</Link></p>
    </div>

    </div>)
}