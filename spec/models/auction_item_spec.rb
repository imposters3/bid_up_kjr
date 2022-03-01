require 'rails_helper'

RSpec.describe AuctionItem, type: :model do
  it 'is not valid without a title' do
    willie = AuctionItem.create celebrity_image_url: 'imagesrc.com', description: 'Hang out with Willie', highest_bid_price: 0, start_date_time: '2-23-2022 1900:12.21', end_date_time: '2-28-2022 1900:12.21',  charity_name: 'ACS', charity_url: 'cancer.org'
    expect(willie.errors[:title]).to_not be_empty
  end
  it 'is not valid without a celebrity image' do
    willie = AuctionItem.create title: 'Willie Nelson', description: 'Hang out with Willie', highest_bid_price: 0,  start_date_time: '2-23-2022 1900:12.21', end_date_time: '2-28-2022 1900:12.21',  charity_name: 'ACS', charity_url: 'cancer.org'
    expect(willie.errors[:celebrity_image_url]).to_not be_empty
  end
  it 'is not valid without a description' do
    willie = AuctionItem.create title: 'Willie Nelson', celebrity_image_url: 'imagesrc.com', highest_bid_price: 0, start_date_time: '2-23-2022 1900:12.21', end_date_time: '2-28-2022 1900:12.21',  charity_name: 'ACS', charity_url: 'cancer.org'
    expect(willie.errors[:description]).to_not be_empty
  end
  it 'is not valid without a starting bid price' do
    willie = AuctionItem.create title: 'Willie Nelson', celebrity_image_url: 'imagesrc.com', description: 'Hang out with Willie', start_date_time: '2-23-2022 1900:12.21', end_date_time: '2-28-2022 1900:12.21', charity_name: 'ACS', charity_url: 'cancer.org'
    expect(willie.errors[:highest_bid_price]).to_not be_empty
  end
  it 'is not valid without a starting date and time' do
    willie = AuctionItem.create title: 'Willie Nelson', celebrity_image_url: 'imagesrc.com', highest_bid_price: 0, description: 'Hang out with Willie', end_date_time: '2-28-2022 1900:12.21',  charity_name: 'ACS', charity_url: 'cancer.org'
    expect(willie.errors[:start_date_time]).to_not be_empty
  end
  it 'is not valid without a ending date and time' do
    willie = AuctionItem.create title: 'Willie Nelson', celebrity_image_url: 'imagesrc.com', highest_bid_price: 0,  description: 'Hang out with Willie', start_date_time: '2-28-2022 1900:12.21',  charity_name: 'ACS', charity_url: 'cancer.org'
    expect(willie.errors[:end_date_time]).to_not be_empty
  end
  it 'is not valid without a charity name' do
    willie = AuctionItem.create title: 'Willie Nelson', celebrity_image_url: 'imagesrc.com', highest_bid_price: 0,  description: 'Hang out with Willie', start_date_time: '2-28-2022 1900:12.21', end_date_time: '2-28-2022 1900:12.21', charity_url: 'cancer.org'
    expect(willie.errors[:charity_name]).to_not be_empty
  end
  it 'is not valid without a charity url' do
    willie = AuctionItem.create title: 'Willie Nelson', celebrity_image_url: 'imagesrc.com', highest_bid_price: 0,  description: 'Hang out with Willie', start_date_time: '2-28-2022 1900:12.21', end_date_time: '2-28-2022 1900:12.21', charity_name: 'ACS'
    expect(willie.errors[:charity_url]).to_not be_empty
  end
end