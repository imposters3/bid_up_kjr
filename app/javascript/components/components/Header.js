import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import bidLogo from 'images/bid-up-moon.png';
import AboutUs from '../pages/AboutUs';
import CreateAuctions from '../pages/CreateAuctions';
import MyAuctions from '../pages/MyAuctions';
import MyBids from '../pages/MyBids';
import { Nav, NavItem } from 'reactstrap';
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
      sign_out_route,
      create_auction_route,
      my_auctions_route,
      my_bids_route
    } = this.props

    return (
      <>
        <header>
          <Router>
            <div className="nav-bar">
              <NavLink to="/">
                <img src={bidLogo} alt="Bid up logo" className="logo"/>
              </NavLink>
            </div>
          </Router>
          
          <Router>
            <div className="nav-bar">
              {logged_in &&
                <NavLink to= "/create_auction_route" className="nav-link">Create Auction</NavLink>
              }
              {logged_in &&
                <NavLink to= "/my_auctions_route" className="nav-link">My Auctions</NavLink>
              }
              {logged_in &&
                <NavLink to= "/my_bids_route" className="nav-link">My Bids</NavLink>
              }
            </div>
           </Router>

           <div className="nav-bar">
              <Router>
                <Nav>
                  <NavItem>
                    <NavLink to="/about" className="nav-link">About Us</NavLink>
                  </NavItem>
                </Nav>
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
      </>
    )
  }
}
export default Header
