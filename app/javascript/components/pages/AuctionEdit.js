import React, { Component } from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { Redirect } from "react-router-dom"
import moment from "moment"

class AuctionEdit extends Component {
  constructor(props) {
    super(props)
    const {user_id, ...auction} = props.auction
    this.state = {
      updateAuction: {
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
        ...auction,
      },
      submitted: false,
    }
  }

  handleChange = (e) => {
    let { updateAuction } = this.state
    updateAuction[e.target.name] = e.target.value
    this.setState({ updateAuction: updateAuction })
  }

  handleSubmit = () => {
    this.props.updateAuction(this.state.updateAuction, this.props.id)
    this.setState({ submitted: true })
  }

  render() {
    return (
      <>
       <body className="body">
        <h2 className="title">  Edit Your Auction Here </h2>
        <Form>
          <FormGroup>
            <Label for="title" className="subtitle">Title</Label>
            <Input name="title" type="text" onChange={this.handleChange} value={this.state.updateAuction.title} className="textfield"/>
          </FormGroup>
          <FormGroup>
            <Label for="celebrity_image_url" className="subtitle">Celebrity Image URL</Label>
            <Input
              name="celebrity_image_url"
              type="text"
              onChange={this.handleChange}
              value={this.state.updateAuction.celebrity_image_url} className="textfield"
            />
          </FormGroup>
          <FormGroup>
            <Label for="description" className="subtitle">Description</Label>
            <Input
              name="description"
              type="text"
              onChange={this.handleChange}
              value={this.state.updateAuction.description} className="textfield"
            />
          </FormGroup>
          <FormGroup>
            <Label for="highest_bid_price" className="subtitle">Base Bid Price</Label>
            <Input
              name="highest_bid_price"
              type="text"
              onChange={this.handleChange}
              value={this.state.updateAuction.highest_bid_price} className="textfield"
            />
          </FormGroup>
          <FormGroup>
            <Label for="start_date_time" className="subtitle">Start Date & Time</Label>
            <Input
              name="start_date_time"
              type="datetime-local"
              onChange={this.handleChange}
              value={moment(this.state.updateAuction.start_date_time).format("YYYY-MM-DDTHH:mm:ss")}
              className="textfield"
            />
          </FormGroup>
          <FormGroup>
            <Label for="end_date_time" className="subtitle">End Date & Time</Label>
            <Input
              name="end_date_time"
              type="datetime-local"
              onChange={this.handleChange}
              value={moment(this.state.updateAuction.end_date_time).format("YYYY-MM-DDTHH:mm:ss")}
              className="textfield"
            />
          </FormGroup>
          <FormGroup>
            <Label for="charity_name" className="subtitle">Charity Organization Name</Label>
            <Input
              name="charity_name"
              type="text"
              onChange={this.handleChange}
              value={this.state.updateAuction.charity_name}
              className="textfield"
            />
          </FormGroup>
          <FormGroup>
            <Label for="charity_url" className="subtitle">Charity Organization Website</Label>
            <Input
              name="charity_url"
              type="text"
              onChange={this.handleChange}
              value={this.state.updateAuction.charity_url}
              className="textfield"
            />
          </FormGroup>
        </Form>
        <div class="container">
          <Button onClick={this.handleSubmit} name="submit" className="buttons" >
            Update Auction
          </Button>
          {this.state.submitted && <Redirect to="/my_auctions_route" />}
        </div>
        </body>
      </>
    )
  }
}
export default AuctionEdit
