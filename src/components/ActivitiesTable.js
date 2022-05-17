import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircle} from '@fortawesome/fontawesome-free-solid'
import ModalActivity from "./ModalActivity";

class ActivitiesTable extends React.Component {

    render() {
        let nombresHeures = 0;
        console.log(this.props.portfolioActivities)
        return (
            <div className={"container-fluid table-responsive"}>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th className={"text-center"}> Numéro</th>
                        <th className={"text-center"}> Type</th>
                        <th className={"text-center"}> Nom</th>
                        <th className={"text-center"}> Temps consacré</th>
                        <th className={"text-center"}> Date</th>
                        <th className={"text-center"}> Plus d'informations</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.portfolioActivities.map(activity =>
                            <tr key={activity.number} className={"accordion-item"}>
                                <td><p className={"text-center"}> {activity.number} </p></td>
                                <td><p className={"text-center"}> {activity.type} </p></td>
                                <td><p className={"text-center"}> {activity.name} </p></td>
                                <td><p className={"text-center"}> {activity.hoursSpent} h </p></td>
                                <td><p className={"text-center"}> {activity.date} </p></td>
                                <td>
                                    <p className={"text-center"}>
                                        <button type="button" className="btn btn-primary" data-toggle="modal"
                                                data-target="#exampleModalLong">
                                            <FontAwesomeIcon icon={faCircle} className={"text-primary"}/>
                                        </button>
                                    </p>
                                </td>
                            </tr>
                        )
                    }
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total heures : </td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>

                <div>

                {
                    this.props.portfolioActivities.map(activity =>
                        <ModalActivity description={activity.description} images={activity.images} name={activity.name}/>
                    )
                }
                </div>

            </div>

        )
    }
}

export default ActivitiesTable