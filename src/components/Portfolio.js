import '../App.css'
import {Link} from "react-router-dom";
import photoCV from "../assets/images/2021-CV-Photo.jpeg";
import mysqlIcon from "../assets/images/mysql-element.png";
import computerIcon from '../assets/images/computer-element.png'
import javascriptIcon from '../assets/images/javascript-element.png'
import htmlIcon from '../assets/images/html-element.png'
import pythonIcon from '../assets/images/python-element.png'
import cvIcon from '../assets/images/cv-element.png'
import ActivitiesTable from "./ActivitiesTable";

import brico1 from '../assets/images/activities/01-brico/logo-brico.png'
import brico2 from '../assets/images/activities/01-brico/contrat-travail_19-25aout.png'

import formationjava1 from '../assets/images/activities/02-formationjava/logo-OP.png'
import formationjava2 from '../assets/images/activities/02-formationjava/formation-java-dashboard.png'
import formationjava3 from '../assets/images/activities/02-formationjava/formation-java-completee.png'
import formationjava4 from '../assets/images/activities/02-formationjava/formation-java-completee02.png'

import formationnodejs1 from '../assets/images/activities/03-formationnodejs/formation-nodejs-dashboard.png'
import formationnodejs2 from '../assets/images/activities/03-formationnodejs/formation-nodejs-completee01.png'
import formationnodejs3 from '../assets/images/activities/03-formationnodejs/formation-nodejs-completee02.png'

import devday1 from '../assets/images/activities/05-devday2022/logo-devday.png'
import devday2 from '../assets/images/activities/05-devday2022/photo-groupe-devday.jpg'
import devday3 from '../assets/images/activities/05-devday2022/devday01.jpg'
import devday4 from '../assets/images/activities/05-devday2022/devday02.jpg'


import mic1 from '../assets/images/activities/06-conferencemic/logo-mic.png'
import mic2 from '../assets/images/activities/06-conferencemic/MIC-conference-git.jpg'

import lewagon1 from '../assets/images/activities/07-conferencelewagon/logo-lewagon.png'
import lewagon2 from '../assets/images/activities/07-conferencelewagon/conference-lewagon01.jpg'
import lewagon3 from '../assets/images/activities/07-conferencelewagon/conference-lewagon02.jpg'
import lewagon4 from '../assets/images/activities/07-conferencelewagon/conference-lewagon03.jpg'

