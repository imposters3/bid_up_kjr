import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import BidNew from "../components/BidNew";
import { Redirect } from "react-router-dom"

class AuctionShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submitted: false,
    }
  }

  deleteAuction = (id) => {
    fetch(`/auction_items/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => response.json())
    .then(payload => this.props.readAuction())
    .catch(errors => console.log("delete Auction errors:", errors))
    this.setState({ submitted: true })
  }


  render() {
    const { auction } = this.props;
    
    return (
      <>
        <h2> AuctionShow Page </h2>
        <Form>
           <h1>{auction.title}</h1>
          <img
            src={auction.celebrity_image_url}
            alt="celebrity image"
            width="200px"
          />
          <FormGroup>
            <Label for="description">Description</Label>
            <p>{auction.description}</p>
          </FormGroup>
          <FormGroup>
            <Label for="highest_bid_price">Highest Bid Price</Label>
            <p>{auction.highest_bid_price}</p>
          </FormGroup>
          {/* <FormGroup>
            <Label for="highest_bidder">Highest Bidder</Label>
            <p>{highest_bid_username}</p>
          </FormGroup> */}
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
          <BidNew createBid={this.props.createBid}/>
          <NavLink to={`/auctionedit/${auction.id}`}>
            <Button>Edit Auction</Button>
          </NavLink>
          <Button onClick={()=>this.deleteAuction(auction.id)} name="submit">Delete Auction</Button>
          {this.state.submitted && <Redirect to="/my_auctions_route" />}
        </Form>
      </>
    );
  }
}
export default AuctionShow;
