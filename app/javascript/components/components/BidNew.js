import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { InputGroup, Input, Button } from "reactstrap";
import { Redirect } from "react-router-dom";

class BidNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newBid: {
        price: "",
      },
      currentAuction: {
        title: "",
        celebrity_image_url: "",
        description: "",
        highest_bid_price: "",
        highest_bid_user_id: "",
        start_date_time: "",
        end_date_time: "",
        charity_name: "",
        charity_url: "",
        has_a_winner: false,
      },
      submitted: false,
    };
  }
  handleChange = (e) => {
    let { newBid } = this.state;
    newBid[e.target.name] = e.target.value;
    this.setState({ newBid: newBid });
  };

  handleSubmit = () => {
    // this.props.createBid(this.state.newBid);
    // this.setState({ submitted: true });
    this.props.test()
  };

  render() {
    return (
      <>
        <div>
          <InputGroup>
            <Button onClick={this.handleSubmit} color="danger">
              Place Bid
            </Button>
            <Input placeholder="must be higher than current price" />
          </InputGroup>
        </div>
      </>
    );
  }
}
export default BidNew;
