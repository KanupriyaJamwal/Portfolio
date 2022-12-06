import React, { Component } from "react";
import "./css/Development.scss";
import { Link } from "react-router-dom";

class Development extends Component {
  render() {
    return (
      <div>
        <header
          className="header col-9 offset-3 nested"
          style={{ padding: "2vw 0" }}
        >
          <div className="col-7">
            <div className="header-image development"></div>
          </div>
        </header>

        <section className="projects-wrapper">
          <ul className="projects col-10 offset-2 nested">
            <li className="project col-8 nested" id="project-1">
              <div className="project-number col-1">
                <h3>01</h3>
              </div>
              <Link className="project-link fixed" to="/project/hired">
                <div className="col-3 project-thumb-fixed">
                  <img
                    className="project-thumb"
                    alt="Created a Job Recommendation System in college because we weren't getting any jobs"
                    src={require("./images/hired_stamp.png")}
                  />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Development</h6>
                  <h2>Hired</h2>
                  <p>How can we get hired?</p>
                </div>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Development;