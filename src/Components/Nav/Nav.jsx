import c from "./nav.module.css"
import {Link} from "react-router-dom"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"


export default function Nav() {

    const nightMode = useSelector(state => state.darkMode)

    
    return(<div className={nightMode === false ? c.containerDay : c.containerNight}>
    
    
    <div className={`${c.logo} ${c.nav}`}>
    <Link to="/"><span className={c.circleImage}></span></Link>

    <span className={`${c.nameAndOcupation}`}>
    <p className={c.name}>Matias Tazza</p>
    <p className={c.profession}>Full Stack Developer</p>
    </span>
    
    </div>

    
    <div className={`${c.elements} ${c.elementsContainer}`}>
    
    <p ><Link to="about">About</Link></p>
    <p ><Link to="skills">My Skills</Link></p>
    <p ><Link to="work">Work</Link></p>
    <p id={c.marginBottom}><Link to="contact">Contact</Link></p>
    </div>

    </div>)
}