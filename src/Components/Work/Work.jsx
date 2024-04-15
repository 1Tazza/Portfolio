import c from "./works.module.css"
import Switch from "react-switch"
import {useSelector, useDispatch} from "react-redux"
import {useState} from "react"
import * as actions from "../../Redux/Actions"
import cartImage from "./pagina cart.jpg";
import landingImg from "./landingImg.png";
import dogsApiImg from "./dogsApiImg.jpg";
import coverage from "./coverage.png";
import jest from "./jest.png";
import mongoose from "./mongoose.png"
import jwt from "./jwt.png";
import mongoDb from "./mongoDb.png";
import swagger from "./swagger.png";
import kioskoImg1 from "./kioskoImg1.jpeg";
import rocketImg from "./rocketImg.png";
import kioskoPcImg from "./kioskoPcImg.png";
import maletin from "./maletin.png"
import "../../../node_modules/lightbox2/dist/css/lightbox.css";
import "lightbox2";
import lightbox from "lightbox2"

export default function Work() {

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

     <p className={`${c.notMargin} ${c.title}`}  id={checked === true ? c.green : c.whiteTitle}>Works and Projects</p>


     </div>
     <a href="#sectionBelow" className={checked === true ? c.greenTriangle : c.whiteTriangle }>&nbsp;</a>


     <div className={c.info} id={checked === true ? c.darkGreen: c.darkBlue }>
    
     <div id="sectionBelow">
        

     <div className={c.maletinContainer}> 
      
      <div style={{display: "flex"}}>
     <img src={maletin} alt="maletinImg" id={c.maletinImg} />

      <span className={c.maletinParrafo}>
       <p className={`${c.font} ${c.parExp}`}>Work Experience</p>
      </span> 
      </div>
       
       <div style={{display: "flex"}}>
      <span className={c.lineExp}></span>
      </div>
     </div>


     <div className={c.workContainer}>
       <div>
       <p className={`${c.notMargin} ${c.infoSubtitle} ${c.font}`} style={{paddingBottom: "10px"}}  id={checked === true ? c.beigeTitle : c.white}>Kiosko App</p>
      </div>
      <div className={c.row} style={{justifyContent: "space-evenly"}}>
       <span>
        <p className={`${c.notMargin} ${c.fontInfo} ${c.textApp}`} style={{width: "470px", height: "700px", textAlign: "left", paddingTop: "55px"}} id={checked === true ? c.beige : c.white}>A Single Page Application (SPA) designed for use in Candy Store. <br />
         It's a responsive app optimized for mobile use. <br />

The main function of this application is to facilitate product price consultation and updating. React and Redux were used for the Front End to efficiently manage the application's state, providing an intuitive and accessible interface for use at the establishment's checkout. <br />

Server-side logic was implemented using Node.js along with Express.js, enabling the creation of RESTful APIs for communication between the Front End and Back End. PostgreSQL was employed as the relational database management system, leveraging its robustness and capacity to handle large volumes of data. <br />
Additionally, Amazon Web Services (AWS) S3 storage services were used to host the application's static resources, achieving fast and reliable asset delivery. <br />

To ensure security and access control to AWS resources, Identity and Access Management (IAM) policies were configured to granularly control who can access the AWS services utilized by the application.</p>
       </span>
         
      {/* <span className={c.middleLine}></span> */}

       <span style={{width: "521px", height: "728px"}}>
       <a href={kioskoPcImg} data-lightbox="image-1" data-title="Kiosko Pc"><img id={checked === false ? c.imgNight : null} src={kioskoPcImg} className={c.cartImg} alt="" /></a>
       <a href={kioskoImg1} data-lightbox="image-1" data-title="Kiosko Mobile"><img id={checked === false ? c.imgNight : null} src={kioskoImg1} className={c.cartMobileImg} alt="" /></a>
        <p style={{fontFamily: 'Raleway', fontSize: "20px"}} id={checked === true ? c.beige : c.white}>Link: <a id={checked === true ? c.beige : c.white} style={{fontSize: "23px"}} className={checked === true ? c.dayGlow : c.nightGlow}  href="https://www.linkedin.com/feed/update/urn:li:activity:7182820381127229440/" target="_blank" rel="noopener noreferrer">MechiKioskoApp</a></p> 
      </span>
      </div>
     </div>


     <div className={c.maletinContainer}> 
      
      <div style={{display: "flex"}}>
     <img src={rocketImg} alt="rocketImg" id={c.maletinImg} />

      <span className={c.maletinParrafo}>
       <p className={`${c.font} ${c.parExp}`}>Proyects</p>
      </span> 
      </div>
       
       <div style={{display: "flex"}}>
      <span className={c.lineExp}></span>
      </div>
     </div>


     <div className={c.workContainer}>
       <div>
       <p className={`${c.notMargin} ${c.infoSubtitle} ${c.font}`} style={{paddingBottom: "20px"}}  id={checked === true ? c.beigeTitle : c.white}>HenryGameStore</p>
      </div>
      <div className={c.row} style={{justifyContent: "space-evenly"}}>
       <span>
        <p className={`${c.notMargin} ${c.fontInfo} ${c.textApp}`} style={{width: "470px", height: "801px", textAlign: "left"}} id={checked === true ? c.beige : c.white}>An e-commerce website for digital and physical      video games where you can find everything you need to satisfy your gaming needs. With an attractive and user-friendly Landing Page, an intuitive navigation bar, a search bar, and a section with all the available game cards, the user experience is fluid and satisfying.<br></br> But that's not all, you can also filter games by multiple options, including price, platform, genre, and more. And if you're interested in a particular game, you can view its details and reviews before buying it. In addition, thanks to a pagination system and integration with Mercado Pago as a payment gateway, the purchase process is easy and secure. But it's not just about customers, the website also features an Admin Dashboard, where administrators can view and manage the game inventory, orders, and customers. All of this was achieved through the implementation of advanced technologies and methods in both Front-End and Back-End development.For Front-End development, we used ReactJs as a framework, which allowed us to create a dynamic and user-friendly experience, along with the implementation of Redux to manage a global store for the application. We also created a shopping cart and used tools like ant-design to improve the design and functionality of the website.On the other hand, Back-End development was equally impressive, including the creation of a web server with Express and NodeJs, and a REST API with Sequelize as an ORM for a PostgresSQL database. We also implemented advanced security features, such as user authentication and session management with JSON Web Tokens and Bcrypt, and integration with Cloudinary to handle game images. <br></br> In summary, this project was a great success thanks to the combination of advanced technologies and methods, resulting in an elegant, functional, and secure website for the sale of videogames.</p>
       </span>
         
      {/* <span className={c.middleLine}></span> */}

       <span style={{width: "521px", height: "728px"}}>
       <a href={landingImg} data-lightbox="image-2" data-title="HenryGameStore Landing"><img id={checked === false ? c.imgNight : null} src={landingImg} className={c.cartImg} alt="" /></a>
       <a href={cartImage} data-lightbox="image-2" data-title="HenryGameStore"><img id={checked === false ? c.imgNight : null} src={cartImage} className={c.cartImg} alt="" /></a>
        <p style={{fontFamily: 'Raleway', fontSize: "20px"}} id={checked === true ? c.beige : c.white}>Link: <a id={checked === true ? c.beige : c.white} style={{fontSize: "23px"}} className={checked === true ? c.dayGlow : c.nightGlow}  href="https://pf-henry-front-1tazza.vercel.app/" target="_blank" rel="noopener noreferrer">HenryGameStore</a></p> 
      </span>
      </div>
     </div>


     <div className={c.maletinContainer}>     
      <div style={{display: "flex"}}>
      <span className={c.lineExp2}></span>
      </div>
     </div>

     <div className={`${c.workContainer}`}>
       <div>
       <p className={`${c.notMargin} ${c.infoSubtitle} ${c.font}`} style={{paddingBottom: "20px"}}  id={checked === true ? c.beigeTitle : c.white}>Dogs Api</p>
      </div>
      <div className={c.row} style={{justifyContent: "space-evenly"}}>
       <span>
        <p className={`${c.notMargin} ${c.fontInfo} ${c.textApp}`} style={{width: "470px", height: "238px", textAlign: "left", paddingTop: "30px"}} id={checked === true ? c.beige : c.white}>A Single Page Application (SPA) using SQL with PostgreSQL, Sequelize, Node.js, and Express.js for the back-end, and React with Redux for the front-end. This application has multiple features, including displaying dog breeds with external API integration and paging, sorting breeds alphabetically or by weight, filtering by temperament, creating breeds with controlled forms, searching via a search bar with pagination, and displaying detailed results for any particular breed.</p>
       </span>

       <span style={{width: "521px"}}>
       <a href={dogsApiImg} data-lightbox="image-3" data-title="Dog App"><img id={checked === false ? c.imgNight : null} src={dogsApiImg} className={c.dogsImg} alt="" /></a>
       <p style={{fontFamily: 'Raleway', fontSize: "20px"}} id={checked === true ? c.beige : c.white}>Link: <a id={checked === true ? c.beige : c.white} style={{fontSize: "23px"}} className={checked === true ? c.dayGlow : c.nightGlow}  href="https://pidogsfrontend-production.up.railway.app/" target="_blank" rel="noopener noreferrer">Dogs App</a></p> 
      </span>
      </div>
     </div>


     <div className={c.maletinContainer}>     
      <div style={{display: "flex"}}>
      <span className={c.lineExp2}></span>
      </div>
     </div>

     <div className={`${c.workContainer} ${c.frontContainerRest}`}>
       <div>
       <p className={`${c.notMargin} ${c.infoSubtitle} ${c.font}`} style={{paddingBottom: "20px"}}  id={checked === true ? c.beigeTitle : c.white}>Api Rest</p>
      </div>
      <div className={c.row} style={{justifyContent: "space-evenly"}}>
       <span>
        <p className={`${c.notMargin} ${c.fontInfo} ${c.textApp}`} style={{width: "470px", height: "238px", textAlign: "left", paddingTop: "80px"}} id={checked === true ? c.beige : c.white}>A RESTful API with a NoSQL database using MongoDB, with Mongoose as the Object-Relational Mapping (ORM) tool. The API includes JWT (JSON Web Tokens) for authentication and authorization. Additionally, I have implemented comprehensive test coverage using Jest for unit and integration testing. Furthermore, I have integrated Swagger for clear and interactive documentation of the API endpoints.</p>
       </span>



 <div>

       






       <span style={{width: "521px"}}>
       
       <span className={c.containerWidth} style={{ paddingTop: '80px' }}>
     
      <div className={`${c.containerRow} ${c.divApi1}`}>
       <img src={mongoDb} id={c.mongoImg} alt="" />
       <img src={jwt} id={c.jwtImg} alt="" />
       <img src={mongoose} id={c.mongooseImg} alt="" />
       <img src={swagger} id={c.swaggerImg} alt="swaggerImg" />
        <img src={jest} id={c.jestImg} alt="" />
      </div>


      {/* <div className={c.divApi2}>
        <img src={swagger} id={c.swaggerImg} alt="swaggerImg" />
        <img src={jest} id={c.jestImg} alt="" />
      </div> */}
       
      </span>
      <a href={coverage} data-lightbox="image-4" data-title="Api Rest No Sql Coverage Test"><img id={checked === false ? c.imgNight : null} src={coverage} className={c.dogsImg} alt="" /></a>
       <p style={{fontFamily: 'Raleway', fontSize: "20px"}} id={checked === true ? c.beige : c.white}>Link Repositorio: <a id={checked === true ? c.beige : c.white} style={{fontSize: "23px"}} className={checked === true ? c.dayGlow : c.nightGlow}  href="https://github.com/1Tazza/Api-Rest" target="_blank" rel="noopener noreferrer">API REST</a></p> 
      </span>

      </div>

      </div>
     </div>


     </div>
     
     </div>
    </div>) 
} 