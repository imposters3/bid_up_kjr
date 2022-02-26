import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class MyAuctions extends Component {

  render() {
    return(
        <>
         <body className="body">
          {this.props.auctions.map(auction =>{
            return (
              <NavLink to={`/auction_show_route/${auction.id}`} key={auction.id}>
                <div className="flex-grid">
                  <div className="col card">
                    <img src={auction.celebrity_image_url} alt="celebrity image" width="200px"/>
                    <p>{auction.title}</p>
                    <p>${auction.highest_bid_price}</p>
                  </div>
                </div>
              </NavLink>
            )
          })}
         </body>
       </>
    )
  }
}
export default MyAuctions
