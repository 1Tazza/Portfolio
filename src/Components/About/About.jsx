
import c from "./about.module.css"
import Switch from "react-switch"
import {useSelector, useDispatch} from "react-redux"
import {useState} from "react"
import * as actions from "../../Redux/Actions"


export default function About() {

    const dispatch = useDispatch()

    const nightMode = useSelector(state => state.darkMode)

    const [checked, setChecked] = useState(true);

    const handleSwitchChange = (checked) => {
    checked === true ? dispatch(actions.dayMode()) : dispatch(actions.darkMode());
    setChecked(checked);
    };

    return(
        <div className={`${c.allPageWidth} ${c.backgroundImg}`}>

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

     <p className={`${c.notMargin} ${c.green} ${c.title}`}>Hello I´m Tazza!</p>
     <p className={`${c.notMargin} ${c.subTitle}`} >I am a software developer passionate about creating intuitive and dynamic user experiences.         
I am an organized and detail-oriented person, always looking for creative solutions to the challenges that arise.
Outside of work, I enjoy outdoor activities, take pics, and spending time with my family. I am always looking to learn new things and improve my skills. If you are looking for someone with a great passion for programming and a user-centered approach, do not hesitate to <span className={c.contact}> contact me</span>!</p>

     </div>
    </div>) 
} 