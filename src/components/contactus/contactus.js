import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to get in touch, let's build something outstanding
              together!
            </p>
          </div>
        </div>
      </section>
    );
  }
}
