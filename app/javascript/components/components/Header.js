import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import bidLogo from 'images/bid-up-moon.png';
import AboutUs from '../pages/AboutUs'
import { Nav, NavItem } from 'reactstrap'
import {
  BrowserRouter as  Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'

class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props

    return (
      <header>
        <div className="nav-bar">
          <a href="/">
            <img src={bidLogo} alt="Bid up logo" className="logo"/>
          </a>
        </div>
        <div className="nav-bar">
          <Router>
            <Nav>
              <NavItem>
                <Link to="/about" className="nav-link">About Us</Link>
              </NavItem>
            </Nav>
              <Switch className="nav-bar">
                <Route path="/about" component={AboutUs} />
              </Switch>
          </Router>
          {!logged_in &&
            <a href={new_user_route} className="nav-link">Sign Up</a>
          }
          {logged_in &&
            <a href={sign_out_route} className="nav-link">Sign Out</a>
          }
          {!logged_in &&
            <a href={sign_in_route} className="nav-link">Sign In</a>
          }
        </div>
      </header>
    )
  }
}
export default Header
