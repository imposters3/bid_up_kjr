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
  handleChange = (e) => {
    let { newBid } = this.state;
    newBid[e.target.name] = e.target.value;
    this.setState({ newBid: newBid });
  };

  handleSubmit = () => {
    this.props.createBid(this.state.newBid.price);
    this.setState({ submitted: true });
  };

  render() {
    return (
      <>
        <div>
          <InputGroup>
            <Button onClick={this.handleSubmit.bind(this)} color="danger">
              Place Bid
            </Button>
            <Input type="number" name="price" onChange={this.handleChange} />
          </InputGroup>
        </div>
      </>
    );
  }
}
export default BidNew;
