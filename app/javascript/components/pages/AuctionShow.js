import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class AuctionShow extends Component {
  render() {
    console.log(this.props.auction);
    const { auction } = this.props
    return(
        <>
          <h2> AuctionShow Page </h2>
          <h1>{auction.title}</h1>
          <img src={auction.celebrity_image_url} alt="celebrity image" width="200px"/>
          <p>{auction.description}</p>
          <p>{auction.highest_bid_price}</p>
          <p>{auction.highest_bid_user_id}</p>
          <p>{auction.start_date_time}</p>
          <p>{auction.end_date_time}</p>
          <p>{auction.charity_name}</p>
          <p>{auction.charity_url}</p>
          <p>{auction.has_a_winner}</p>
        </>
    )
  }
}
export default AuctionShow
