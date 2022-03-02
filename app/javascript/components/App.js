import React, { Component } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import MyAuctions from "./pages/MyAuctions";
import MyBids from "./pages/MyBids";
import AuctionNew from "./pages/AuctionNew";
import AuctionEdit from "./pages/AuctionEdit";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuctionShow from "./pages/AuctionShow";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auctions: [],
    };
  }

  componentDidMount() {
    this.readAuction();
  }

  readAuction = () => {
    fetch("/auction_items")
      .then((response) => response.json())
      .then((auction_items) => this.setState({ auctions: auction_items }))
      .catch((errors) => console.log("Auction read errors:", errors));
  };

  createAuction = (auction) => {
    fetch("/auction_items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ auction_item: auction }),
    })
      .then((response) => response.json())
      .then((payload) => this.readAuction())
      .catch((errors) => console.log("create Auction errors:", errors));
  };

  updateAuction = (updateAuction, id) => {
    fetch(`/auction_items/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ auction_item: updateAuction }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) =>
      response
        .json()
        .then((payload) => this.readAuction())
        .catch((errors) => console.log("Auction create errors:", errors))
    );
  };

  createBid = (auction_item_id) => (price) => {
    fetch("/bids", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bid: { price, auction_item_id: auction_item_id },
      }),
    }).then(() => this.readAuction());
  };

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
      auction_new_route,
      my_auctions_route,
      auction_show_route,
      my_bids_route,
      bid_new_route,
    } = this.props;
    return (
      <>
        <Router>
          <Header {...this.props} />
          <Switch className="nav-bar">
            <Route
              exact
              path="/"
              render={(props) => <Home auctions={this.state.auctions} />}
            />
            <Route
              path="/my_auctions_route"
              render={(props) => <MyAuctions auctions={this.state.auctions} />}
            />
            <Route
              path="/auction_show_route/:id"
              render={(props) => {
                let id = props.match.params.id;
                let auction = this.state.auctions.find(
                  (auction) => auction.id == id
                );
                return (
                  <AuctionShow
                    auction={auction}
                    currentUser={current_user}
                    loggedIn={logged_in}
                    currentUser={current_user}
                    createBid={this.createBid(id)}
                    readAuction={this.readAuction}
                  />
                );
              }}
            />
            <Route
              path="/auction_new_route"
              render={(props) => (
                <AuctionNew createAuction={this.createAuction} />
              )}
            />

            <Route
              path="/auctionedit/:id"
              render={(props) => {
                let id = +props.match.params.id;
                let auction = this.state.auctions.find(
                  (auction) => auction.id === id
                );
                return (
                  <AuctionEdit
                    auction={auction}
                    updateAuction={this.updateAuction}
                    id={id}
                  />
                );
              }}
            />
            <Route path="/my_bids_route" component={MyBids} />
            <Route path="/about" component={AboutUs} />
          </Switch>
        </Router>
      </>
    );
  }
}
export default App;
