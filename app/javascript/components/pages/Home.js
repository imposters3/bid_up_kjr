import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Home extends Component {

  render() {
    return(
        <>
        {this.props.auctions.map(auction =>{
          return (
            <NavLink to={`/auction_show_route/${auction.id}`} key={auction.id}>
              <img src={auction.celebrity_image_url} alt="celebrity image" width="200px"/>
              <p>{auction.title}</p>
            </NavLink>
          )
        })}
        </>
    )
  }
}
export default Home
