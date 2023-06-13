import c from "./skills.module.css"
import Switch from "react-switch"
import {useSelector, useDispatch} from "react-redux"
import {useState, useEffect} from "react"
import * as actions from "../../Redux/Actions"
import img from "./pagina cart.jpg"
import "../../../node_modules/lightbox2/dist/css/lightbox.css";
import "../../../node_modules/lightbox2/dist/js/lightbox.js";
import lightbox from "../../../node_modules/lightbox2/dist/js/lightbox.js"

export default function Skills() {

    const dispatch = useDispatch()

    const nightMode = useSelector(state => state.darkMode)

    const [checked, setChecked] = useState(!nightMode);

    const handleSwitchChange = (checked) => {
    checked === true ? dispatch(actions.dayMode()) : dispatch(actions.darkMode());
    setChecked(checked);
    };

    lightbox.option( {'resizeDuration': 200,
    'wrapAround': true,
    "disableScrolling": true})
   
    return(
        <div className={`${c.allPageWidth}`} id={checked === true ? c.backgroundImg : c.backgroundImgNight}>

    <div className={c.switch}>
    <Switch onChange={handleSwitchChange}
        checked={checked}
        offColor="#302E2E"
        onColor="#FFFDC9"
        width={66}
        onHandleColor="#FFC700"
        uncheckedIcon={false} 
        checkedIcon={false}
        />
    </div>

    <div className={`${c.font} ${c.center} `}>

     <p className={`${c.notMargin} ${c.title}`}  id={checked === true ? c.green : c.whiteTitle}>My Skills and How I used it</p>

     {/* <p className={`${c.notMargin} ${c.subTitle}`} id={checked === true ? c.black : c.white} >I am a software developer passionate about creating intuitive and dynamic user experiences.         
I am an organized and detail-oriented person, always looking for creative solutions to the challenges that arise.
Outside of work, I enjoy outdoor activities, take pics, and spending time with my family. I am always looking to learn new things and improve my skills. If you are looking for someone with a great passion for programming and a user-centered approach, do not hesitate to <span className={checked === true ? c.contactGreen : c.contactPurple}> contact me</span>!</p> */}

     </div>
     <a href="#downSection" className={checked === true ? c.greenTriangle : c.whiteTriangle }></a>


     <div className={c.info} id={checked === true ? c.darkGreen: c.darkBlue }>
    
     <div id="downSection">
        
     <span>
     <p className={`${c.notMargin} ${c.infoSubtitle} ${c.font}`}  id={checked === true ? c.beige : c.white}>Front End</p>
     <p className={`${c.notMargin} ${c.fontInfo}`} id={checked === true ? c.beige : c.white}>React is used to build interactive and dynamic user interfaces, while Redux is used to handle the application state in a more efficient way, such as in a shopping cart. Additionally, the Ant Design library is used for components such as the search bar, menu, forms, among others.</p>
     </span>

     <span>
     <a href={img} data-lightbox="image-1" data-title="HenryGameStore"><img src={img} alt="" /></a>
     </span>
     </div>
     
     </div>
    </div>) 
} 