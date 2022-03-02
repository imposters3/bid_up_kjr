import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
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
        <body className="body">
          <h2 className="title"> Create Auction Here </h2>
          <Form>
            <FormGroup>
              <Label for="title" className="subtitle">
                Title
              </Label>
              <Input
                name="title"
                type="text"
                onChange={this.handleChange}
                className="textfield"
                value={this.state.newAuction.title}
              />
            </FormGroup>
            <FormGroup>
              <Label for="celebrity_image_url" className="subtitle">
                Celebrity Image URL
              </Label>
              <Input
                name="celebrity_image_url"
                type="text"
                onChange={this.handleChange}
                className="textfield"
                value={this.state.newAuction.celebrity_image_url}
              />
            </FormGroup>
            <FormGroup>
              <Label for="description" className="subtitle">
                Description
              </Label>
              <Input
                name="description"
                type="text"
                onChange={this.handleChange}
                className="textfield"
                value={this.state.newAuction.description}
              />
            </FormGroup>
            <FormGroup>
              <Label for="highest_bid_price" className="subtitle">
                Base Bid Price
              </Label>
              <Input
                name="highest_bid_price"
                type="text"
                onChange={this.handleChange}
                className="textfield"
                value={this.state.newAuction.highest_bid_price}
              />
            </FormGroup>
            <FormGroup>
              <Label for="start_date_time" className="subtitle">
                Start Date & Time
              </Label>
              <Input
                name="start_date_time"
                type="datetime-local"
                onChange={this.handleChange}
                className="textfield"
                value={this.state.newAuction.start_date_time}
              />
            </FormGroup>
            <FormGroup>
              <Label for="end_date_time" className="subtitle">
                End Date & Time
              </Label>
              <Input
                name="end_date_time"
                type="datetime-local"
                onChange={this.handleChange}
                className="textfield"
                value={this.state.newAuction.end_date_time}
              />
            </FormGroup>
            <FormGroup>
              <Label for="charity_name" className="subtitle">
                Charity Organization Name
              </Label>
              <Input
                name="charity_name"
                type="text"
                onChange={this.handleChange}
                className="textfield"
                value={this.state.newAuction.charity_name}
              />
            </FormGroup>
            <FormGroup>
              <Label for="charity_url" className="subtitle">
                Charity Organization Website
              </Label>
              <Input
                name="charity_url"
                type="text"
                onChange={this.handleChange}
                className="textfield"
                value={this.state.newAuction.charity_url}
              />
            </FormGroup>
            <Button
              onClick={this.handleSubmit.bind(this)}
              name="submit"
              className="buttons"
            >
              Create a New Auction
            </Button>
          </Form>
          {this.state.submitted && <Redirect to="/" />}
        </body>
      </>
    );
  }
}
export default AuctionNew;
