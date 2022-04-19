import React, { Component } from 'react';
import './css/Home.scss';
import {Link} from "react-router-dom";

class Test extends Component {
    render() {
        return(
            <div>
                <header className="header" style={{padding: "2vw 0"}}>
                    <div className="header-text-wrapper nested">
                        <h1 className="header-text col-4"><strong>Kanupriya Jamwal</strong> is a designer, developer &amp; an all around nice person.</h1>
                    </div>
                        <div className="header-image-wrapper">
                            <div className="header-image portrait">
                        
                        </div>
                    </div>
                </header>
                <section className="projects-wrapper">
                    <ul className="projects col-10 offset-2 nested">
                        <li className="project col-8 nested">
                            <div className="project-number col-1">
                            <h3>01</h3>
                            </div>
                            <Link className="project-link fixed" to="/project/hired">
                                <div className="col-3 project-thumb-fixed">
                                <img className="project-thumb" alt="Created a Job Recommendation System in college because we weren't getting any jobs" src="/images/kids-save-money.jpeg" />
                                </div>
                                <div className="col-3 project-title">
                                <h6 className="active">Design</h6>
                                <h2>Hired</h2>
                                <p>How can we get hired easily?</p>
                                </div>
                            </Link>
                        </li>

                        <li className="project col-8 nested">
                            <div className="project-number col-1">
                            <h3>02</h3>
                            </div>
                            <Link className="project-link fixed" to="/project/atm_for_kids">
                                <div className="col-3 project-thumb-fixed">
                                <img className="project-thumb" alt="For an HCI project, we made UI and prototype for an ATM for kids" src="/images/kids-save-money.jpeg" />
                                </div>
                                <div className="col-3 project-title">
                                <h6 className="active">Design</h6>
                                <h2>ATM for kids</h2>
                                <p>Even kids need money now</p>
                                </div>
                            </Link>
                        </li>

                        <li className="project col-8 nested">
                            <div className="project-number col-1">
                            <h3>03</h3>
                            </div>
                            <Link className="project-link fixed" to="/about">
                                <div className="col-3 project-thumb-fixed">
                                <img className="project-thumb" alt="Cleopatra would be a bartender with mad patrons around" src="/images/kids-save-money.jpeg" />
                                </div>
                                <div className="col-3 project-title">
                                <h6 className="active">Illustration</h6>
                                <h2>Cleopatrons</h2>
                                <p>If Cleopatra was not the queen</p>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </section>
            </div>
            
        );
    }
}
export default Test;