import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <>
        <div className="container">
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
                      className="images"
                    />
                    <p className="subtitle">{auction.title}</p>
                    <p className="subtitle">💲{auction.current_bid_price}💲</p>
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
export default Home;
