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
      submitted: false,
    };
  }

  // handleChange = (e) => {
  //   let { newBid } = this.state;
  //   newBid[e.target.name] = e.target.value;
  //   this.setState({ newBid: newBid });
  // };
  //
  // handleSubmit = () => {
  //   this.props.createBid(this.state.newBid);
  //   this.setState({ submitted: true });
  // };

  render() {
    return (
      <>
        <div>
          <InputGroup>
            <Button color="danger">Place Bid</Button>
            <Input placeholder="must be higher than current price" />
          </InputGroup>
        </div>
      </>
    );
  }
}
export default BidNew;
