import '../App.css'
import {Link} from "react-router-dom";

function Cv() {
    return (
        <div>
            <Link to={"/"} className={"btn btn-info"}>Portfolio</Link>
            <h1> Curriculum Vitae </h1>
        </div>
    )
}

export default Cv