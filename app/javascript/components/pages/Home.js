import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <>
        <div className="flex-grid">
          {this.props.auctions.map((auction) => {
            return (
              <div className="col card">
                <NavLink
                  to={`/auction_show_route/${auction.id}`}
                  key={auction.id}
                >
                  <img
                    src={auction.celebrity_image_url}
                    alt="celebrity image"
                    width="200px"
                  />
                  <p>{auction.title}</p>
                </NavLink>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
export default Home;
