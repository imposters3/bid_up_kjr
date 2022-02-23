import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Redirect } from "react-router-dom";

class AuctionNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newAuction: {
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
        user_id: "",
      },
      submitted: false,
    };
  }

  handleChange = (e) => {
    let { newAuction } = this.state;
    newAuction[e.target.name] = e.target.value;
    this.setState({ newAuction: newAuction });
  };

  handleSubmit = () => {
    this.props.createAuction(this.state.newAuction);
    this.setState({ submitted: true });
  };

  render() {
    return (
      <>
        <h2> AuctionNewPage </h2>
        <Form>
          <FormGroup>
            <Label for="title">title</Label>
            <Input
              name="title"
              type="text"
              onChange={this.handleChange}
              value={this.state.newAuction.title}
            />
          </FormGroup>
          <FormGroup>
            <Label for="celebrity_image_url">celebrity_image_url</Label>
            <Input
              name="celebrity_image_url"
              type="text"
              onChange={this.handleChange}
              value={this.state.newAuction.celebrity_image_url}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">description</Label>
            <Input
              name="description"
              type="text"
              onChange={this.handleChange}
              value={this.state.newAuction.description}
            />
          </FormGroup>
          <FormGroup>
            <Label for="highest_bid_price">highest_bid_price</Label>
            <Input
              name="highest_bid_price"
              type="text"
              onChange={this.handleChange}
              value={this.state.newAuction.highest_bid_price}
            />
          </FormGroup>
          <FormGroup>
            <Label for="start_date_time">start_date_time</Label>
            <Input
              name="start_date_time"
              type="datetime-local"
              onChange={this.handleChange}
              value={this.state.newAuction.start_date_time}
            />
          </FormGroup>
          <FormGroup>
            <Label for="end_date_time">end_date_time</Label>
            <Input
              name="end_date_time"
              type="datetime-local"
              onChange={this.handleChange}
              value={this.state.newAuction.end_date_time}
            />
          </FormGroup>
          <FormGroup>
            <Label for="charity_name">charity_name</Label>
            <Input
              name="charity_name"
              type="text"
              onChange={this.handleChange}
              value={this.state.newAuction.charity_name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="charity_url">charity_url</Label>
            <Input
              name="charity_url"
              type="text"
              onChange={this.handleChange}
              value={this.state.newAuction.charity_url}
            />
          </FormGroup>
        </Form>
        <button onClick={this.handleSubmit.bind(this)} name="submit">
          Create a New Auction
        </button>
        {this.state.submitted && <Redirect to="/my_auctions_route" />}
      </>
    );
  }
}
export default AuctionNew;
