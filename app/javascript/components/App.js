import React, { Component } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import MyAuctions from './pages/MyAuctions'
import MyBids from './pages/MyBids'
import CreateAuctions from './pages/CreateAuctions'
import {
  BrowserRouter as  Router,
  NavLink,
  Route,
  Switch
} from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap'

class App extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
      create_auction_route,
      my_auctions_route,
      my_bids_route
    } = this.props

    return(
      <>
          <Header {...this.props}/>
          <Router>
            <Switch className="nav-bar">
              <Route exact path="/" component={Home} />
              <Route path="/create_auction_route" component={create_auction_route} />
              <Route path="/my_auctions_route" component={my_auctions_route} />
              <Route path="/my_bids_route" component={my_bids_route} />
              <Route path="/about" component={AboutUs} />
            </Switch>
          </Router>
      </>
    )
  }
}
export default App
