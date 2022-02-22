import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class MyAuctions extends Component {

  render() {
    return(
        <>
          <h2> MyAuctions Page </h2>
          {this.props.auctions.map(auction =>{
            return (
              <NavLink to={`/auction_show_route/${auction.id}`} key={auction.id}>
                <div className="flex-grid">
                  <div className="col">
                    <img src={auction.celebrity_image_url} alt="celebrity image" width="200px"/>
                    <p>{auction.title}</p>
                  </div>
                </div>
              </NavLink>
            )
          })}
        </>
    )
  }
}
export default MyAuctions
