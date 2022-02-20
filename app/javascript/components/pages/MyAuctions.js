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
                <p>{auction.title}</p>
              </NavLink>  
            )
          })}
        </>
    )
  }
}
export default MyAuctions
