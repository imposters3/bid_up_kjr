import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'

class AuctionShow extends Component {
  render() {
    console.log(this.props.auction);
    const { auction } = this.props
    return(
        <>
          <h2> AuctionShow Page </h2>
          <Form>
            
            <h1>{auction.title}</h1>
            
            <img src={auction.celebrity_image_url} alt="celebrity image" width="200px"/>
            <FormGroup>
              <Label for="description">Description</Label>
              <p>{auction.description}</p>
            </FormGroup>
            <FormGroup>
              <Label for="highest_bid_price">Highest Bid Price</Label>
              <p>{auction.highest_bid_price}</p>
            </FormGroup>
            <FormGroup>
              <Label for="highest_bid_user_id">Highest Bid User ID</Label>
              <p>{auction.highest_bid_user_id}</p>
            </FormGroup>
            <FormGroup>
              <Label for="start_date_time">Start Date & Time</Label>
              <p>{auction.start_date_time}</p>
            </FormGroup>
            <FormGroup>
              <Label for="end_date_time">End Date & Time</Label>
              <p>{auction.end_date_time}</p>
            </FormGroup>
            <FormGroup>
              <Label for="charity_name">Charity Org Name</Label>
              <p>{auction.charity_name}</p>
            </FormGroup>
            <FormGroup>
              <Label for="charity_url">Charity Link</Label>
              <p>{auction.charity_url}</p>
            </FormGroup>
        
            <NavLink to={`/auctionedit/${auction.id}`}>
              <Button>
                Edit Auction
              </Button>
            </NavLink>
            <NavLink to="/my_auctions_route">
              <Button>
                Delete Auction
              </Button>
            </NavLink>
          </Form>
        </>
    )
  }
}
export default AuctionShow
