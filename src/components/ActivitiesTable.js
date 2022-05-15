import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/fontawesome-free-solid'

class ActivitiesTable extends React.Component {

    render() {
        console.log(this.props.portfolioActivities)
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th className={"text-center"}> Numéro </th>
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
                            <tr key={activity.number}>
                                <td><p className={"text-center"}> {activity.number} </p></td>
                                <td><p className={"text-center"}> {activity.type} </p></td>
                                <td><p className={"text-center"}> {activity.name} </p></td>
                                <td><p className={"text-center"}> {activity.hoursSpent} </p></td>
                                <td><p className={"text-center"}> {activity.date} </p></td>
                                <td><p className={"text-center"}><FontAwesomeIcon icon={faCircle} className={"text-primary"} /></p></td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ActivitiesTable