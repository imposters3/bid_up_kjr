import React, { Component } from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { Redirect } from "react-router-dom"

class AuctionEdit extends Component {
  constructor(props) {
    super(props)
    const { user_id, ...auction } = props.auction
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
    console.log("Handle Auction Sub.JS:", this.state.updateAuction)
    this.setState({ submitted: true })
  }

  render() {
    console.log("auction Edit Render:", this.state)
    return (
      <>
        <h2> Auction Edit Page </h2>
        <Form>
          <FormGroup>
            <Label for="title">title</Label>
            <Input name="title" type="text" onChange={this.handleChange} value={this.state.updateAuction.title} />
          </FormGroup>
          <FormGroup>
            <Label for="celebrity_image_url">celebrity_image_url</Label>
            <Input
              name="celebrity_image_url"
              type="text"
              onChange={this.handleChange}
              value={this.state.updateAuction.celebrity_image_url}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">description</Label>
            <Input
              name="description"
              type="text"
              onChange={this.handleChange}
              value={this.state.updateAuction.description}
            />
          </FormGroup>
          <FormGroup>
            <Label for="highest_bid_price">highest_bid_price</Label>
            <Input
              name="highest_bid_price"
              type="text"
              onChange={this.handleChange}
              value={this.state.updateAuction.highest_bid_price}
            />
          </FormGroup>
          <FormGroup>
            <Label for="start_date_time">start_date_time</Label>
            <Input
              name="start_date_time"
              type="datetime-local"
              onChange={this.handleChange}
              value={this.state.updateAuction.start_date_time}
            />
          </FormGroup>
          <FormGroup>
            <Label for="end_date_time">end_date_time</Label>
            <Input
              name="end_date_time"
              type="datetime-local"
              onChange={this.handleChange}
              value={this.state.updateAuction.end_date_time}
            />
          </FormGroup>
          <FormGroup>
            <Label for="charity_name">charity_name</Label>
            <Input
              name="charity_name"
              type="text"
              onChange={this.handleChange}
              value={this.state.updateAuction.charity_name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="charity_url">charity_url</Label>
            <Input
              name="charity_url"
              type="text"
              onChange={this.handleChange}
              value={this.state.updateAuction.charity_url}
            />
          </FormGroup>
        </Form>
        <Button onClick={this.handleSubmit} name="submit">
          Edit Auction
        </Button>
        {this.state.submitted && <Redirect to="/my_auctions_route" />}
      </>
    )
  }
}
export default AuctionEdit
