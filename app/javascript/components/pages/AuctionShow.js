import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import BidNew from "../components/BidNew";
import { Redirect } from "react-router-dom";
import moment from "moment";

class AuctionShow extends Component {
  constructor(props) {
    props.readAuction();
    super(props);
    this.state = {
      submitted: false,
    };
  }

  deleteAuction = (id) => {
    fetch(`/auction_items/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((payload) => this.props.readAuction())
      .catch((errors) => console.log("delete Auction errors:", errors));
    this.setState({ submitted: true });
  };

  render() {
    const { auction, loggedIn, currentUser } = this.props;
    if (!auction) {
      return null;
    }
    return (
      <>
        <Form className="col">
          <p className="title">{auction.title}</p>
          <img
            src={auction.celebrity_image_url}
            alt="celebrity image"
            width="200px"
            className="images"
          />
          <FormGroup>
            <Label for="description" className="subtitle">
              Description
            </Label>
            <p className="textfield">{auction.description}</p>
          </FormGroup>
          <FormGroup>
            <Label for="charity_name" className="subtitle">
              Charity Org Name
            </Label>
            <p className="textfield">{auction.charity_name}</p>
          </FormGroup>
          <FormGroup>
            <Label for="charity_url" className="subtitle">
              Charity Link
            </Label>
            <p className="textfield">{auction.charity_url}</p>
          </FormGroup>
          <FormGroup>
            <Label for="start_date_time" className="subtitle">
              Start Date & Time
            </Label>
            <p className="textfield">
              {moment(auction.start_date_time).format("MM-DD-YYYY HH:mm:ss")}
            </p>
          </FormGroup>
          <FormGroup>
            <Label for="end_date_time" className="subtitle">
              End Date & Time
            </Label>
            <p className="textfield">
              {moment(auction.end_date_time).format("MM-DD-YYYY HH:mm:ss")}
            </p>
          </FormGroup>

          <FormGroup>
            <Label for="highest_bid_price" className="subtitle">
              Current Bid Price
            </Label>
            <p className="textfield">${auction.current_bid_price}</p>
          </FormGroup>
          <FormGroup>
            <Label for="highest_bidder" className="subtitle">
              Highest Bidder
            </Label>
            <p className="textfield">{auction.highest_bid_username}</p>
          </FormGroup>
          <div>
            {moment() > moment(auction.end_date_time) && (
              <h1>{auction.highest_bid_username} has won the auction 🎉 </h1>
            )}
          </div>
          {loggedIn && moment() < moment(auction.end_date_time) && (
            <BidNew createBid={this.props.createBid} className="placebid" />
          )}
          {!loggedIn && moment() < moment(auction.end_date_time) && (
            <h2>Register or Sign-in to place a bid</h2>
          )}
          <br />
          <div className="container">
            {loggedIn &&
              currentUser.id === auction.user_id &&
              moment() < moment(auction.start_date_time) && (
                <NavLink to={`/auctionedit/${auction.id}`}>
                  <Button className="buttons">Edit Auction</Button>
                </NavLink>
              )}
            <br />
            {loggedIn &&
              currentUser.id === auction.user_id &&
              moment() > moment(auction.end_date_time) && (
                <Button
                  onClick={() => this.deleteAuction(auction.id)}
                  name="submit"
                  className="buttons"
                >
                  Delete Auction
                </Button>
              )}
            {loggedIn &&
              currentUser.id === auction.user_id &&
              moment() < moment(auction.end_date_time) && (
                <Button
                  onClick={() => this.deleteAuction(auction.id)}
                  name="submit"
                  className="buttons"
                >
                  Delete Auction
                </Button>
              )}
            {this.state.submitted && <Redirect to="/" />}
          </div>
        </Form>
      </>
    );
  }
}
export default AuctionShow;
