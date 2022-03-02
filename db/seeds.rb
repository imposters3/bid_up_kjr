# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create username: 'username', email: 'test@testing.com', password: 'password', password_confirmation: 'password'

user_2 = User.create username: 'username2', email: 'test2@testing.com', password: 'password2', password_confirmation: 'password2'


auction_items = [
  {
    title: 'BBQ with Snoop Dog',
    celebrity_image_url: 'https://resources.tidal.com/images/3e29689c/351e/4832/9c33/45619c5e46dc/750x750.jpg',
    description: 'On his superyacht',
    highest_bid_price: 1000,
    highest_bid_user_id: 1,
    start_date_time: "2022-03-23 19:00:00",
    end_date_time: "2022-03-28 19:00:00",
    charity_name: 'Donate.org',
    charity_url: 'https://www.linkedin.com/in/charity-johnson-9555929',
    has_a_winner: false,
    user_id: 1
  },
  {
    title: 'Work out with the Rock',
    celebrity_image_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/therock-253954517-279993034023432-628278073878740852-n-1636731864.jpg?resize=640:*',
    description: 'In Gym',
    highest_bid_price: 2000,
    highest_bid_user_id: 1,
    start_date_time: "2022-03-23 19:00:00",
    end_date_time: "2022-03-28 19:00:00",
    charity_name: 'Donate.org',
    charity_url: 'https://www.linkedin.com/in/charity-johnson-9555929',
    has_a_winner: false,
    user_id: 2
  }

]

auction_items.each do |attribute|
  user.auction_items.create attribute
end
