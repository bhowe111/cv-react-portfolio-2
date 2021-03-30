import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="images/bhowe-studio.jpeg"
              alt=""
            />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              Hello there! I'm a full-stack software engineer experienced in{" "}
              <span>
                gathering, analyzing and compiling information from disparate
                resources into engaging products.
              </span>{" "}
              My background in the service industry, education, journalism, and
              radio informs my problem-solving approach of doing more with less.
            </p>

            <p>
              I am most interested in working with organizations actively
              involved in projects to make societies sustainable and equitable.
            </p>

            <p>
              I write, conduct, record, and produce interviews with innovators
              in business technology and the arts. I also play folk rock and go
              bouldering.
            </p>
            <br />

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br></br>
                  <span>{resumeData.address}</span>
                  <br></br>
                  <span>
                    <a href="mailto:brendan.howe1@gmail.com">
                      {resumeData.email}
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
