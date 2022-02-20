# Bid Up README
![This is an image](https://images.ctfassets.net/rsv5jnhanwkh/GFCtn6RZf8HlaEBhxyQgW/172bc2a400fded11c58168b796e33e48/bidding.gif)
![This is an image](https://apkmody.io/wp-content/uploads/2021/08/Imposter-Smashers-MOD-APK-cover.jpg)
```
$ rails new bid_up_kjr -d postgresql -T
$ cd bid_up_kjr
$ rails db:create
$ git remote add origin (url)
$ git branch -M main
$ git push -u origin main
$ bundle add rspec-
$ rails generate rspec:install
$ bundle add devise
$ rails generate devise:install
$ rails generate devise User
$ bundle add react-rails
$ rails webpacker:install:react
$ rails generate react:install
$ rails generate react:component App
$ rails generate controller Home
$ rails db:migrate
$ rails s
```

### Adding mailer settings
#### You’ll need to set up the default URL options for the Devise mailer in each environment. In the config/environments/development.rb file, add the following code at the end of the previous code inside the file:

```Ruby
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

```
#### app/views/home/index.html.erb
```Ruby
<%= react_component 'App', {
  logged_in: user_signed_in?,
  current_user: current_user,
  new_user_route: new_user_registration_path,
  sign_in_route: new_user_session_path,
  sign_out_route: destroy_user_session_path
} %>
```
```
# in the config/routes.rb

Rails.application.routes.draw do
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end
```

```
$ bundle add bootstrap
$ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
$ yarn add reactstrap
# Add an import to the scss file. Make sure to stop your server and restart after the performing these commands.

app/assets/stylesheets/application.scss

@import 'bootstrap';
```
> add react-router-dom@5.3.0
```
$ yarn add react-router-dom@5.3.0
```
### Feb/19/2022
> made a branch called 'index'
##### Working on the MyAuctions.js(index page) (when user sign in)
>we have some data in seed.rb file, 
>create a mockData.js file, but change start_date_time,end_date_time because there is some error in there, and also has a id in the mockData(different from seed.rb)
>in the App.js file, add some codes
```javascript
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
```

>in the MyAuctions.js file, add some codes
```javascript
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class MyAuctions extends Component {
  
  render() {
    return(
        <>
          <h2> MyAuctions Page </h2>
          {this.props.auctions.map(auction =>{
            return (
              <NavLink to={`/auction_show_route/${auction.id}`} key={auction.id}>  
                <p>{auction.title}</p>
              </NavLink>  
            )
          })}
        </>
    )
  }
}
export default MyAuctions
```
>create AuctionShow.js
```javascript
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class AuctionShow extends Component {
  render() {
    console.log(this.props.auction);
    const { auction } = this.props
    return(
        <>
          <h2> AuctionShow Page </h2>
          <h1>{auction.title}</h1>
          <img src={auction.celebrity_image_url} alt="celebrity image" width="200px"/>
          <p>{auction.description}</p>
          <p>{auction.highest_bid_price}</p>
          <p>{auction.highest_bid_user_id}</p>
          <p>{auction.start_date_time}</p>
          <p>{auction.end_date_time}</p>
          <p>{auction.charity_name}</p>
          <p>{auction.charity_url}</p>
          <p>{auction.has_a_winner}</p>
        </>
    )
  }
}
export default AuctionShow

```