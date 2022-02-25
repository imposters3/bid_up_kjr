class AuctionItem < ApplicationRecord
  belongs_to :user
  has_many :bids
  attribute :highest_bid_username
  def highest_bid
    bids.order("bids.price DESC").limit(1).first
  end
  def highest_bid_username
    highest_bid&.user&.username 
  end
end
