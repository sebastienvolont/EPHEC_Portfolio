import '../App.css'
import {Link} from "react-router-dom";
import photoCV from "../assets/images/2021-CV-Photo.jpeg";
import computerIcon from '../assets/images/computer-element.png'
import cvIcon from '../assets/images/cv-element.png'
import ActivitiesTable from "./ActivitiesTable";

function Portfolio() {
    let portfolioActivities = [
        {
            number: 1,
            type: "Communication et gestion",
            name: "Job étudiant Brico",
            hoursSpent: 150,
            date: "Août 2019",
            description: ""
        },
        {
            number: 2,
            type: "Formation Développement applicatif",
            name: "OpenClassrooms Apprenez à programmer en Java",
            hoursSpent: 10,
            date: "05/09/2020",
            description: ""
        },
        {
            number: 3,
            type: "Formation Développement Web",
            name: "Passez au Full Stack avec Node.js, Express et MongoDB",
            hoursSpent: 10,
            date: "03/02/2021",
            description: ""
        },
        {
            number: 4,
            type: "Formation Hardware / électronique",
            name: "à compléter",
            hoursSpent: 10,
            date: "à compléter",
            description: ""
        },
        {
            number: 5,
            type: "Conférence en présentiel",
            name: "DevDay 2022",
            hoursSpent: 9,
            date: "23/11/2021", description: ""
        },
        {
            number: 6,
            type: "Conférence en distanciel",
            name: "MIC Préparation au stage Conférence Git",
            hoursSpent: 2,
            date: "Février 2022",
            description: ""
        },
        {
            number: 7,
            type: "Conférence en distanciel",
            name: "LeWagon Atelier DataAnalysis",
            hoursSpent: 10,
            date: "Mars 2022",
            description: ""
        },
        {
            number: 8,
            type: "Hackathon en présentiel",
            name: "GameJam Louvain-Li-Nux 2022",
            hoursSpent: 27,
            date: "02/04/2022 au 03/04/2022",
            description: ""
        },
    ];
    return (
        <div className={"portfolioPage container-fluid"}>

            <div className={"containerPortfolio"}>
                <Link to={"/CV"} className={"btn btn-primary"}>CV</Link>
                <center><h1 className={"text-white"}> Sébastien <img src={photoCV} className={"photoCV"} alt={"CV Sébastien VOLONT"}/> Volont</h1></center>
            </div>
            <div className={"footerPortfolio"}>
                <div className={""}>
                    <img className={"computerIcon mx-auto d-block"} src={computerIcon} alt={"Computer Icon"} data-bs-toggle="modal" data-bs-target="#exampleModal"/>
                    <p className={"text-center text-white"}>Portfolio</p>
                </div>
                <div>
                    <img className={"cvIcon"} src={cvIcon} alt={"CV Icon"}/>
                    <p className={"text-center text-white"}>CV</p>
                </div>
            </div>

            <div className="modal fade portfolioModal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl portfolioDialog">
                    <div className="modal-content portfolioContent">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"><p className={"text-center"}>Portfolio</p></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ActivitiesTable portfolioActivities={portfolioActivities} />
                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio