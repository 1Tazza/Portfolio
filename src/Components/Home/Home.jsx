import c from "./home.module.css"
import Switch from "react-switch"
import {useSelector, useDispatch} from "react-redux"
import { Link } from "react-router-dom"
import {useState} from "react"
import * as actions from "../../Redux/Actions"


export default function Home() {

    const dispatch = useDispatch()

    const nightMode = useSelector(state => state.darkMode)

    const [checked, setChecked] = useState(!nightMode);

    const handleSwitchChange = (checked) => {
    checked === true ? dispatch(actions.dayMode()) : dispatch(actions.darkMode());
    setChecked(checked);
    };

    return(
        <div className={`${c.allPageWidth} ${c.backgroundImg}` } id={checked === false ? c.backgroundImgNight : null}>

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

     <p className={`${c.notMargin} ${c.title}`} id={checked === true ? c.green : c.white}>Matias Tazza</p>
     <p className={`${c.notMargin} ${c.subTitle}`}   id={checked === true ? c.brown : c.purple} >Full Stack Developer</p>

     <Link to="/contact">
        <button className={checked === true ? c.button: c.whiteButton} id={checked === true ? c.green : c.white}>
            <p className={`${c.font}`}  >Contact me!</p>
        </button>
     </Link>
     </div>
    </div>) 
} 