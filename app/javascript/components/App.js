import React, { Component } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import MyAuctions from './pages/MyAuctions'
import MyBids from './pages/MyBids'
import CreateAuctions from './pages/CreateAuctions'
import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom'
import auctions from './mockData'
import AuctionShow from './pages/AuctionShow'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      auctions: auctions
    }
  }
  
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
      create_auction_route,
      my_auctions_route,
      auction_show_route,
      my_bids_route
    } = this.props

    return(
      <>
        <Router>
         <Header {...this.props}/>
          <Switch className="nav-bar">
            <Route exact path="/" component={Home} />
            <Route path="/create_auction_route" component={CreateAuctions} />   

            <Route path="/my_auctions_route" render={(props) => <MyAuctions auctions={this.state.auctions} />} />
            
            <Route path="/auction_show_route/:id" render={(props) => {
              let paramId = +props.match.params.id
              let auction = this.state.auctions.find(auction => auction.id === paramId )
              return <AuctionShow auction={auction}/>}} />
            
            <Route path="/my_bids_route" component={MyBids} />
            <Route path="/about" component={AboutUs} />
          </Switch>
        </Router>
      </>
    )
  }
}
export default App
