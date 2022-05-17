import '../App.css'
import photoCV from "../assets/images/2021-CV-Photo.jpeg";
import mysqlIcon from "../assets/images/mysql-element.png";
import computerIcon from '../assets/images/computer-element.png'
import cvIcon from '../assets/images/cv-element.png'
import ActivitiesTable from "./ActivitiesTable";

import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import brico1 from '../assets/images/activities/01-brico/logo-brico.png'
import brico2 from '../assets/images/activities/01-brico/contrat-travail_19-25aout.png'

import formationjava1 from '../assets/images/activities/02-formationjava/logo-OP.png'
import formationjava2 from '../assets/images/activities/02-formationjava/formation-java-dashboard.png'
import formationjava3 from '../assets/images/activities/02-formationjava/formation-java-completee.png'
import formationjava4 from '../assets/images/activities/02-formationjava/formation-java-completee02.png'

import formationnodejs1 from '../assets/images/activities/03-formationnodejs/logo-OP.png'
import formationnodejs2 from '../assets/images/activities/03-formationnodejs/formation-nodejs-dashboard.png'
import formationnodejs3 from '../assets/images/activities/03-formationnodejs/formation-nodejs-completee01.png'
import formationnodejs4 from '../assets/images/activities/03-formationnodejs/formation-nodejs-completee02.png'

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
import ModalActivity from "./ModalActivity";

