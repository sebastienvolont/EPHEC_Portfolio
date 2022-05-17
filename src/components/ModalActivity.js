import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircle} from '@fortawesome/fontawesome-free-solid'
import 'jquery'

import 'bootstrap/dist/css/bootstrap.css'


require('bootstrap')
require('jquery')

class ModalActivity extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="">
                    <button className={"btn btn-primary"} onClick={this.props.displayActivitiesTable}> Retour </button>

                </div>
                <div className="text-center">
                    <h1> {this.props.activityElement.name} </h1>
                    <img src={this.props.activityElement.images[0]} className={"img-fluid rounded mx-auto d-block"} alt={""}/>
                </div>

                <div>
                    <p className={"fs-4"}>
                        {this.props.activityElement.description}
                    </p>
                </div>

                <div>
                    {
                        this.props.activityElement.images.map(image =>
                            <img className="d-block w-100" src={image} alt=""/>
                        )
                    }


                </div>
            </div>
        )
    }
}

export default ModalActivity