import gamejam1 from '../assets/images/activities/08-gamejam2022/logo-louvainlinux.png'
import gamejam2 from '../assets/images/activities/08-gamejam2022/theme-gamejam.jpg'
import gamejam3 from '../assets/images/activities/08-gamejam2022/photo-gamejam01.jpg'
import gamejam4 from '../assets/images/activities/08-gamejam2022/photo-gamejam02.jpg'
import gamejam5 from '../assets/images/activities/08-gamejam2022/photo-gamejam03.jpg'
import gamejam6 from '../assets/images/activities/08-gamejam2022/screen-menu-gamejam.png'
import gamejam7 from '../assets/images/activities/08-gamejam2022/screen-jeu.png'


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Portfolio(props) {
    let portfolioActivities = [
        {
            number: 1,
            type: "Communication et gestion",
            name: "Job étudiant Brico",
            hoursSpent: 152,
            date: "Août 2019",
            description: "Lors du mois d'août jusqu'au début du mois de septembre, j'ai réalisé un job étudiant chez Brico" +
                "Mon job étudiant chez Brico consistait principalement à la\n" +
                "gestion, le réapprovisionnement et l'agencement des stocks. La communication avec\n" +
                "les clients était également très présente.",
            images: [brico1,brico2]
        },
        {
            number: 2,
            type: "Formation Développement applicatif",
            name: "OpenClassrooms Apprenez à programmer en Java",
            hoursSpent: 10,
            date: "05/09/2020",
            description: "",
            images: [formationjava1,formationjava2, formationjava3, formationjava4]
        },
        {
            number: 3,
            type: "Formation Développement Web",
            name: "Passez au Full Stack avec Node.js, Express et MongoDB",
            hoursSpent: 10,
            date: "03/02/2021",
            description: "",
            images: [formationnodejs1,formationnodejs2,formationnodejs3]
        },
        {
            number: 4,
            type: "Formation Hardware / électronique",
            name: "à compléter",
            hoursSpent: 10,
            date: "à compléter",
            description: "",
            images: [formationnodejs1,formationnodejs2,formationnodejs3]
        },
        {
            number: 5,
            type: "Conférence en présentiel",
            name: "DevDay 2022",
            hoursSpent: 9,
            date: "23/11/2021", description: "",
            images: [devday1,devday2,devday3,devday4]
        },
        {
            number: 6,
            type: "Conférence en distanciel",
            name: "MIC Préparation au stage Conférence Git",
            hoursSpent: 2,
            date: "Février 2022",
            description: "",
            images: [mic1,mic2]
        },
        {
            number: 7,
            type: "Conférence en distanciel",
            name: "LeWagon Atelier DataAnalysis",
            hoursSpent: 10,
            date: "Mars 2022",
            description: "",
            images: [lewagon1,lewagon2,lewagon3,lewagon4]
        },
        {
            number: 8,
            type: "Hackathon en présentiel",
            name: "GameJam Louvain-Li-Nux 2022",
            hoursSpent: 27,
            date: "02/04/2022 au 03/04/2022",
            description: "" +
                "Chaque année le kot à projet nommé \"Louvain-Li-nux\" organise une GameJam qui consiste à réaliser\n" +
                "                        un petit jeu vidéo en moins de 24h qui respestent les bonnes pratiques de l'open-source.\n" +
                "                        Cette année le thème demandé était sur les \"catastrophes naturelles\". Cela était mon premier\n" +
                "                        Hackathon que j'ai réalisé\n" +
                "                        avec un ami qui est étudiant à l'UCLouvain. Nous nous sommes orienté vers un jeu multijoueur en\n" +
                "                        python avec pygame\n" +
                "                        1 contre tous où le but était d'utiliser des sorts (lave, tornades, éclairs) permettant\n" +
                "                        d'éliminer\n" +
                "                        les autres joueurs et gagner le plus de points possible.\n" +
                "\n" +
                "                        Sur place, un membre de Oniryx était présent pour répondre à nos questions\n" +
                "\n" +
                "                        Ce fut une belle expérience, je n'avais pas vraiment l'habitude de développer dans le but de\n" +
                "                        créer un jeu vidéo",
            images: [gamejam1,gamejam2,gamejam3,gamejam4,gamejam5,gamejam6,gamejam7]
        },
    ];
    return (
        <div className={"portfolioPage container-fluid"}>

            <div className={"containerPortfolio"} style={{ backgroundColor: "rgb(26, 61, 86)"}}>
                <center><h1 className={"text-white"}> Sébastien <img src={photoCV} className={"photoCV"}
                                                                     alt={"CV Sébastien VOLONT"}/> Volont</h1></center>
                <div className={"container-fluid"}>
                <div className={"row"}>
                    <div className={"col"}></div>
                    <div className={"col"}><h3 className={"text-center text-white"}>Bonjour ! Je m'appelle Sébastien Volont, je suis actuellement un étudiant en bachelier de Technologie de l'informatique à l'EPHEC Louvain-La-Neuve </h3></div>
                    <div className={"col"}></div>
                </div>

                <div className={"row"}>
                    <div className={"col"}>
                        <h1 className={"text-white"}> TECHNOLOGIES - FRAMEWORKS </h1>
                        <div className={"d-flex flex-row"}>
                            <p className={"p-5"}><img src={mysqlIcon} className={"mysqlElement"} alt={"Mysql icon"}/></p>
                            <p className={"p-5"}>test</p>
                            <p className={"p-5"}>test</p>
                            <p className={"p-5"}>test</p>
                            <p className={"p-5"}>test</p>
                        </div>
                    </div>
                    <div className={"col"}>
                    </div>
                    <div className={"col"}>
                        <ul className="list-group">
                            <li className="list-group-item bg-transparent text-white">Nivelles, Belgique</li>
                            <li className="list-group-item bg-transparent text-white">sebastien.volont27@gmail.com</li>
                            <li className="list-group-item bg-transparent text-white">+32 495 70 56 28</li>
                            <li className="list-group-item bg-transparent text-white">Né le 27/10/2001</li>
                            <li className="list-group-item bg-transparent text-white">github.com/sebastienvolont</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={"footerPortfolio"}>
                <div className={"row"}>
                    <div className={"col"}>
                    </div>
                    <div className={"col"}>
                        <img className={"computerIcon img-fluid mx-auto d-block"} src={computerIcon}
                             alt={"Computer Icon"}
                             data-bs-toggle="modal" data-bs-target="#exampleModal"/>
                        <p className={"text-center text-white"}>Portfolio</p>
                    </div>
                    <div className={"col"}>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col"}>
                        <div>
                            <a href={"/static/media/2021-CV-VOLONT_Sebastien.cc32eb1c39aec8ca77a5.pdf"}  target="_blank"><img
                                className={"cvIcon img-fluid mx-auto d-block"} src={cvIcon} alt={"CV Icon"}/></a>
                            <p className={"text-center text-white"}>CV</p>
                            <p className={"text-center text-white"}><a href={""}> Télécharger mon CV </a></p>
                        </div>
                    </div>
                    <div className={"col"}>
                    </div>
                </div>
            </div>

            <div className="modal fade portfolioModal" id="exampleModal" tabIndex="-1"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl portfolioDialog">
                    <div className="modal-content portfolioContent">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"><p
                                className={"text-center"}>Portfolio 2019 - 2022</p></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ActivitiesTable portfolioActivities={portfolioActivities}/>
                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><a href="https://github.com/sebastienvolont" className="nav-link px-2 text-muted" target="_blank">Github</a></li>
                        <li className="nav-item"><a href="https://www.linkedin.com/in/s%C3%A9bastien-volont-499037223" className="nav-link px-2 text-muted" target="_blank">Linkedin</a></li>
                    </ul>
                </footer>
            </div>
        </div>
        </div>
)
}

export default Portfolio