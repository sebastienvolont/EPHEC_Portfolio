import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import 'jquery'

import 'bootstrap/dist/css/bootstrap.css'


require('bootstrap')
require('jquery')

class ModalActivity extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="">
                    <button className={"btn btn-primary"} onClick={this.props.displayActivitiesTable}><FontAwesomeIcon
                        icon="fa-solid fa-arrow-left" style={{height: "2em"}}/></button>
                </div>
                <div className="text-center">
                    <h1> {this.props.activityElement.name} </h1>
                    <img src={this.props.activityElement.images[0]} className={"img-fluid rounded mx-auto d-block"}
                         alt={""}/>
                </div>

                <div>
                    <p className={"fs-4"}>
                        {this.props.activityElement.description}
                    </p>
                </div>

                <div>
                    <div id="carouselExampleControls" className="carousel slide carousel-dark" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            {
                                this.props.activityElement.images.map((image, index) => {
                                        if (index > 0) {
                                            if (index == 1) {
                                                return (
                                                    <div key={index} className="carousel-item active" data-bs-interval="10000">
                                                        <img src={image} className="d-block w-100" alt="..."/>
                                                    </div>
                                                )
                                            }
                                            else {
                                                return (
                                                    <div key={index} className="carousel-item" data-bs-interval="10000">
                                                        <img src={image} className="d-block w-100" alt="..."/>
                                                    </div>
                                                )
                                            }
                                        } else {
                                            return false
                                        }
                                    }
                                )
                            }
                        </div>
                        <button className="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>


                </div>
            </div>
        )
    }
}

export default ModalActivity