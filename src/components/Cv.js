import '../App.css'
import {Link} from "react-router-dom";
import cvPdf from '../assets/images/2021-CV-VOLONT_Sebastien.pdf'

function Cv() {
    return (
        <div>
            <Link to={"/"} className={"btn btn-info"}>Portfolio</Link>
            <h1> Curriculum Vitae </h1>
            <img src={cvPdf}/>
        </div>
    )
}

export default Cv