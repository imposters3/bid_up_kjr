import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import aboutus from 'images/aboutus.jpg';

class AboutUs extends Component {
  render() {
    return(
        <>
          <h2> About us Page </h2>
            <div className="aboutus">
                <img src={aboutus} alt="About uslogo"/>
            </div>
        </>
    )
  }
}
export default AboutUs
