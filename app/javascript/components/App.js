import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
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
      sign_out_route
    } = this.props
    console.log("sign_in_route:",sign_in_route);
    console.log("sign_out_route:",sign_out_route);
    return(
      <>
          <Header {...this.props}/>
          <Home/>
          <Footer/>
      </>
    )
  }
}

export default App
