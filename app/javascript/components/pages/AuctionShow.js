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
      <body className="body">
        <Form className="col card">
           <p className="title">{auction.title}</p>
          <img
            src={auction.celebrity_image_url}
            alt="celebrity image"
            width="200px"
            className="images"
          />
          <FormGroup>
            <Label for="description" className="subtitle">Description</Label>
            <p className="textfield" >{auction.description}</p>
          </FormGroup>
          <FormGroup>
            <Label for="highest_bid_price" className="subtitle">Highest Bid Price</Label>
            <p className="textfield">${auction.highest_bid_price}</p>
          </FormGroup>
          {/* <FormGroup>
            <Label for="highest_bidder">Highest Bidder</Label>
            <p>{highest_bid_username}</p>
          </FormGroup> */}
          <FormGroup>
            <Label for="start_date_time" className="subtitle">Start Date & Time</Label>
            <p className="textfield">{auction.start_date_time}</p>
          </FormGroup>
          <FormGroup>
            <Label for="end_date_time" className="subtitle">End Date & Time</Label>
            <p className="textfield">{auction.end_date_time}</p>
          </FormGroup>
          <FormGroup>
            <Label for="charity_name" className="subtitle">Charity Org Name</Label>
            <p className="textfield">{auction.charity_name}</p>
          </FormGroup>
          <FormGroup>
            <Label for="charity_url" className="subtitle">Charity Link</Label>
            <p className="textfield">{auction.charity_url}</p>
          </FormGroup>
          <BidNew createBid={this.props.createBid} className="placebid"/>
          <br/>
          <div className="container">
            <NavLink to={`/auctionedit/${auction.id}`}>
              <Button className="buttons">Edit Auction</Button>
            </NavLink>
            <br/>
              <Button onClick={()=>this.deleteAuction(auction.id)} name="submit" className="buttons">Delete Auction</Button>
            {this.state.submitted && <Redirect to="/my_auctions_route" />}
          </div>
        </Form>
        </body>
      </>
    );
  }
}
export default AuctionShow;
