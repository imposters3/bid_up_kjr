import React, { Component } from 'react';
import aboutus from 'images/aboutus.jpg';

class AboutUs extends Component {
  render() {
    return(
        <>
          <body className='"body1'>
            <div className="body1">
                <img style={{ textAlign: "center" }}src={aboutus} alt="About us logo"/>
            </div>
            <div className="row">
              <div className="body1">
                <div className="card1">
                  <div className="container">
                    <h2>Kevin Smith</h2>
                    <p className="container">Product && Project Manager </p>
                    <p>Bio</p>
                    <br/>
                    <a
                      href="https://www.linkedin.com/in/kevin-michael-smith-83157b182/"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
              <div className="body1">
                <div className="card1">
                  <div className="container">
                    <h2>Raul Marquez</h2>
                    <p className="container">Design Lead</p>
                    <p>Bio</p>
                    <br/>
                    <a
                      href="https://www.linkedin.com/in/raul-marquez-veteran/"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <div className="body1">
                <div className="card1">
                  <div className="container">
                    <h2>Jason Wang</h2>
                    <p className="container">Tech Lead</p>
                    <p>
                      Full Stack Developer in progress.
                    </p>
                    <a
                      href="https://www.linkedin.com/in/jason-wang-b207a862/"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </body>
        </>
    )
  }
}
export default AboutUs
