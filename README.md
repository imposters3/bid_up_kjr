# README
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

###Adding mailer settings
####You’ll need to set up the default URL options for the Devise mailer in each environment. In the config/environments/development.rb file, add the following code at the end of the previous code inside the file:

```Ruby
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

```
####app/views/home/index.html.erb
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
config/routes.rb

Rails.application.routes.draw do
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end

```
$ bundle add bootstrap
$ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
$ yarn add reactstrap
Add an import to the scss file. Make sure to stop your server and restart after the performing these commands.

app/assets/stylesheets/application.scss

@import 'bootstrap';
```

$ yarn add react-router-dom@5.3.0
```
