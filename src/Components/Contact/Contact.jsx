import c from "./contact.module.css"
import Switch from "react-switch"
import {useSelector, useDispatch} from "react-redux"
import {useState} from "react"
import * as actions from "../../Redux/Actions"
import githubImg from "./githubImg.png";
import gmailImg from "./gmailImg.png";
import linkedinImg from "./linkedinImg.png";

export default function Contact() {

    const dispatch = useDispatch()

    const nightMode = useSelector(state => state.darkMode)

    const [checked, setChecked] = useState(!nightMode);

    const handleSwitchChange = (checked) => {
    checked === true ? dispatch(actions.dayMode()) : dispatch(actions.darkMode());
    setChecked(checked);
    };

    return(
        <div className={`${c.allPageWidth} ${c.backgroundImg}`} id={checked === false ? c.backgroundImgNight : null}>

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

     <p className={`${c.notMargin} ${c.title}`}  id={checked === true ? c.green : c.whiteTitle}>Contacts</p>
     
     <div className={`${c.subTitle} `} id={checked === true ? c.black : c.white} >
 
      <span className={c.container}>
        <a href="https://www.linkedin.com/in/matias-tazza-168100233/" target="_blank" rel="noopener noreferrer">
        <img id={c.linkedinImg} src={linkedinImg} alt="" />
        </a>
        <p>in/matias-tazza-168100233</p>
      </span>

      <span className={c.container}>
        <a href="https://mail.google.com/mail/?view=cm&to=tazza.personal@gmail.com" target="_blank" rel="noopener noreferrer">
        <img id={c.gmailImg} src={gmailImg} alt="" />
        </a>
        <p>tazza.personal@gmail.com</p>
      </span>

      <span style={{width: "225px", height: "145px"}}>
        <a href="https://github.com/1Tazza" target="_blank" rel="noopener noreferrer">
        <img className={checked === false ? c.imgBackgroundNight : null} id={c.githubImg} src={githubImg} alt="" />
        </a>
        <p style={{marginTop: "9px"}}>/1Tazza</p>
      </span>

     </div>

     </div>
    </div>) 
} 