class Portfolio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            areActivitiesDisplaying: true,
            activityElement: "",
            portfolioActivities: [
                {
                    number: 1,
                    type: "Communication et gestion",
                    name: "Job étudiant Brico",
                    hoursSpent: 152,
                    date: "04/08/2019 au 01/09/2019",
                    description: "Lors du mois d'août jusqu'au début du mois de septembre, j'ai réalisé un job étudiant chez Brico. " +
                        "Mon job étudiant chez Brico consistait principalement à la\n" +
                        "gestion, le réapprovisionnement et l'agencement des stocks. La communication avec\n" +
                        "les clients était également très présente.",
                    images: [brico1, brico2]
                },
                {
                    number: 2,
                    type: "Formation Développement applicatif",
                    name: "OpenClassrooms Apprenez à programmer en Java",
                    hoursSpent: 10,
                    date: "05/09/2020",
                    description: "Lors de la rentrée 2020, je me suis intéressé au développement applicatif avec Java. " +
                        "J'avais pour but d'avoir une première approche avec ce langage car il était prévu pour notre 2ème" +
                        " année à l'EPHEC mais finalement il avait été remplacé par le langage Python. Cela m'a permis tout " +
                        "de même de pouvoir avoir une vision sur ce lanages et ses différences avec Python. La formation était divisée en 3 partie : " +
                        " - Les bases du langages (Variables, Conditions, boucles,...) " +
                        " - Programmation orienté objet (Polymorphisme, piles, paramètres" +
                        " - Gestion d'erreurs, lambda, fichiers ",
                    images: [formationjava1, formationjava2, formationjava3, formationjava4]
                },
                {
                    number: 3,
                    type: "Formation Développement Web",
                    name: "Passez au Full Stack avec Node.js, Express et MongoDB",
                    hoursSpent: 10,
                    date: "03/02/2021",
                    description: "Lors du deuxième quadrimestre de ma deuxième année, je me suis intéressé" +
                        "au framework nodejs, au backend express et à la base de données MongoDB" +
                        "Nous étions parti sur du Symfony pour notre projet web mais je cherchais un environnement s'adaptant " +
                        "facilement avec le framework frontend React",
                    images: [formationnodejs1, formationnodejs2, formationnodejs3]
                },
                {
                    number: 4,
                    type: "Formation Hardware / électronique",
                    name: "à compléter",
                    hoursSpent: 10,
                    date: "Août 2022",
                    description: "",
                    images: [formationnodejs1, formationnodejs2, formationnodejs3, formationnodejs4]
                },
                {
                    number: 5,
                    type: "Conférence en présentiel",
                    name: "DevDay 2022",
                    hoursSpent: 9,
                    date: "23/11/2021",
                    description: "Grâce à l'EPHEC, j'ai eu l'opportunité de pouvoir me rendre à l'édition 2022 du" +
                        "Devday lors d'une journée. J'ai participé à 4 conférences:" +
                        "- The Effective Developer - Work Smarter, Not Harder (EN)" +
                        "- On peut vraiment faire tout ça avec une Web App?!? (FR)" +
                        "- Visual Studio 2022 - Codez comme un ninja (FR)" +
                        "- L'immutabilité c'est maintenant (C#) (FR)" +
                        "- Introduction à Appcenter pour la distribution et le test" +
                        "de vos applications mobiles (FR)",
                    images: [devday1, devday2, devday3, devday4]
                },
                {
                    number: 6,
                    type: "Conférence en distanciel",
                    name: "MIC Préparation au stage Conférence Git",
                    hoursSpent: 1,
                    date: "03/02/2022",
                    description: "Pour les débuts de stage 2022, le MIC a organisé une journée de conférence pour apporter une aide" +
                        "au étudiant démarrant leur stage en entreprise lors de ce 2 ème quadrimestre. J'ai alors assisté à la session " +
                        "sur 'Git et Gitflow, la base pour avancer'. Étant plutôt habitué aux outils fournies par les IDE ou par Github Desktop" +
                        "Cela m'a permit d'avoir un très bon rappel sur l'utilisation de git en ligne de commande.",
                    images: [mic1, mic2]
                },
                {
                    number: 7,
                    type: "Conférence en distanciel",
                    name: "LeWagon Atelier DataAnalysis",
                    hoursSpent: 2,
                    date: "31/03/2022",
                    description: "LeWagon est une école proposant des événements de formations d'initiation sur Bruxelles ou à distance." +
                        "Je me suis intéressé à une des sessions sur le Data analysis avec les librairies pandas et NumPy." +
                        "Lors de cette formation, il y avait une partie théorique et pratique dans l'environnement de " +
                        "Jupyter Notebooks. J'ai été surpris de la qualité de cette formation complètement gratuite. ",
                    images: [lewagon1, lewagon2, lewagon3, lewagon4]
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
                    images: [gamejam1, gamejam2, gamejam3, gamejam4, gamejam5, gamejam6, gamejam7]
                },
            ]
        }
    }


    displayInformation(id) {
        this.setState({areActivitiesDisplaying: false})
        this.setState({activityElement: this.state.portfolioActivities[id]})
    }

    displayActivitiesTable() {
        this.setState({areActivitiesDisplaying: true})
    }


    render() {
        console.log(this.state.activityElement)
        let modalComponent;
        if (this.state.areActivitiesDisplaying) {
            modalComponent = <ActivitiesTable portfolioActivities={this.state.portfolioActivities}
                                              displayInformation={this.displayInformation.bind(this)}/>
        } else {
            modalComponent =
                <ModalActivity activityElement={this.state.activityElement}
                               displayActivitiesTable={this.displayActivitiesTable.bind(this)}/>

        }
        return (
            <div className={"portfolioPage container-fluid p-0"}>

                <div className={"containerPortfolio"} style={{backgroundColor: "rgb(26, 61, 86)"}}>
                    <div className={"row"}>
                        <div className={"row"}></div>
                        <div className={"row"}>
                        <center><h1 className={"text-white"}> Sébastien <img src={photoCV} className={"photoCV"}
                                                                             alt={"CV Sébastien VOLONT"}/> Volont</h1>
                        </center>
                        </div>
                        <div className={"row"}></div>


                    </div>
                    <div className={"container-fluid"}>
                        <div className={"row"}>
                            <div className={"col"}></div>
                            <div className={"col"}>
                                <h2 className={"text-center text-white"}> Qui suis-je ?</h2>
                                <h4 className={"text-center text-white"}>
                                    Je m'appelle Sébastien Volont, je suis actuellement étudiant en dernière année de
                                    bachelier en
                                    Technologie de l'informatique à l'EPHEC Louvain-La-Neuve
                                </h4>
                            </div>
                            <div className={"col"}></div>
                        </div>

                        <div className={"row"}>
                            <div className={"col"}>
                                <h1 className={"text-white"}> TECHNOLOGIES - FRAMEWORKS </h1>
                                <ul className={"list-group list-group-horizontal-md"}>
                                    <li className="list-group-item bg-transparent"><img src={mysqlIcon} className={"mysqlElement"}
                                                                         alt={"Mysql icon"}/></li>
                                    <li className="list-group-item bg-transparent">test</li>
                                    <li className="list-group-item bg-transparent">test</li>
                                    <li className="list-group-item bg-transparent">test</li>
                                    <li className="list-group-item bg-transparent">test</li>
                                </ul>
                            </div>
                            <div className={"col"}>
                            </div>
                            <div className={"col"}>
                                <ul className="list-group">
                                    <li className="list-group-item bg-transparent text-white"> <FontAwesomeIcon icon="fas fa-map-marker-alt" /> Nivelles, Belgique</li>
                                    <li className="list-group-item bg-transparent text-white"><FontAwesomeIcon icon="fas fa-at" /> sebastien.volont27@gmail.com</li>
                                    <li className="list-group-item bg-transparent text-white"><FontAwesomeIcon icon="fas fa-mobile-alt" /> +32 495 70 56 28</li>
                                    <li className="list-group-item bg-transparent text-white"><FontAwesomeIcon icon="fas fa-user" /> Né le 27/10/2001</li>
                                    <li className="list-group-item bg-transparent text-white"><FontAwesomeIcon icon="fas fa-globe" /> github.com/sebastienvolont</li>
                                </ul>
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"col"}>
                                <h1 className={"text-white"}> LANGAGES INFORMATIQUES </h1>
                                <ul className={"list-group list-group-horizontal-md"}>
                                    <li className="list-group-item bg-transparent"><img src={mysqlIcon} className={"mysqlElement"}
                                                                         alt={"Mysql icon"}/></li>
                                    <li className="list-group-item bg-transparent">test</li>
                                    <li className="list-group-item bg-transparent">test</li>
                                    <li className="list-group-item bg-transparent">test</li>
                                    <li className="list-group-item bg-transparent">test</li>
                                </ul>
                            </div>
                            <div className={"col"}>
                            </div>
                            <div className={"col"}>
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
                                    <a href={"/static/media/2021-CV-VOLONT_Sebastien.cc32eb1c39aec8ca77a5.pdf"}
                                       target="_blank"><img
                                        className={"cvIcon img-fluid mx-auto d-block"} src={cvIcon}
                                        alt={"CV Icon"}/></a>
                                    <p className={"text-center text-white"}>CV</p>
                                    <p className={"text-center text-white"}>
                                        <a href={"/static/media/2021-CV-VOLONT_Sebastien.cc32eb1c39aec8ca77a5.pdf"}
                                           className={"btn btn-primary"} download>
                                            Télécharger Mon CV
                                        </a>
                                    </p>
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
                                    {modalComponent}
                                </div>
                                <div className="modal-footer">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <footer className="py-3 my-4">
                            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                                <li className="nav-item"><a href="https://github.com/sebastienvolont"
                                                            className="nav-link px-2 text-muted"
                                                            target="_blank"><i className="fa-brands fa-github"></i></a>
                                </li>
                                <li className="nav-item"><a
                                    href="https://www.linkedin.com/in/s%C3%A9bastien-volont-499037223"
                                    className="nav-link px-2 text-muted" target="_blank"><i
                                    className="fa-brands fa-github"></i></a></li>
                            </ul>
                        </footer>
                    </div>
                </div>
                <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                <FontAwesomeIcon icon="fa-solid fa-location-dot" />
            </div>
        )
    }
}


export default Portfolio