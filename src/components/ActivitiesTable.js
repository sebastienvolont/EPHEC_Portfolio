import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircle} from '@fortawesome/fontawesome-free-solid'

class ActivitiesTable extends React.Component {

    render() {
        let nombresHeuresTotal = 0;
        let nombresHeuresValorisables = 0;
        return (
            <div className={"container-fluid table-responsive"}>
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th scope={"col"} className={"text-center"}> Numéro</th>
                            <th scope={"col"} className={"text-center"}> Type</th>
                            <th scope={"col"} className={"text-center"}> Nom</th>
                            <th scope={"col"} className={"text-center"}> Temps consacré</th>
                            <th scope={"col"} className={"text-center"}> Temps valorisable</th>
                            <th scope={"col"} className={"text-center"}> Date</th>
                            <th scope={"col"} className={"text-center"}> Plus d'informations</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.portfolioActivities.map((activity, index) => {
                                nombresHeuresTotal += activity.hoursSpent;
                                nombresHeuresValorisables += activity.hoursValuable;
                                    return <tr key={index} className={"accordion-item"}>
                                        <th scope={"row"}><p className={"text-center"}> {activity.number} </p></th>
                                        <td><p className={"text-center"}> {activity.type} </p></td>
                                        <td><p className={"text-center"}> {activity.name} </p></td>
                                        <td><p className={"text-center"}> {activity.hoursSpent} h </p></td>
                                        <td><p className={"text-center"}> {activity.hoursValuable} h </p></td>
                                        <td><p className={"text-center"}> {activity.date} </p></td>
                                        <td>
                                            <p className={"text-center"}>
                                                <button type="button" className="btn btn-primary" data-toggle="modal"
                                                        data-target="#exampleModalLong"
                                                        onClick={() => this.props.displayInformation(index)}>
                                                    <FontAwesomeIcon icon="fa-solid fa-info"/>
                                                </button>
                                            </p>
                                        </td>
                                    </tr>
                                }
                            )
                        }
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Total : {nombresHeuresTotal} heures </td>
                            <td>Total: {nombresHeuresValorisables} heures </td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>

                    <div>


                    </div>

                </div>

        )
    }
}

export default ActivitiesTable