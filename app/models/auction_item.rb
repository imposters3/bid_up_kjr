class AuctionItem < ApplicationRecord
  belongs_to :user
  has_many :bids
  attribute :highest_bid_username
  attribute :current_bid_price
  def highest_bid
    bids.order("bids.price DESC").limit(1).first
  end
  def highest_bid_username
    highest_bid&.user&.username 
  end
  def current_bid_price
    return highest_bid&.price if highest_bid.present?
    return highest_bid_price if highest_bid_price.present?
    return 0
  end
end
