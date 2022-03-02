import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import BidLogo from "images/bid-up-moon.png";
import AboutUs from "../pages/AboutUs";
import AuctionNew from "../pages/AuctionNew";
import MyAuctions from "../pages/MyAuctions";
import MyBids from "../pages/MyBids";
import { Nav, NavItem } from "reactstrap";

class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
      auction_new_route,
      my_auctions_route,
      my_bids_route,
    } = this.props;

    return (
      <>
        <header>
          <div className="nav-bar">
            <NavLink to="/">
              <img src={BidLogo} alt="Bid up logo" className="logo" />
            </NavLink>
          </div>
          <div className="nav-bar">
            {logged_in && (
              <NavLink to="/auction_new_route" className="nav-link">
                Create Auction
              </NavLink>
            )}
            
          </div>
          <div className="nav-bar">
            <Nav>
              <NavItem>
                <NavLink to="/about" className="nav-link">
                  About Us
                </NavLink>
              </NavItem>
            </Nav>
            {!logged_in && (
              <a href={new_user_route} className="nav-link">
                Sign Up
              </a>
            )}
            {logged_in && (
              <a href={sign_out_route} className="nav-link">
                Sign Out
              </a>
            )}
            {!logged_in && (
              <a href={sign_in_route} className="nav-link">
                Sign In
              </a>
            )}
          </div>
        </header>
      </>
    );
  }
}
export default Header;
