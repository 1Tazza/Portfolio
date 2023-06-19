import c from "./skills.module.css"
import Switch from "react-switch"
import {useSelector, useDispatch} from "react-redux"
import {useState, useEffect} from "react"
import * as actions from "../../Redux/Actions"
import cartImage from "./pagina cart.jpg";
import antImg from "./antImg.png";
import reactImg from "./reactImg.png";
import sqlImg from "./sqlImg.png";
import nodeImg from "./nodeImg.png";
import sequelizeImg from "./sequelizeImg.png";
import postgresImg from "./postgresImg.png";
import nodemailerImg from "./nodemailerImg.png";
import githubImg from "./githubImg.png";
import gitImg from "./gitImg.png";
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

    lightbox.option( {
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
     <a href="#sectionBelow" className={checked === true ? c.greenTriangle : c.whiteTriangle }></a>


     <div className={c.info} id={checked === true ? c.darkGreen: c.darkBlue }>
    
     <div id="sectionBelow">
        
     <div className={c.containerRow}>
      <span className={c.frontEnd}>
       <p className={`${c.notMargin} ${c.infoSubtitle} ${c.font}`}  id={checked === true ? c.beigeTitle : c.white}>Front End</p>
       <p className={`${c.notMargin} ${c.fontInfo}`} id={checked === true ? c.beige : c.white}>React is used to build interactive and dynamic user interfaces, while Redux is used to handle the application state in a more efficient way, such as in a shopping cart. Additionally, the Ant Design library is used for components such as the search bar, menu, forms, among others.</p>
      </span>

      <span>
     
      <div>
       <img src={reactImg} className={c.reactImg} alt="reactImg" />
       <img src={antImg} className={c.antImg} alt="antImg" />
      </div>

       <a href={cartImage} data-lightbox="image-1" data-title="HenryGameStore"><img id={checked === false ? c.imgNight : null} src={cartImage} className={c.cartImg} alt="" /></a>
       <p className={`${c.notMargin} ${c.fontInfo}`} id={checked === true ? c.beige : c.white} >Project: HenryGameStore</p>
      </span>
     </div>

     <div className={`${c.containerRow} ${c.frontContainer}`}>
      <span className={c.frontEnd}>
       <p className={`${c.notMargin} ${c.infoSubtitle} ${c.font}`}  id={checked === true ? c.beigeTitle : c.white}>Back End</p>
       <p className={`${c.notMargin} ${c.fontInfo}`} id={checked === true ? c.beige : c.white}>In the Back-End development, we created a web server using Express and Node.js, and utilized Sequelize as an ORM for a PostgresSQL database. We also implemented advanced security features, such as user authentication and session management using JSON Web Tokens and Bcrypt. Additionally, we integrated with Cloudinary to handle game images. Moreover, we utilized Node.js to handle email sending through Nodemailer.</p>
      </span>

      <span className={c.containerWidth}>
     
      <div className={c.containerRow}>
       <img src={sqlImg} id={c.sqlImg} alt="sqlImg" />
       <img src={nodeImg} id={c.nodeImg} alt="nodeImg" />
       <img src={sequelizeImg} id={c.sequelizeImg} alt="sequelizeImg" />
      </div>
      
      <div style={{ paddingTop: '25px' }}>
       <img src={postgresImg} id={c.postgresImg} alt="postgresImg" />
       <img src={nodemailerImg} id={c.nodemailerImg} className={checked === false ? c.imgBackgroundNight : null} alt="nodemailerImg" />
      </div>
       
      </span>
     </div>


     <div className={`${c.containerRow} ${c.frontContainer}`}  style={{ paddingBottom: '150px' }}>
      <span className={c.frontEnd}>
       <p className={`${c.notMargin} ${c.infoSubtitle} ${c.font}`}  id={checked === true ? c.beigeTitle : c.white}>Other Skills</p>
       <p className={`${c.notMargin} ${c.fontInfo}`} id={checked === true ? c.beige : c.white}>
      · Git: Version control system for tracking changes in code projects. <br></br>
      · GitHub: Web-based platform for hosting and managing Git repositories.<br></br>
      · GitFlow: Workflow and branching model that enhances collaboration and streamlines the development process.</p>
      </span>

      <span className={c.containerWidth} style={{ paddingTop: '70px' }}>
     
      <div className={c.containerRow} style={{ paddingLeft: '70px' }}>
       <img src={githubImg} id={c.githubImg} className={checked === false ? c.imgBackgroundNight : null} alt="githubImg" />
       <img src={gitImg} id={c.gitImg} alt="gitImg" />
      </div>
       
      </span>
     </div>


     </div>
     
     </div>
    </div>) 
} 